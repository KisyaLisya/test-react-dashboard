
export const isDef = (el) => el !== null && el !== undefined;

export const getFolderName = (url) => {
	const match = url.match(/^\/(\w+)\/*.*/);
	return Array.isArray(match) && match.length > 1 ? match[1] : ''
}

export const getMinutesDelay = (mins) => {
	return 1000 * 60 * mins;
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

export const getUnicListItems = (list, propsName) => {
	return list.reduce((acc, el) => {
		const element = isDef(propsName) ? el[propsName] : el;
		const match = acc.find((accEl) => {
			const accElement = isDef(propsName) ? accEl[propsName] : accEl;
			return element === accElement;
		});

		return isDef(match) ? acc : [...acc, el];
	}, [])
}

export const getSameItems = (listA, listB, propsName) => {
	const big = listA.length >= listB.length ? listA : listB;
	const small = listA.length >= listB.length ? listB : listA;

	return small.filter((smEl) => {
		const match = big.find((bgEl) => {
			const smallListEl = isDef(propsName) ? smEl[propsName] : smEl;
			const bigListEl = isDef(propsName) ? bgEl[propsName] : bgEl;

			return smallListEl === bigListEl;
		});

		return isDef(match);
	})
}
