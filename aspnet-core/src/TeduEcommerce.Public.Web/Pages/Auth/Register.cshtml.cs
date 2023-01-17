using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.Extensions.Configuration;

namespace TeduEcommerce.Public.Web.Pages.Auth
{
    public class RegisterModel : PageModel
    {
        private readonly IConfiguration _configuration;
        public RegisterModel(IConfiguration configuraiton)
        {
            _configuration = configuraiton;
        }
        public IActionResult OnGet()
        {
            return Redirect(_configuration["AuthServer:Authority"] + "/" + "Account/Register");
        }
    }
}
