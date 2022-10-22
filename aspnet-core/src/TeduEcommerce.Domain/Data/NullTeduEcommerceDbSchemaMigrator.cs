using System.Threading.Tasks;
using Volo.Abp.DependencyInjection;

namespace TeduEcommerce.Data;

/* This is used if database provider does't define
 * ITeduEcommerceDbSchemaMigrator implementation.
 */
public class NullTeduEcommerceDbSchemaMigrator : ITeduEcommerceDbSchemaMigrator, ITransientDependency
{
    public Task MigrateAsync()
    {
        return Task.CompletedTask;
    }
}
