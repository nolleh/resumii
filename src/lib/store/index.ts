import { writable, type Writable } from 'svelte/store';
import { User, defaultUser } from './user';
import { defaultSummary } from './summary';
import { Level } from './level';
import { defaultSkills } from './skill';
import { defaultWorkHistory, WorkHistory } from './work-history';
import { defaultLangs } from './language';

export * from './user';
export * from './summary';
export * from './level';
export * from './skill';
export * from './work-history';
export * from './language';

export const user: Writable<User> = writable(defaultUser);
export const summary = writable(defaultSummary);
export const skill: Writable<Level[]> = writable(defaultSkills);
export const workHistory: Writable<WorkHistory[]> = writable(defaultWorkHistory);
export const language: Writable<Level[]> = writable(defaultLangs);
export const education = writable('');
export const certification = writable('');
export const accomplishment = writable('');
