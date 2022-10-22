using Volo.Abp.Ui.Branding;
using Volo.Abp.DependencyInjection;

namespace TeduEcommerce;

[Dependency(ReplaceServices = true)]
public class TeduEcommerceBrandingProvider : DefaultBrandingProvider
{
    public override string AppName => "TeduEcommerce";
}
