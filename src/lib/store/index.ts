import { writable, type Writable } from 'svelte/store';
import { User, defaultUser } from './user';
import { Summary, defaultSummary } from './summary';
import { Level } from './level';
import { defaultSkills } from './skill';
import { defaultWorkHistory, WorkHistory } from './work-history';
import { defaultLangs } from './language';
import { defaultEdus } from './education';
import { defaultCerts } from './certification';
import { defaultAccoms } from './accomplishment';

export * from './user';
export * from './summary';
export * from './level';
export * from './skill';
export * from './work-history';
export * from './language';
export * from './education';
export * from './certification';
export * from './accomplishment';

export const user: Writable<User> = writable(defaultUser);
export const summary = writable(defaultSummary);
export const skill: Writable<Level[]> = writable(defaultSkills);
export const workHistory: Writable<WorkHistory[]> = writable(defaultWorkHistory);
export const language: Writable<Level[]> = writable(defaultLangs);
export const education: Writable<Summary[]> = writable(defaultEdus);
export const certification: Writable<Summary[]> = writable(defaultCerts);
export const accomplishment: Writable<Summary[]> = writable(defaultAccoms);
