
export const makeClass = (className) => {
	return className ? className : ''
}

export const makePlaceholder = (value, defaultValue = 'Type some text ...') => {
	return value ? value : defaultValue;
}

export const makeActionToId = (id, actionFunc) => {
	return () => actionFunc(id);
}
