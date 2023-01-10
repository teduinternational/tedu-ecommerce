using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Public.ProductCategories
{
    public interface IProductCategoriesAppService : IReadOnlyAppService
        <ProductCategoryDto,
        Guid, 
        PagedResultRequestDto>
    {
        Task<PagedResultDto<ProductCategoryInListDto>> GetListFilterAsync(BaseListFilterDto input);
        Task<List<ProductCategoryInListDto>> GetListAllAsync();
    }
}
