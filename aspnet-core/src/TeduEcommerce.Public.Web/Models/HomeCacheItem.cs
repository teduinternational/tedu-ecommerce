using System.Collections.Generic;
using TeduEcommerce.Public.ProductCategories;
using TeduEcommerce.Public.Products;

namespace TeduEcommerce.Public.Web.Models
{
    public class HomeCacheItem
    {
        public List<ProductCategoryInListDto> Categories { set; get; }
        public List<ProductInListDto> TopSellerProducts { set; get; }
    }
}
