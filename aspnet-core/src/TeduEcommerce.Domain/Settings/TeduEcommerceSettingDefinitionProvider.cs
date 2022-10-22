using Volo.Abp.Settings;

namespace TeduEcommerce.Settings;

public class TeduEcommerceSettingDefinitionProvider : SettingDefinitionProvider
{
    public override void Define(ISettingDefinitionContext context)
    {
        //Define your own settings here. Example:
        //context.Add(new SettingDefinition(TeduEcommerceSettings.MySetting1));
    }
}
