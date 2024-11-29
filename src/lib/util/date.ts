export function getYm(date: Date | null): string {
	if (!date) {
		return '';
	}
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	return year + '.' + month;
}
