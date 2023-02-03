using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduEcommerce.ProductCategories;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TeduEcommerce.Public.ProductCategories
{
    public class ProductCategoriesAppService : CrudAppService<
        ProductCategory,
        ProductCategoryDto,
        Guid,
        PagedResultRequestDto>, IProductCategoriesAppService
    {
        private readonly IRepository<ProductCategory, Guid> _productCategoryRepository;
        public ProductCategoriesAppService(IRepository<ProductCategory, Guid> repository)
            : base(repository)
        {
            _productCategoryRepository = repository;
        }

        public async Task<ProductCategoryDto> GetByCodeAsync(string code)
        {
            var category = await _productCategoryRepository.GetAsync(x=>x.Code==code);

            return ObjectMapper.Map<ProductCategory, ProductCategoryDto>(category);
        }

        public async Task<ProductCategoryDto> GetBySlugAsync(string slug)
        {
            var productCategory = await _productCategoryRepository.GetAsync(x => x.Slug == slug);
            return ObjectMapper.Map<ProductCategory, ProductCategoryDto>(productCategory);
        }

        public async Task<List<ProductCategoryInListDto>> GetListAllAsync()
        {
            var query = await Repository.GetQueryableAsync();
            query = query.Where(x=>x.IsActive == true);
            var data = await AsyncExecuter.ToListAsync(query);

            return ObjectMapper.Map<List<ProductCategory>, List<ProductCategoryInListDto>>(data);

        }
        public async Task<PagedResult<ProductCategoryInListDto>> GetListFilterAsync(BaseListFilterDto input)
        {
            var query = await Repository.GetQueryableAsync();
            query = query.WhereIf(!string.IsNullOrWhiteSpace(input.Keyword), x => x.Name.Contains(input.Keyword));

            var totalCount = await AsyncExecuter.LongCountAsync(query);
            var data = await AsyncExecuter
               .ToListAsync(
                  query.Skip((input.CurrentPage - 1) * input.PageSize)
               .Take(input.PageSize));

            return new PagedResult<ProductCategoryInListDto>(
                ObjectMapper.Map<List<ProductCategory>, List<ProductCategoryInListDto>>(data),
                totalCount,
                input.CurrentPage,
                input.PageSize
            );
        }
    }
}
