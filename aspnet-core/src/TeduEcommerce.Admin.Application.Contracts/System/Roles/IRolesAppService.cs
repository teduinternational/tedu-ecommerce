using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;
using Volo.Abp.PermissionManagement;

namespace TeduEcommerce.Admin.Roles
{
    public interface IRolesAppService : ICrudAppService
        <RoleDto,
        Guid,
        PagedResultRequestDto,
        CreateUpdateRoleDto,
        CreateUpdateRoleDto>
    {
        Task<PagedResultDto<RoleInListDto>> GetListFilterAsync(BaseListFilterDto input);
        Task<List<RoleInListDto>> GetListAllAsync();
        Task DeleteMultipleAsync(IEnumerable<Guid> ids);

        Task<GetPermissionListResultDto> GetPermissionsAsync(string providerName, string providerKey);
        Task UpdatePermissionsAsync(string providerName, string providerKey, UpdatePermissionsDto input);
    }
}
