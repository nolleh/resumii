export class User {
  name: string = '';
  professionalTitle: string = '';
  email: string = '';
  city: string = '';

  constructor(user: Partial<User>) {
    Object.assign(this, user);
  }
}

export const defaultUser: User = new User({
  name: '<b> Kyeong-mi Kim </b>',
  professionalTitle: 'GameServer / Backend Programmer',
  city: 'Seongnam-si',
  email: 'nolleh7707@gmail.com'
});

