// this is how we make a function generic by putting <T> with the name
function getFirstElement<T, U>(array: T[], secondArray: U[]) {
    return [array[0], secondArray[0]];
}

const numbersArray = [1,2,3,4]
const strings = ['a', 'b']
const firstArray = getFirstElement(numbersArray, strings)