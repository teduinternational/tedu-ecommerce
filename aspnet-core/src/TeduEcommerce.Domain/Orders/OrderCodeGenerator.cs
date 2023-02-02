using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TeduEcommerce.IdentitySettings;
using Volo.Abp.DependencyInjection;
using Volo.Abp.Domain.Repositories;

namespace TeduEcommerce.Orders
{
    public class OrderCodeGenerator : ITransientDependency
    {
        private readonly IRepository<IdentitySetting, string> _identitySettingRepository;

       public OrderCodeGenerator(IRepository<IdentitySetting, string> identitySettingRepository)
        {
            _identitySettingRepository = identitySettingRepository;
        }
        public async Task<string> GenerateAsync()
        {
            string newCode;
            var identitySetting = await _identitySettingRepository.FindAsync(TeduEcommerceConsts.OrderIdentitySettingId);
            if (identitySetting == null)
            {
                identitySetting = await _identitySettingRepository.InsertAsync(new IdentitySetting(TeduEcommerceConsts.OrderIdentitySettingId, "Sản phẩm", TeduEcommerceConsts.ProductIdentitySettingPrefix, 1, 1));
                newCode = identitySetting.Prefix + identitySetting.CurrentNumber;

            }
            else
            {
                identitySetting.CurrentNumber += identitySetting.StepNumber;
                newCode = identitySetting.Prefix + identitySetting.CurrentNumber;

                await _identitySettingRepository.UpdateAsync(identitySetting);
            }
            return newCode;
        }
    }
}
