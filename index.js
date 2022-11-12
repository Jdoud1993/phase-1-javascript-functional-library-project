function isArray(collection) {
    let newArr;
    if (Array.isArray(collection)) {
        newArr = collection;
    } else {
        newArr = Object.values(collection)
    }
    return newArr
}

function myEach(collection, callback) {
    let arrOfCollection = isArray(collection)

    arrOfCollection.forEach(callback);
    return collection
}

function myMap(collection, callback) {
    let arrOfCollection = isArray(collection)
    let modArray = arrOfCollection.map(callback)
    return modArray

}

function myReduce(collection, callback, acc) {
    let arrOfCollection = isArray(collection)
    if (acc === undefined) {
        acc = arrOfCollection[0];
        acc = arrOfCollection.reduce(callback)
    } else {
        acc = arrOfCollection.reduce(callback, acc)
    }
    return acc
}

function myFind(collection, predicate) {
    let arrOfCollection = isArray(collection)
    let value = arrOfCollection.find(predicate)
    return value
}

function myFilter (collection, predicate) {
    let arrOfCollection = isArray(collection)
    let arrOfValues = arrOfCollection.filter(predicate)
    return arrOfValues
}

function mySize(collection) {
    let arrOfCollection = isArray(collection)
    return arrOfCollection.length
}

function myFirst(array, n = false) {
    if (n) {
        return array.splice(0, n)
    } else return array[0]
}

function myLast(array, n = false) {
    if (n) {
        return array.slice(array.length - n, array.length)
    } else {
        return array[array.length - 1]
    }
}

function myKeys (collection) {
    let arrOfKeys = Object.keys(collection)
    return arrOfKeys
}

function myValues(collection) {
    let arrOfValues = Object.values(collection)
    return arrOfValues
}
