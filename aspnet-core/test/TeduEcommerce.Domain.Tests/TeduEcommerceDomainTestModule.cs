using TeduEcommerce.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace TeduEcommerce;

[DependsOn(
    typeof(TeduEcommerceEntityFrameworkCoreTestModule)
    )]
public class TeduEcommerceDomainTestModule : AbpModule
{

}
