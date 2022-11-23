using TeduEcommerce.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TeduEcommerce.Admin.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TeduEcommerceController : AbpControllerBase
{
    protected TeduEcommerceController()
    {
        LocalizationResource = typeof(TeduEcommerceResource);
    }
}
