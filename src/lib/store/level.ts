export class Level {
  title: string = '';
  level: number = 0;

  constructor(level: Partial<Level>) {
    Object.assign(this, level);
  }
}
