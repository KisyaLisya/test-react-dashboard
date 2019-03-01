
export const makeClass = (className) => {
	return className ? className : ''
}

export const makePlaceholder = (value, defaultValue = 'Type some text ...') => {
	return value ? value : defaultValue;
}

export const makeActionToId = (id, actionFunc) => {
	return () => actionFunc(id);
}

export const sortUp = ({aVal, bVal, aId, bId, local = false}) => {
	if (aVal === bVal) {
		return aId > bId ? 1 : -1;
	}

	if (local) {
		return aVal.localeCompare(bVal);
	} else {
		return aVal < bVal ? 1 : -1;
	}
}

export const sortDown = ({aVal, bVal, aId, bId, local = false}) => {
	if (aVal === bVal) {
		return aId > bId ? 1 : -1;
	}

	if (local) {
		return bVal.localeCompare(aVal);
	} else {
		return aVal > bVal ? 1 : -1;
	}
}

export const makeWordFromId = (word) => `${word[0].toUpperCase()}${word.slice(1)}`;
