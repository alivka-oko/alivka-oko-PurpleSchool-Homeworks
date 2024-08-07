// создать функцию, которая преобразует объект query-параметров в строку для URL.
queryParams = {
    search: 'Вася',
    take: 10
}

function queryURL(query) {
    const result = []
    for (const key in query) {
        result.push(key + '=' + query[key])
    }
    return result.join('&')
}

console.log(queryParams) // search=Вася&take=10
