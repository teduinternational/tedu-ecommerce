using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace TeduEcommerce.Public.Web;

[Dependency(ReplaceServices = true)]
public class TeduEcommercePublicBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "Public";
}
