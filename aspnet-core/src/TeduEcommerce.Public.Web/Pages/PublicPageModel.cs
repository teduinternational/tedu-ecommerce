using TeduEcommerce.Localization;
using Volo.Abp.AspNetCore.Mvc.UI.RazorPages;

namespace TeduEcommerce.Public.Web.Pages;

/* Inherit your PageModel classes from this class.
 */
public abstract class PublicPageModel : AbpPageModel
{
    protected PublicPageModel()
    {
        LocalizationResourceType = typeof(TeduEcommerceResource);
    }
}
