using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Public
{
    public class BaseListFilterDto : PagedResultRequestBase
    {
        public string Keyword { get; set; }
    }
}
