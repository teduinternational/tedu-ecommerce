using System;
using TeduEcommerce.Public.Products;

namespace TeduEcommerce.Public.Web.Models
{
    public class CartItem
    {
        public ProductDto  Product { get; set; }
        public int Quantity { get; set; }
    }
}
