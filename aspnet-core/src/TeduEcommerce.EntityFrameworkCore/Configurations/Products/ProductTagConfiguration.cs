using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TeduEcommerce.Products
{
    public class ProductTagConfiguration : IEntityTypeConfiguration<ProductTag>
    {
        public void Configure(EntityTypeBuilder<ProductTag> builder)
        {
            builder.ToTable(TeduEcommerceConsts.DbTablePrefix + "ProductTags");
            builder.HasKey(x => new { x.ProductId, x.TagId });
        }
    }
}
