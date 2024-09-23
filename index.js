function myEach(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        callback(values[i]);
    }
    return collection;
}

function myMap(collection, callback) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        result.push(callback(values[i]));
    }
    return result;
}

function myReduce(collection, callback, acc) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    let start = acc !== undefined ? acc : values[0];
    let i = acc !== undefined ? 0 : 1;

    for (; i < values.length; i++) {
        start = callback(start, values[i], collection);
    }
    return start;
}

function myFind(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            return values[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate) {
    const values = Array.isArray(collection) ? collection : Object.values(collection);
    const result = [];
    for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
            result.push(values[i]);
        }
    }
    return result;
}

function mySize(collection) {
    const values = Array.isArray(collection) ? collection : Object.keys(collection);
    return values.length;
}

function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}


function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

function myKeys(object) {
    return Object.keys(object);
}

function myValues(object) {
    return Object.values(object);
}

function mySortBy(array, callback) {
    const newArr = [...array];
    return newArr.sort((a, b) => {
        const valA = callback(a);
        const valB = callback(b);
        if (valA > valB) return 1;
        if (valA < valB) return -1;
        return 0;
    });
}

function myFlatten(array, shallow = false, result = []) {
    for (let value of array) {
        if (Array.isArray(value)) {
            if (shallow) {
                result.push(...value);
            } else {
                myFlatten(value, false, result);
            }
        } else {
            result.push(value);
        }
    }
    return result;
}
