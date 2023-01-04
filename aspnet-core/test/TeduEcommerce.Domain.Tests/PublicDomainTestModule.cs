using TeduEcommerce.EntityFrameworkCore;
using Volo.Abp.Modularity;

namespace TeduEcommerce.Public;

[DependsOn(
    typeof(TeduEcommerceEntityFrameworkCoreTestModule)
    )]
public class PublicDomainTestModule : AbpModule
{

}
