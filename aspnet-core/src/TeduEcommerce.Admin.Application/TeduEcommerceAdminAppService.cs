using System;
using System.Collections.Generic;
using System.Text;
using TeduEcommerce.Localization;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Admin;

/* Inherit your application services from this class.
 */
public abstract class TeduEcommerceAdminAppService : ApplicationService
{
    protected TeduEcommerceAdminAppService()
    {
        LocalizationResource = typeof(TeduEcommerceResource);
    }
}
