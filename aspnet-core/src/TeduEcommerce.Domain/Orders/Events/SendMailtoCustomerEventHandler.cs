using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduEcommerce.Emailing;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Emailing;
using Volo.Abp.EventBus;
using Volo.Abp.TextTemplating;

namespace TeduEcommerce.Orders.Events
{
    public class SendMailtoCustomerEventHandler : ILocalEventHandler<NewOrderCreatedEvent>,
          ITransientDependency
    {
        private readonly IEmailSender _emailSender;
        private readonly ITemplateRenderer _templateRenderer;
        public SendMailtoCustomerEventHandler(IEmailSender emailSender,
            ITemplateRenderer templateRenderer)
        {
            _emailSender = emailSender;
            _templateRenderer = templateRenderer;
        }
        public async Task HandleEventAsync(NewOrderCreatedEvent eventData)
        {
            var emailBody = await _templateRenderer.RenderAsync(
                       EmailTemplates.CreateOrderEmail,
                       new
                       {
                           message = eventData.Message
                       });
            await _emailSender.SendAsync(eventData.CustomerEmail, "Tạo đơn hàng thành công", emailBody);
        }
    }
}
