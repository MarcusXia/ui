import { environment as defaultEnvironment } from './environment.defaults';

export const environment = {
  experimental: true,
  production: false,

    ...defaultEnvironment,
};
