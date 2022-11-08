using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Admin.ProductCategories
{
    public interface IProductCategoriesAppService : ICrudAppService
        <ProductCategoryDto,
        Guid, 
        PagedResultRequestDto,
        CreateUpdateProductCategoryDto, 
        CreateUpdateProductCategoryDto>
    {
        Task<PagedResultDto<ProductCategoryInListDto>> GetListFilterAsync(BaseListFilterDto input);
    }
}
