export class WorkHistory {
  company: string = '';
  title: string = '';
  start: Date | null = null;
  end: Date | null = null;
  description: string = '';
  constructor(work: Partial<WorkHistory>) {
    Object.assign(this, work);
  }
}

export const defaultWorkHistory = [
  new WorkHistory({
    company: 'Awesome Company',
    title: 'Lead Backend Engineer',
    start: new Date(2024, 3),
    description: 'Worked as Backend Programmer And Made Some Awesome Product.'
  }),
  new WorkHistory({
    company: 'Previous Company',
    title: 'Senior Backend Engineer',
    start: new Date(2011, 1),
    end: new Date(2024, 3),
    description: ''
  })
];
