using System;
using System.Collections.Generic;
using System.Text;

namespace TeduEcommerce.Orders
{
    public enum TransactionType
    {
        ConfirmOrder,
        StartProcessing,
        FinishOrder,
        CancelOrder
    }
}
