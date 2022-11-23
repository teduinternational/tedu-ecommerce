using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Domain.Entities;

namespace TeduEcommerce.Products
{
    public class ProductTag : Entity
    {
        public Guid ProductId { get; set; }
        public string TagId { get; set; }

        public override object[] GetKeys()
        {
            return new object[] { ProductId, TagId };
        }
    }
}
