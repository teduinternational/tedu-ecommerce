using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduEcommerce.InventoryTickets;

namespace TeduEcommerce.InventoryTickets
{
    public class InventoryTicketConfiguration : IEntityTypeConfiguration<InventoryTicket>
    {
        public void Configure(EntityTypeBuilder<InventoryTicket> builder)
        {
            builder.ToTable(TeduEcommerceConsts.DbTablePrefix + "InventoryTickets");
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Code)
                .HasMaxLength(50)
                .IsUnicode(false)
                .IsRequired();
        }
    }
}
