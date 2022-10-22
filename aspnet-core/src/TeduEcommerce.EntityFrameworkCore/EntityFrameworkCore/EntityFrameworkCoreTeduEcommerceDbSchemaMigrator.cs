using System;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using TeduEcommerce.Data;
using Volo.Abp.DependencyInjection;

namespace TeduEcommerce.EntityFrameworkCore;

public class EntityFrameworkCoreTeduEcommerceDbSchemaMigrator
    : ITeduEcommerceDbSchemaMigrator, ITransientDependency
{
    private readonly IServiceProvider _serviceProvider;

    public EntityFrameworkCoreTeduEcommerceDbSchemaMigrator(
        IServiceProvider serviceProvider)
    {
        _serviceProvider = serviceProvider;
    }

    public async Task MigrateAsync()
    {
        /* We intentionally resolving the TeduEcommerceDbContext
         * from IServiceProvider (instead of directly injecting it)
         * to properly get the connection string of the current tenant in the
         * current scope.
         */

        await _serviceProvider
            .GetRequiredService<TeduEcommerceDbContext>()
            .Database
            .MigrateAsync();
    }
}
