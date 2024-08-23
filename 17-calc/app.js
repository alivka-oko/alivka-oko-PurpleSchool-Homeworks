const operations = document.querySelectorAll('.operation')
const resultField = document.querySelector('.result-field');

operations.forEach((element) => {
    element.addEventListener('click', () => {
        calcInputs(element.getAttribute('action')) // ну или просто textContent
    })
})

function calcInputs(action) {
    /*Как я поняла, закомментированный  вариант снизу не самый безопасный из-за eval(), но симпатичнее */
    //    let result = `${firstField.value} ${action} ${secondField.value}`;
    //    const resultField = document.querySelector('.result-field');
    //    resultField.textContent = eval(result) === Infinity ? 'Нельзя >:(' : eval(result)
    let result;
    switch (action) {
        case '+':
            result = Number(firstField.value) + Number(secondField.value)
            break;
        case '-':
            result = Number(firstField.value) - Number(secondField.value)
            break;
        case '*':
            result = Number(firstField.value) * Number(secondField.value)
            break;
        case '/':
            result = Number(firstField.value) / Number(secondField.value)
            break;
        default:
            result = 'Куда ты жмал'
    }
    if (result === Infinity || isNaN(result)) {
        result = 'Нельзя >:('
    }
    resultField.textContent = result
}
