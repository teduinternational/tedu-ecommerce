using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Volo.Abp.Settings;

namespace TeduEcommerce.Emailing
{
    public class EmailSettingProvider : SettingDefinitionProvider
    {
        private readonly ISettingEncryptionService encryptionService;

        public EmailSettingProvider(ISettingEncryptionService encryptionService)
        {
            this.encryptionService = encryptionService;
        }

        public override void Define(ISettingDefinitionContext context)
        {
            
        }
    }
}
