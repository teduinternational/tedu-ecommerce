using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TeduEcommerce.Public.ProductCategories;

namespace TeduEcommerce.Public.Web.ViewComponents
{
    public class HeaderViewComponent : ViewComponent
    {
        private readonly IProductCategoriesAppService _productCategoriesAppService;
        public HeaderViewComponent(IProductCategoriesAppService productCategoriesAppService)
        {
            _productCategoriesAppService = productCategoriesAppService;
        }
        public async Task<IViewComponentResult> InvokeAsync()
        {
            var model = await _productCategoriesAppService.GetListAllAsync();
            return View(model);
        }
    }
}
