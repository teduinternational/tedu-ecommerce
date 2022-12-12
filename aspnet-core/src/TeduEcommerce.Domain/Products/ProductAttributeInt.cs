using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace TeduEcommerce.Products
{
    public class ProductAttributeInt : Entity<Guid>
    {
        public ProductAttributeInt(Guid id, Guid attributeId, Guid productId, int value)
        {
            Id = id;
            AttributeId = attributeId;
            ProductId = productId;
            Value = value;
        }

        public Guid AttributeId { get; set; }
        public Guid ProductId { get; set; }
        public int Value { get; set; }
    }
}
