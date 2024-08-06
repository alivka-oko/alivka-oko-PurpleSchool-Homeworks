/*
Напишите функцию, которая принимает:

-Массив чисел
-Функцию удаления элементов

И возвращает отфильтрованный массив. При этом функция удаления элементов принимает число и возвращает 
true, если его надо удалить и 
false, если надо оставить
*/

const arr = [3, 6, 9, 2];

function filterArray(array, fn) {
    const resultArray = [];
    for (const el of array) {
        if (!fn(el)) {
            resultArray.push(el)
        }
    }
    return resultArray;
}


function deleteElement(element) {
    return element > 5;
}

console.log(filterArray(arr, deleteElement))