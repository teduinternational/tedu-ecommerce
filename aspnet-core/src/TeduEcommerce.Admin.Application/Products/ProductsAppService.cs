using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Threading.Tasks;
using TeduEcommerce.ProductCategories;
using TeduEcommerce.Products;
using Volo.Abp;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.BlobStoring;
using Volo.Abp.Domain.Repositories;

namespace TeduEcommerce.Admin.Products
{
    public class ProductsAppService : CrudAppService<
        Product,
        ProductDto,
        Guid,
        PagedResultRequestDto,
        CreateUpdateProductDto,
        CreateUpdateProductDto>, IProductsAppService
    {
        private readonly ProductManager _productManager;
        private readonly IRepository<ProductCategory> _productCategoryRepository;
        private readonly IBlobContainer<ProductThumbnailPictureContainer> _fileContainer;
        public ProductsAppService(IRepository<Product, Guid> repository,
            IRepository<ProductCategory> productCategoryRepository,
            ProductManager productManager, IBlobContainer<ProductThumbnailPictureContainer> fileContainer)
            : base(repository)
        {
            _productManager = productManager;
            _productCategoryRepository = productCategoryRepository;
            _fileContainer = fileContainer;
        }

        public override async Task<ProductDto> CreateAsync(CreateUpdateProductDto input)
        {
            var product = await _productManager.CreateAsync(input.ManufacturerId, input.Name, input.Code, input.Slug, input.ProductType, input.SKU,
                input.SortOrder, input.Visibility, input.IsActive, input.CategoryId, input.SeoMetaDescription, input.Description, input.SellPrice);
            
            if (input.ThumbnailPictureContent != null && input.ThumbnailPictureContent.Length > 0)
            {
                await SaveThumbnailImageAsync(input.ThumbnailPictureName, input.ThumbnailPictureContent);
                product.ThumbnailPicture = input.ThumbnailPictureName;
            }
            
            var result = await Repository.InsertAsync(product);

            return ObjectMapper.Map<Product, ProductDto>(result);
        }

        public override async Task<ProductDto> UpdateAsync(Guid id, CreateUpdateProductDto input)
        {
            var product = await Repository.GetAsync(id);
            if (product == null)
                throw new BusinessException(TeduEcommerceDomainErrorCodes.ProductIsNotExists);
            product.ManufacturerId = input.ManufacturerId;
            product.Name = input.Name;
            product.Code = input.Code;
            product.Slug = input.Slug;
            product.ProductType = input.ProductType;
            product.SKU = input.SKU;
            product.SortOrder = input.SortOrder;
            product.Visibility = input.Visibility;
            product.IsActive = input.IsActive;

            if (product.CategoryId != input.CategoryId)
            {
                product.CategoryId = input.CategoryId;
                var category = await _productCategoryRepository.GetAsync(x => x.Id == input.CategoryId);
                product.CategoryName = category.Name;
                product.CategorySlug = category.Slug;
            }
            product.SeoMetaDescription = input.SeoMetaDescription;
            product.Description = input.Description;

            if (input.ThumbnailPictureContent != null && input.ThumbnailPictureContent.Length > 0)
            {
                await SaveThumbnailImageAsync(input.ThumbnailPictureName, input.ThumbnailPictureContent);
                product.ThumbnailPicture = input.ThumbnailPictureName;

            }
            product.SellPrice = input.SellPrice;
            await Repository.UpdateAsync(product);

            return ObjectMapper.Map<Product, ProductDto>(product);
        }

        public async Task DeleteMultipleAsync(IEnumerable<Guid> ids)
        {
            await Repository.DeleteManyAsync(ids);
            await UnitOfWorkManager.Current.SaveChangesAsync();
        }

        public async Task<List<ProductInListDto>> GetListAllAsync()
        {
            var query = await Repository.GetQueryableAsync();
            query = query.Where(x => x.IsActive == true);
            var data = await AsyncExecuter.ToListAsync(query);

            return ObjectMapper.Map<List<Product>, List<ProductInListDto>>(data);
        }

        public async Task<PagedResultDto<ProductInListDto>> GetListFilterAsync(ProductListFilterDto input)
        {
            var query = await Repository.GetQueryableAsync();
            query = query.WhereIf(!string.IsNullOrWhiteSpace(input.Keyword), x => x.Name.Contains(input.Keyword));
            query = query.WhereIf(input.CategoryId.HasValue, x => x.CategoryId == input.CategoryId);

            var totalCount = await AsyncExecuter.LongCountAsync(query);
            var data = await AsyncExecuter.ToListAsync(query.Skip(input.SkipCount).Take(input.MaxResultCount));

            return new PagedResultDto<ProductInListDto>(totalCount, ObjectMapper.Map<List<Product>, List<ProductInListDto>>(data));
        }

        private async Task SaveThumbnailImageAsync(string fileName, string base64)
        {
            Regex regex = new Regex(@"^[\w/\:.-]+;base64,");
            base64 = regex.Replace(base64, string.Empty);
            byte[] bytes = Convert.FromBase64String(base64);
            await _fileContainer.SaveAsync(fileName, bytes, overrideExisting: true);
        }
    }
}