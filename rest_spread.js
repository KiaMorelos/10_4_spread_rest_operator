const filterOutOdds = (...num) => num.filter(num => num % 2 === 0)

const findMin = (...num) => Math.min(...num)

const mergeObjects = (objOne, objTwo) => {
    return {...objOne, ...objTwo}
}

const doubleAndReturnArgs = (arr, ...rest) => [...arr, ...rest.map(num => num * 2)]

const removeRandom = items => {
    let itemIndex = Math.floor(Math.random() * items.length);
    let randomRemoved = [...items.slice(0, itemIndex), ...items.slice(itemIndex + 1)];
    return randomRemoved;
} //Notes about this function for myself:
//Thee spread operator is copying the original array into a new array. By calling slice we're copying from zero up to but not including random index. then we call  slice on the same array we're copying again and add 1 to it, so that the random index DOES NOT get copied into the new array.  

const extend = (arrOne, arrTwo) => [...arrOne, ...arrTwo]

const addKey = (obj, key, value) => {
    newObject = {...obj}
    newObject[key] = value
    return newObject
}

const removeKey = (obj, key) => {
    let newObject = {...obj}
    delete newObject[key]
    return newObject
}

const combine = (objOne, objTwo) => ({...objOne, ...objTwo})

const update = (obj, key, val) => {
    let newObject = {...obj}
    newObj[key] = val
    return newObject
}