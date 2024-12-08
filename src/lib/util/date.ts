export function getYm(date: Date | null): string {
	if (!date) {
		return '';
	}
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	return year + '.' + month;
}

export function getYmdt(date: Date | null): string {
	const day = date?.getDay().toString().padStart(2, '0');
	const hour = date?.getHours().toString().padStart(2, '0');
	const min = date?.getMinutes().toString().padStart(2, '0');
	const sec = date?.getSeconds().toString().padStart(2, '0');
	return getYm(date) + day + hour + min + sec;
}
