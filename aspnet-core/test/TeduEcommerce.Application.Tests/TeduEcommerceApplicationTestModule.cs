using Volo.Abp.Modularity;

namespace TeduEcommerce;

[DependsOn(
    typeof(TeduEcommerceApplicationModule),
    typeof(TeduEcommerceDomainTestModule)
    )]
public class TeduEcommerceApplicationTestModule : AbpModule
{

}
