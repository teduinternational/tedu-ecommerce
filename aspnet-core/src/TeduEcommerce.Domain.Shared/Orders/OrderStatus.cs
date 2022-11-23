using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Orders
{
    public enum OrderStatus
    {
        New =1,
        Confirmed = 2,
        Processing = 3,
        Shipping = 4,
        Finished  = 5,
        Canceled = 6
    }
}
