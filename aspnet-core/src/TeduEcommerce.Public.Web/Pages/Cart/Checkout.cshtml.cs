using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.Json;
using System.Threading.Tasks;
using TeduEcommerce.Public.Orders;
using TeduEcommerce.Public.Web.Extensions;
using TeduEcommerce.Public.Web.Models;

namespace TeduEcommerce.Public.Web.Pages.Cart
{
    public class CheckoutModel : PageModel
    {
        private readonly IOrdersAppService _ordersAppService;
        public CheckoutModel(IOrdersAppService ordersAppService)
        {
            _ordersAppService = ordersAppService;
        }
        public List<CartItem> CartItems { get; set; }

        public bool? CreateStatus { set; get; }

        [BindProperty]
        public OrderDto Order { set; get; }

        public void OnGet()
        {
            CartItems = GetCartItems();

        }

        public async Task OnPostAsync()
        {
            if (ModelState.IsValid == false)
            {

            }
            var cartItems = new List<OrderItemDto>();
            foreach (var item in GetCartItems())
            {
                cartItems.Add(new OrderItemDto()
                {
                    Price = item.Product.SellPrice,
                    ProductId = item.Product.Id,
                    Quantity = item.Quantity
                });
            }
            Guid? currentUserId = User.Identity.IsAuthenticated ? User.GetUserId() : null;
            var order = await _ordersAppService.CreateAsync(new CreateOrderDto()
            {
                CustomerName = Order.CustomerName,
                CustomerAddress = Order.CustomerAddress,
                CustomerPhoneNumber = Order.CustomerPhoneNumber,
                Items = cartItems,
                CustomerUserId = currentUserId
            });
            CartItems = GetCartItems();

            if (order != null)
                CreateStatus = true;
            else
                CreateStatus = false;
        }

        private List<CartItem> GetCartItems()
        {
            var cart = HttpContext.Session.GetString(TeduEcommerceConsts.Cart);
            var productCarts = new Dictionary<string, CartItem>();
            if (cart != null)
            {
                productCarts = JsonSerializer.Deserialize<Dictionary<string, CartItem>>(cart);
            }
            return productCarts.Values.ToList();
        }

    }
}
