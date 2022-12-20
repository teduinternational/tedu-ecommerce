using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Admin.Manufacturers
{
    public interface IManufacturersAppService : ICrudAppService
        <ManufacturerDto,
        Guid, 
        PagedResultRequestDto,
        CreateUpdateManufacturerDto,
        CreateUpdateManufacturerDto>
    {
        Task<PagedResultDto<ManufacturerInListDto>> GetListFilterAsync(BaseListFilterDto input);
        Task<List<ManufacturerInListDto>> GetListAllAsync();
        Task DeleteMultipleAsync(IEnumerable<Guid> ids);
    }
}
