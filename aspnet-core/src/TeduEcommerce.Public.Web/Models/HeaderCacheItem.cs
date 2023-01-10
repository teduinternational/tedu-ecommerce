using System.Collections.Generic;
using TeduEcommerce.Public.ProductCategories;
using TeduEcommerce.Public.Products;

namespace TeduEcommerce.Public.Web.Models
{
    public class HeaderCacheItem
    {
        public List<ProductCategoryInListDto> Categories { set; get; }
    }
}
