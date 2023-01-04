using System;
using System.Collections.Generic;
using System.Text;
using TeduEcommerce.Localization;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Public;

/* Inherit your application services from this class.
 */
public abstract class TeduEcommercePublicAppService : ApplicationService
{
    protected TeduEcommercePublicAppService()
    {
        LocalizationResource = typeof(TeduEcommerceResource);
    }
}
