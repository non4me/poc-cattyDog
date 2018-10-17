import { InjectionToken } from '@angular/core';

export const NOTES_API_SERVICE = new InjectionToken<any>('NOTES_API');

export function createNoteApiService(i) {
  return i.get('notesAPI');
}

export const phoneServiceProvider = {
  provide: NOTES_API_SERVICE,
  useFactory: createNoteApiService,
  deps: ['$injector']
};
