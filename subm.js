//Refractoring the function given

const filterOutOffs = (...args) => args.filter(v => v % 2 === 0);

//findMin function

const findMin = (...args) => Math.min(...args);

//mergeObjects function

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

//doubleAndReturnArgs function

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]

//Slice and dice section

const removeRandom = items => {
	let ind = Math.floor(Math.random() * items.length);
	return [...items.slice(0, idx), ...items.slice(idx + 1)];
}

const extend = (arr1, arr2) => {
	return [...arr1, ...arr2];
}

const addKeyVal = (obj, key, valu) = {
	let newOb = {...obj};
	newOb[key] = valu;
	return newOb;
}

const removeKey = (ob, ky) => {
	let newObj = {...ob};
	delete newObj[key];
	return newObj;
}

const combine = (obj1, obj2) => {
	return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
	lew nwOb = {...obj}:
	nwOb[key] = val;
	return nwOb;
}