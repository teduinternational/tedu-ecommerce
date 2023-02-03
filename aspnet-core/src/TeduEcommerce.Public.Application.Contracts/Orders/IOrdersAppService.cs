using System;
using System.Collections.Generic;
using System.Text;
using Volo.Abp.Application.Dtos;
using Volo.Abp.Application.Services;

namespace TeduEcommerce.Public.Orders
{
    public interface IOrdersAppService : ICrudAppService
        <OrderDto,
        Guid,
        PagedResultRequestDto, CreateOrderDto,CreateOrderDto>
    {

    }
}
