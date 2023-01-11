using Microsoft.AspNetCore.Authorization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TeduEcommerce.ProductAttributes;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.Domain.Repositories;

namespace TeduEcommerce.Public.ProductAttributes
{
    public class ProductAttributesAppService : ReadOnlyAppService<
        ProductAttribute,
        ProductAttributeDto,
        Guid,
        PagedResultRequestDto>, IProductAttributesAppService
    {
        public ProductAttributesAppService(IRepository<ProductAttribute, Guid> repository)
            : base(repository)
        {
        }

        public async Task<List<ProductAttributeInListDto>> GetListAllAsync()
        {
            var query = await Repository.GetQueryableAsync();
            query = query.Where(x => x.IsActive == true);
            var data = await AsyncExecuter.ToListAsync(query);

            return ObjectMapper.Map<List<ProductAttribute>, List<ProductAttributeInListDto>>(data);

        }

        public async Task<PagedResult<ProductAttributeInListDto>> GetListFilterAsync(BaseListFilterDto input)
        {
            var query = await Repository.GetQueryableAsync();
            query = query.WhereIf(!string.IsNullOrWhiteSpace(input.Keyword), x => x.Label.Contains(input.Keyword));

            var totalCount = await AsyncExecuter.LongCountAsync(query);
            var data = await AsyncExecuter
               .ToListAsync(
                  query.Skip((input.CurrentPage - 1) * input.PageSize)
               .Take(input.PageSize));

            return new PagedResult<ProductAttributeInListDto>(
                ObjectMapper.Map<List<ProductAttribute>, List<ProductAttributeInListDto>>(data),
                totalCount,
                input.CurrentPage,
                input.PageSize
            );
        }
    }
}
