using TeduEcommerce.Localization;
using Volo.Abp.AspNetCore.Mvc;

namespace TeduEcommerce.Public.Controllers;

/* Inherit your controllers from this class.
 */
public abstract class TeduEcommercePublicController : AbpControllerBase
{
    protected TeduEcommercePublicController()
    {
        LocalizationResource = typeof(TeduEcommerceResource);
    }
}
