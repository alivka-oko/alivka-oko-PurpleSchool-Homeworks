//Реализовать сортировку массива чисел с помощью циклов.
let arr = [1, 40, -5, 10, 0];

function orderTemplate(firstNumber, secondNumber, desc) {
    if (!desc) {
        return firstNumber > secondNumber;
    }
    return firstNumber < secondNumber;
}

function SortArray(incomingArray, desc = false) {
    const array = [...incomingArray];
    for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
        for (let neighborIndex = currentIndex; neighborIndex < array.length; neighborIndex++) {
            const sortingConditions = orderTemplate(array[neighborIndex], array[currentIndex], desc)
            if (sortingConditions) {
                [array[neighborIndex], array[currentIndex]] = [array[currentIndex], array[neighborIndex]]
            }
        }
    }
    return array
}

console.log('Отсортированный массив:')
console.log(SortArray(arr)) // [-5, 0, 1, 10, 40]
console.log(SortArray(arr, true)) // [40, 10, 1, 0, -5]