using Volo.Abp.Modularity;

namespace TeduEcommerce.Public;

[DependsOn(
    typeof(TeduEcommercePublicApplicationModule),
    typeof(TeduEcommerceDomainTestModule)
    )]
public class TeduEcommercePublicApplicationTestModule : AbpModule
{

}
