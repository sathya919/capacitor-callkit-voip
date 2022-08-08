import { WebPlugin } from '@capacitor/core';

import type { CallkitPlugin } from './definitions';

export class CallkitWeb extends WebPlugin implements CallkitPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
