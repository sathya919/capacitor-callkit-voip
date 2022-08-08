import { registerPlugin } from '@capacitor/core';

import type { CallkitPlugin } from './definitions';

const Callkit = registerPlugin<CallkitPlugin>('Callkit', {
  web: () => import('./web').then(m => new m.CallkitWeb()),
});

export * from './definitions';
export { Callkit };
