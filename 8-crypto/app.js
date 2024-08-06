//Создать простую функцию шифрования пароля.

function cryptoPassword(password) {
    if (!password || !password.length) { return NaN; }
    //password
    let splitedArray = password.split('');
    if (splitedArray.length <= 8) { // длина пароля не менее 8 символов
        return false;
    }
    // последний элемент в начало dpasswor
    let lastItem = splitedArray.pop();
    splitedArray.unshift(lastItem);

    // третий элемент в конце dpsswora
    let thirdItem = splitedArray.splice(2, 1)[0];
    splitedArray.push(thirdItem);

    // третий элемент в начало sdpswora
    let thirdItemRepeat = splitedArray.splice(2, 1)[0];
    splitedArray.unshift(thirdItemRepeat);

    // предпоследний в конец sdpswoar
    let penultimate = splitedArray.splice(-2, 1)[0];
    splitedArray.push(penultimate);

    const result = splitedArray.join('')
    return result;
}

function checkPassword(crypto, password) {
    if (!crypto || !password) {
        return false
    }
    return cryptoPassword(password) === crypto
}


password1 = 'alivka123'
encrypted1 = cryptoPassword(password1);

console.log('Пароль:', password1);
console.log('Зашифрованный пароль:', encrypted1);
console.log('Проверка пароля:', checkPassword(encrypted1, password1));

password2 = 'alivka123'
encrypted2 = cryptoPassword(password2).substring(1);
console.log('Пароль:', password2);
console.log('Зашифрованный пароль:', encrypted2);
console.log('Проверка пароля:', checkPassword(encrypted2, password2));