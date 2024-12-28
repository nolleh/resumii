export class Summary {
  title: string = '';
  content: string = '';

  constructor(summary: Partial<Summary>) {
    Object.assign(this, summary);
  }
}

export const defaultSummary = new Summary({
  title: 'Software Developer',
  content:
    'Passionate Software Engineer with 10+ years of experience in developing web applications and backend systems. <br/> Skilled at writing clear, concise code that is easy to maintain and troubleshoot. <br/>Experienced in working with both small and large teams across multiple projects and companies. <br/>Able to work independently of remote locations or in office environments as needed by the company.'
});
