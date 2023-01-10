using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Public.ProductAttributes
{
    public interface IProductAttributesAppService : IReadOnlyAppService
        <ProductAttributeDto,
        Guid, 
        PagedResultRequestDto>
    {
        Task<PagedResultDto<ProductAttributeInListDto>> GetListFilterAsync(BaseListFilterDto input);
        Task<List<ProductAttributeInListDto>> GetListAllAsync();
   }
}
