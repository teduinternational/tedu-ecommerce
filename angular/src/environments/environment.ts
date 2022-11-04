import { Environment } from '@abp/ng.core';

const baseUrl = 'http://localhost:4200';

export const environment = {
  production: false,
  application: {
    baseUrl,
    name: 'TeduEcommerce',
    logoUrl: '',
  },
  oAuthConfig: {
    issuer: 'https://localhost:5000/',
    redirectUri: baseUrl,
    clientId: 'TeduEcommerce_Admin',
    client_secret:'1q2w3e*',
    responseType: 'code',
    scope: 'offline_access TeduEcommerce.Admin',
    requireHttps: true,
  },
  apis: {
    default: {
      url: 'https://localhost:5001',
      rootNamespace: 'TeduEcommerce',
    },
  },
} as Environment;
