using System;
using Microsoft.Extensions.DependencyInjection;
using Polly;
using TeduEcommerce.Admin;
using Volo.Abp.Autofac;
using Volo.Abp.Http.Client;
using Volo.Abp.Http.Client.IdentityModel;
using Volo.Abp.Modularity;

namespace TeduEcommerce.Admin.HttpApi.Client.ConsoleTestApp;

[DependsOn(
    typeof(AbpAutofacModule),
    typeof(TeduEcommerceAdminHttpApiClientModule),
    typeof(AbpHttpClientIdentityModelModule)
    )]
public class TeduEcommerceConsoleApiClientModule : AbpModule
{
    public override void PreConfigureServices(ServiceConfigurationContext context)
    {
        PreConfigure<AbpHttpClientBuilderOptions>(options =>
        {
            options.ProxyClientBuildActions.Add((remoteServiceName, clientBuilder) =>
            {
                clientBuilder.AddTransientHttpErrorPolicy(
                    policyBuilder => policyBuilder.WaitAndRetryAsync(3, i => TimeSpan.FromSeconds(Math.Pow(2, i)))
                );
            });
        });
    }
}
