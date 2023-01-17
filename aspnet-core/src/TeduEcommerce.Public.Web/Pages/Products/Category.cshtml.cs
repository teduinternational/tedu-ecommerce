using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Collections.Generic;
using System.Threading.Tasks;
using TeduEcommerce.Public.ProductCategories;
using TeduEcommerce.Public.Products;

namespace TeduEcommerce.Public.Web.Pages.Products
{
    public class CategoryModel : PageModel
    {
        public ProductCategoryDto Category { set; get; }

        public List<ProductCategoryInListDto> Categories { set; get; }
        public PagedResult<ProductInListDto> ProductData { set; get; }

        private readonly IProductCategoriesAppService _productCategoriesAppService;
        private readonly IProductsAppService _productsAppService;

        public CategoryModel(IProductCategoriesAppService productCategoriesAppService,
            IProductsAppService productsAppService)
        {
            _productCategoriesAppService = productCategoriesAppService;
            _productsAppService = productsAppService;   
        }

        public async Task OnGetAsync(string code,int page = 1)
        {
            Category = await _productCategoriesAppService.GetByCodeAsync(code);
            Categories = await _productCategoriesAppService.GetListAllAsync();
            ProductData = await _productsAppService.GetListFilterAsync(new ProductListFilterDto()
            {
                CurrentPage = page
            });
        }
    }
}
