import { writable, type Writable } from 'svelte/store';
import { User, defaultUser } from './user';
import { defaultSummary } from './summary';
import { defaultWorkHistory, WorkHistory } from './work-history';
import { Level } from './level';

export * from './user';
export * from './summary';
export * from './work-history';

export const user: Writable<User> = writable(defaultUser);
export const summary = writable(defaultSummary);
export const workHistory: Writable<WorkHistory[]> = writable(defaultWorkHistory);
export const skill: Writable<Level[]> = writable([]);
export const language: Writable<Level[]> = writable([]);
export const education = writable('');
export const certification = writable('');
export const accomplishment = writable('');
