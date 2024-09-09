let arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '32-02-2022', '29-03-2023', '29-02-2023', '31-04-2018']

function correctDateArray(arr) {
    let standardizedDates = []; // массив корректных дат
    let correctDate; // пееременная для преобразования
    arr = arr.map(date => {
        if (date.split('-').length > 2) {
            return date.split('-') // преобразовываем даты по европ. стандарту
        }
        else if (date.split('/').length > 2) {
            date = date.split('/') 
            let month = date[0];
            let day = date[1]
            date[0] = day;
            date[1] = month;
            return date // преобразовываем американские даты по европ. стандарту, меняя месяц и день местами
        }
    }).filter(date => date != undefined)

    arr.forEach((date) => {
        if (dateIsReal(date[0], date[1], date[2])) {
            correctDate = date.join('-');
            standardizedDates.push(correctDate);
        }
    })

    return standardizedDates;
}

// захотелось проверить кроме високосного года - количество дней в месяце :)
function dateIsReal(day, month, year) {

    let daysInFebruary;
    if ((year % 4 == 0) || (year % 100 == 0 && year % 400 == 100)) {
        daysInFebruary = 29
    } else {
        daysInFebruary = 28
    }

    const monthNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const daysPerMonths = [31, daysInFebruary, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    const indexMonth = monthNumbers.indexOf(Number(month)) // индекс в номере месяца

    const daysOnThisMonth = daysPerMonths[indexMonth];  // сопоставление с количеством дней в месяце
    if (daysOnThisMonth >= day && day >= 1) {
        return true
    }

    return false
}
