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
	name: '<b> John Doe </b>',
	professionalTitle: 'GameServer / Backend Programmer',
	city: 'Seongnam-si',
	email: 'johndoe@no.mail'
});
