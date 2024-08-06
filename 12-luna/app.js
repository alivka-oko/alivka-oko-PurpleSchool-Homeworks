//Написать функцию для проверки корректности номера карты с использованием алгоритма Луна.

function checkCardNumber(card) {
    const cardNumber = card.replaceAll('-', '').replaceAll(' ', '').split('').map((x) => Number(x));
    if (cardNumber.includes(NaN)) {
        return NaN;
    }

    for (index in cardNumber) {
        if ((Number(index) + 1) % 2 != 0) {
            card[index] *= 2;
            card[index] = card[index] > 9 ? card[index] - 9 : card[index];
        }
    }
    let cardSum = cardNumber.reduce((acc, number) => acc += number, 0)
    return cardSum % 10 === 0;
}

function resultTemplate(card) {
    const startString = `Карта с номером: ${card}`;
    const endString = `получила результат: ${checkCardNumber(card)}`;
    return `${startString}    ${endString}`;
}

const card1 = '2342834503458353';
const card2 = '4561-2612-1234-5464';
const card3 = '4561-2612-1534-5464';

console.log(resultTemplate(card1));
console.log(resultTemplate(card2));
console.log(resultTemplate(card3));