using TeduEcommerce.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TeduEcommerce.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TeduEcommerceController : AbpControllerBase
{
    protected TeduEcommerceController()
    {
        LocalizationResource = typeof(TeduEcommerceResource);
    }
}
