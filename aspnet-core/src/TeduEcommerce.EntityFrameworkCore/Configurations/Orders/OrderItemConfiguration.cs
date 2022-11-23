using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace TeduEcommerce.Orders
{
    public class OrderItemConfiguration : IEntityTypeConfiguration<OrderItem>
    {
        public void Configure(EntityTypeBuilder<OrderItem> builder)
        {
            builder.ToTable(TeduEcommerceConsts.DbTablePrefix + "OrderItems");
            builder.HasKey(x => new { x.ProductId, x.OrderId });
            builder.Property(x => x.SKU)
                 .HasMaxLength(50)
                 .IsUnicode(false)
                 .IsRequired();
        }
    }
}
