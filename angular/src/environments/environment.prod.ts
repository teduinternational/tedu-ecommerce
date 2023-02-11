import { Environment } from '@abp/ng.core';

const baseUrl = 'http://103.139.102.129:24200';

export const environment = {
  production: true,
  application: {
    baseUrl,
    name: 'TeduEcommerce',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'http://103.139.102.129:25000/',
    redirectUri: baseUrl,
    clientId: 'TeduEcommerce_App',
    dummyClientSecret:'1q2w3e*',
    responseType: 'code',
    scope: 'offline_access TeduEcommerce',
    requireHttps: false
  },
  apis: {
    default: {
      url: 'http://103.139.102.129:25100',
      rootNamespace: 'TeduEcommerce',
    },
  },
} as Environment;
