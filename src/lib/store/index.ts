import { writable, type Writable } from 'svelte/store';

export class User {
  name: string = '';
  headComment: string = '';
  city: string = '';
  email: string = '';

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}

export const user: Writable<User> = writable();

export const intro = writable('');
export const summary = writable('');
// export const workHistory = writable('');
export const education = writable('');
export const certification = writable('');
export const accomplishment = writable('');
