/*глобальные переменне для конвертации  
 (переменные названы по следующей логике: 
1 доллар _ к евро (USD_EUR)| 1 евро _ к рублю (EUR_RUB))
*/

const USD_RUB = 88;
const USD_EUR = 0.92;
const USD_CNY = 7.3;
const EUR_RUB = 95;
const EUR_CNY = 7.9;
const CNY_RUB = 12;

function currencyСonversion(money, originalCurrency = 'RUB', targetCurrency = 'USD') {
    switch (targetCurrency.toUpperCase()) {
        case 'USD':
            return `${money} ${originalCurrency} ≈ ${USDConvert(money, originalCurrency)}`
        case 'EUR':
            return `${money} ${originalCurrency} ≈ ${EURConvert(money, originalCurrency)}`
        case 'RUB':
            return `${money} ${originalCurrency} ≈ ${RUBConvert(money, originalCurrency)}`
        case 'CNY':
            return `${money} ${originalCurrency} ≈ ${CNYConvert(money, originalCurrency)}`
        default:
            return null
    }
}

//Перевод доллара
function USDConvert(money, currency) {
    switch (currency) {
        case 'USD':
            return money + ' $';
        case 'EUR':
            return money / USD_EUR + ' USD';
        case 'RUB':
            return money / USD_RUB + ' USD';
        case 'CNY':
            return money / USD_CNY + ' USD';
        default:
            return null
    }
}
//Перевод евро
function EURConvert(money, currency) {
    switch (currency) {
        case 'USD':
            return money * 1 / USD_EUR + ' EUR';
        case 'EUR':
            return money + ' €';
        case 'RUB':
            return money / EUR_RUB + ' EUR';
        case 'CNY':
            return money / EUR_RUB + ' EUR';
    }
}
//Перевод рубля
function RUBConvert(money, currency) {
    switch (currency) {
        case 'USD':
            return money * USD_RUB + ' RUB';
        case 'EUR':
            return money * EUR_RUB + ' RUB';
        case 'RUB':
            return money + ' RUB';
        case 'CNY':
            return money / (1 / CNY_RUB) + ' RUB';
        default:
            return null
    }
}
//Перевод рубля
function CNYConvert(money, currency) {
    switch (currency) {
        case 'USD':
            return money / (1 / USD_CNY) + ' CNY';
        case 'EUR':
            return money / (1 / EUR_CNY) + ' CNY';
        case 'RUB':
            return money / CNY_RUB + ' CNY';
        case 'CNY':
            return money;
        default:
            return null
    }
}

// Вывод и проверка
console.log(currencyСonversion(100, 'RUB', 'USD')); // 100 RUB ≈ 1.1363636363636365 USD
console.log(currencyСonversion(4, 'USD', 'RUB')); // 4 USD ≈ 352 RUB
console.log(currencyСonversion(120, 'USD', 'EUR')); // 120 USD ≈ 130.43478260869566 EUR
console.log(currencyСonversion(144, 'EUR', 'CNY')); // 144 EUR ≈ 1137.6000000000001 CNY