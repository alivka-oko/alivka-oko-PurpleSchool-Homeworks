//Написать функцию для проверки корректности номера карты с использованием алгоритма Луна.
let card = '4  5  6  1     2  6  1  2     1  2  3  4     5  4  6  7';


function checkCardNumber(card) {
    card = card.replaceAll('-', '').replaceAll(' ', '').split('');
    for (index in card) {
        if (isNaN(Number(card[index]))) { // проверка является ли элемент числом 
            return false;
        }
        card[index] = Number(card[index]);

        if ((Number(index) + 1) % 2 != 0) {
            card[index] *= 2;
            card[index] = card[index] > 9 ? card[index] - 9 : card[index];
        }
    }

    let cardSum = card.reduce((acc, number) => {
        return acc += number;
    }, 0)

    return cardSum % 10 == 0;
}

console.log(checkCardNumber(card) ? 'Удачно' : 'Неудачно');