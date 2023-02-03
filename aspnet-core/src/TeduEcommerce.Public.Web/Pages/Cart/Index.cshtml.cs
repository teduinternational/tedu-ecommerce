using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using TeduEcommerce.Public.Products;
using TeduEcommerce.Public.Web.Models;

namespace TeduEcommerce.Public.Web.Pages.Cart
{
    public class IndexModel : PageModel
    {
        private readonly IProductsAppService _productsAppService;
        public IndexModel(IProductsAppService productsAppService)
        {
            _productsAppService = productsAppService;
        }

        [BindProperty]
        public List<CartItem> CartItems { get; set; }
        public async Task OnGetAsync(string action, string id)
        {
            var cart = HttpContext.Session.GetString(TeduEcommerceConsts.Cart);
            var productCarts = new Dictionary<string, CartItem>();
            if(cart != null)
            {
                productCarts = JsonSerializer.Deserialize<Dictionary<string, CartItem>>(cart);
            }
            if (!string.IsNullOrEmpty(action))
            {
                if (action == "add")
                {
                    var product = await _productsAppService.GetAsync(Guid.Parse(id));
                    if (cart == null)
                    {
                        productCarts.Add(id, new CartItem()
                        {
                            Product = product,
                            Quantity = 1
                        });
                        HttpContext.Session.SetString(TeduEcommerceConsts.Cart, JsonSerializer.Serialize(productCarts));
                    }
                    else
                    {
                        productCarts = JsonSerializer.Deserialize<Dictionary<string, CartItem>>(cart);
                        if (productCarts.ContainsKey(id)){
                            productCarts[id].Quantity += 1;
                        }
                        else
                        {
                            productCarts.Add(id, new CartItem()
                            {
                                Product = product,
                                Quantity = 1
                            });
                        }
                        HttpContext.Session.SetString(TeduEcommerceConsts.Cart, JsonSerializer.Serialize(productCarts));
                    }
                }
                else if(action == "remove")
                {
                    productCarts = JsonSerializer.Deserialize<Dictionary<string, CartItem>>(cart);
                    if (productCarts.ContainsKey(id))
                    {
                        productCarts.Remove(id);
                    }
  
                    HttpContext.Session.SetString(TeduEcommerceConsts.Cart, JsonSerializer.Serialize(productCarts));
                }
            }
            CartItems = productCarts.Values.ToList();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            var cart = HttpContext.Session.GetString(TeduEcommerceConsts.Cart);
            var productCarts = JsonSerializer.Deserialize<Dictionary<string, CartItem>>(cart);
            foreach(var item in productCarts)
            {
                var cartItem = CartItems.FirstOrDefault(x => x.Product.Id == item.Value.Product.Id);
                cartItem.Product = await _productsAppService.GetAsync(cartItem.Product.Id);
                item.Value.Quantity = cartItem !=null ? cartItem.Quantity : 0;
            }

            HttpContext.Session.SetString(TeduEcommerceConsts.Cart, JsonSerializer.Serialize(productCarts));
            return Redirect("/shop-cart.html");
        }
    }
}
