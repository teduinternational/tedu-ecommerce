using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities.Auditing;

namespace TeduEcommerce.Orders
{
    public class Order : FullAuditedAggregateRoot<Guid>
    {
        public string Code { get; set; }
        public OrderStatus Status { get; set; }
        public PaymentMethod PaymentMethod { get; set; }
        public double ShippingFee { get; set; }
        public double Tax { get; set; }
        public double Total { get; set; }
        public double Subtotal { get; set; }
        public double Discount { get; set; }
        public double GrandTotal { get; set; }
        public string CustomerName { get; set; }
        public string CustomerPhoneNumber { get; set; }
        public string CustomerAddress { get; set; }
        public Guid? CustomerUserId { get; set; }
    }
}
