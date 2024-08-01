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
    for (let i = 0; i < array.length; i++) {
        if (fn(array[i])) {
            array.splice(i, 1);
            i--
        }
    }

    return array;
}


function deleteElement(element) {
    if (element > 5) {
        return true
    }
    return false
}

console.log(filterArray(arr, deleteElement))