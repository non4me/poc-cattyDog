import { InjectionToken } from '@angular/core';
import { DOCUMENT } from '@angular/common';

export const ROOTSCOPE = new InjectionToken<any>('ROOTSCOPE');

export function createRootScopeService(i) {
  return i;
}

export const rootscopeServiceProvider = {
  provide: ROOTSCOPE,
  useFactory: createRootScopeService,
  deps: ['$rootScope']
};
