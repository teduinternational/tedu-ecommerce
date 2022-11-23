using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace TeduEcommerce.InventoryTickets
{
    public class InventoryTicketItem : Entity<Guid>
    {
        public Guid TicketId { get; set; }
        public Guid ProductId { get; set; }
        public string SKU { get; set; }
        public int Quantity { get; set; }
        public string BatchNumber { get; set; }
        public DateTime? ExpiredDate { get; set; }
    }
}
