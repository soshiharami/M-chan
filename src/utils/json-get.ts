export function getKeys(obj: any, val: string): string {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getKeys(obj[i], val));
		} else if (obj[i] == val) {
			objects.push(i);
		}
	}
	return objects.pop();
}
