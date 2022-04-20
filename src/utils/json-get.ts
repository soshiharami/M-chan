export function getByKeys(obj: any, val: string): string[] {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		if (typeof obj[i] == 'object') {
			objects = objects.concat(getByKeys(obj[i], val));
		} else if (obj[i] == val) {
			objects.push(i);
		}
	}
	return objects;
}

export function getKeys(obj: any): string[] {
	var objects = [];
	for (var i in obj) {
		if (!obj.hasOwnProperty(i)) continue;
		objects.push(obj[i]);
	}
	return objects;
}
