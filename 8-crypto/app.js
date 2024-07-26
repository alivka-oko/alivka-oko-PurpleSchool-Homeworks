console.log(`    Пароль: password
    Шифрование: ${cryptoPassword('password')}
    Проверка пароля:  ${check('sdpswoar', 'password') ? 'Успешно' : 'Неудачно :('}
`) // Успешно 


console.log(`    Пароль: крошкакартошка
    Шифрование: ${cryptoPassword('крошкакартошка')}
    Проверка пароля:  ${check('оакшкакшртошкк', 'крошкакартошка') ? 'Успешно' : 'Неудачно :('}
`) // Неудачно :( (правильный вариант: оакшкакартошрк) 

console.log(`    Пароль: люблюкотиков
    Шифрование: ${cryptoPassword('люблюкотиков')}
    Проверка пароля:  ${check('бвллюкотикюо', 'люблюкотиков') ? 'Успешно' : 'Неудачно :('}
`)// Успешно 

function cryptoPassword(password) {
    //password
    let passArray = password.split('');

    // последний элемент в начало dpasswor
    let lastItem = passArray.pop();
    passArray.unshift(lastItem);

    // третий элемент в конце dpsswora
    let thirdItem = passArray.splice(2, 1)[0];
    passArray.push(thirdItem);

    // третий элемент в начало sdpswora
    let thirdItemRepeat = passArray.splice(2, 1)[0];
    passArray.unshift(thirdItemRepeat);

    // предпоследний в конец sdpswoar
    let penultimate = passArray.splice(-2, 1)[0];
    passArray.push(penultimate);

    const result = passArray.join('')
    return result;
}

function check(crypto, password) {
    //sdpswoar
    let cryptoArray = crypto.split('');
    
    //предпоследний в конец: sdpswora
    let penultimate = cryptoArray.splice(-2, 1)[0];
    cryptoArray.push(penultimate);

    //первый элемент на 3 элемент :dpsswora
    let leftSide = cryptoArray.splice(0, 3);
    leftSide.push(leftSide[0]);
    leftSide.shift();
    cryptoArray = leftSide.concat(cryptoArray);

    //последний элемент на 3 элемент :dpasswor
    let rightSide = cryptoArray.splice(2);
    rightSide.unshift(rightSide[rightSide.length - 1]);
    rightSide.pop();
    cryptoArray = cryptoArray.concat(rightSide);

    //первый на последнее место:password
    let firstItem = cryptoArray[0];
    cryptoArray.push(firstItem);
    cryptoArray.shift();

    let decryption = cryptoArray.join('');
    let result = decryption == password ? true : false;

    return result;
}

