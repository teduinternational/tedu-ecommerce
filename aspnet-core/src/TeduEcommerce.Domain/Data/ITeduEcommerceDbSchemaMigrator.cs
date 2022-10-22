using System.Threading.Tasks;

namespace TeduEcommerce.Data;

public interface ITeduEcommerceDbSchemaMigrator
{
    Task MigrateAsync();
}
