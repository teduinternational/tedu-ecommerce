using TeduEcommerce.Localization;
using Volo.Abp.Authorization.Permissions;
using Volo.Abp.Localization;

namespace TeduEcommerce.Admin.Permissions;

public class TeduEcommercePermissionDefinitionProvider : PermissionDefinitionProvider
{
    public override void Define(IPermissionDefinitionContext context)
    {
        var myGroup = context.AddGroup(TeduEcommercePermissions.GroupName);
        //Define your own permissions here. Example:
        //myGroup.AddPermission(TeduEcommercePermissions.MyPermission1, L("Permission:MyPermission1"));
    }

    private static LocalizableString L(string name)
    {
        return LocalizableString.Create<TeduEcommerceResource>(name);
    }
}
