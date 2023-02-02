using System;
using System.Linq;
using System.Security.Claims;

namespace TeduEcommerce.Public.Web.Extensions
{
    public static class IdentityExtension
    {
        public static string GetSpecificClaim(this ClaimsPrincipal claimsPrincipal, string claimType)
        {
            var claim = ((ClaimsIdentity)claimsPrincipal.Identity)?.Claims.FirstOrDefault(x => x.Type == claimType);

            return (claim != null) ? claim.Value : string.Empty;
        }
        public static Guid GetUserId(this ClaimsPrincipal claimsPrincipal)
        {
            var subjectId = claimsPrincipal.GetSpecificClaim(ClaimTypes.NameIdentifier);
            return Guid.Parse(subjectId);
        }
    }
}
