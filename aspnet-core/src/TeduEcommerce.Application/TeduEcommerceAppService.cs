using System;
using System.Collections.Generic;
using System.Text;
using TeduEcommerce.Localization;
using Volo.Abp.Application.Services;

namespace TeduEcommerce;

/* Inherit your application services from this class.
 */
public abstract class TeduEcommerceAppService : ApplicationService
{
    protected TeduEcommerceAppService()
    {
        LocalizationResource = typeof(TeduEcommerceResource);
    }
}
