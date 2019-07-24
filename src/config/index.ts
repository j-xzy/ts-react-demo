/**
 * 全局配置项
 */

import { devConfig } from './dev';
import { prodConfig } from './prod';

export const config = {
  ...process.env.NODE_ENV === 'production' ? prodConfig : devConfig,
  host: 'https://api.github.com',
  mock: true
};

window.config = config;
