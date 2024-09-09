//Реализовать сортировку массива чисел с помощью циклов.
let arr = [1, 40, -5, 10, 0];

//  Сортировка по убыванию
function SortDesc(arr) {
    for (let currentIndex in arr) {
        for (let neighborIndex in arr) {
            let neighbor = arr[neighborIndex];
            let current = arr[currentIndex];
            if (current > neighbor) {
                arr[neighborIndex] = current;
                arr[currentIndex] = neighbor;
            }
        }
    }
    return arr
}
//  Сортировка по возрастанию
function SortAsc(arr) {
    for (let currentIndex in arr) {
        for (let neighborIndex in arr) {
            let neighbor = arr[neighborIndex];
            let current = arr[currentIndex];
            if (current < neighbor) {
                arr[neighborIndex] = current;
                arr[currentIndex] = neighbor;
            }
        }
    }
    return arr
}

console.log('Отсортированный массив:')
console.log(SortAsc(arr)) // [-5, 0, 1, 10, 40]
console.log(SortDesc(arr)) // [40, 10, 1, 0, -5]