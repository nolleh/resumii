import {
	User,
	user,
	Summary,
	summary,
	Level,
	skill,
	WorkHistory,
	workHistory,
	language,
	education,
	certification,
	accomplishment,
	restored
} from '$lib/store';
import { get } from 'svelte/store';

export class SaveBody {
	user: User | null = null;
	summary: Summary | null = null;
	skill: Level[] = [];
	workHistory: WorkHistory[] = [];
	language: Level[] = [];
	education: Summary[] = [];
	certification: Summary[] = [];
	accomplishment: Summary[] = [];

	constructor(payload: Partial<SaveBody>) {
		Object.assign(this, payload);
	}

	static restoreFromSavedTxt(text: string) {
		const body: SaveBody = Object.assign(new SaveBody({}), JSON.parse(text));

		// Helper function to convert date strings to Date objects
		const convertDates: any = (data: any) => {
			if (Array.isArray(data)) {
				return data.map((item) => convertDates(item));
			} else if (data && typeof data === 'object') {
				for (const key in data) {
					if (typeof data[key] === 'string' && !isNaN(Date.parse(data[key]))) {
						data[key] = new Date(data[key]);
					} else {
						data[key] = convertDates(data[key]);
					}
				}
			}
			return data;
		};

		// Convert dates in the relevant properties
		body.workHistory = convertDates(body.workHistory);
		body.language = convertDates(body.language);
		body.education = convertDates(body.education);
		body.certification = convertDates(body.certification);
		body.accomplishment = convertDates(body.accomplishment);

		user.set(body.user!!);
		summary.set(body.summary!!);
		skill.set(body.skill);
		workHistory.set(body.workHistory);
		language.set(body.language);
		education.set(body.education);
		certification.set(body.certification);
		accomplishment.set(body.accomplishment);
		restored.set(true);
	}

	static createFromStore(): SaveBody {
		const body = new SaveBody({
			user: get<User>(user),
			summary: get<Summary>(summary),
			skill: get<Level[]>(skill),
			workHistory: get<WorkHistory[]>(workHistory),
			language: get<Level[]>(language),
			education: get<Summary[]>(education),
			certification: get<Summary[]>(certification),
			accomplishment: get<Summary[]>(accomplishment)
		});

		return body;
	}
}
