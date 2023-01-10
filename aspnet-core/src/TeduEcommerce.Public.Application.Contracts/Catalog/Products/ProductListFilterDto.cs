using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Public.Products
{
    public class ProductListFilterDto : BaseListFilterDto
    {
        public Guid? CategoryId { get; set; }
    }
}
