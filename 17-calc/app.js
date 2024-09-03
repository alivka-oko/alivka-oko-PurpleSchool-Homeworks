const operations = document.querySelectorAll('.operation')
const resultField = document.querySelector('.result-field');

const buttons = document.querySelector('.arithmetic-operations');
buttons.addEventListener('click', (event) => {
    if (event.target.tagName !== 'BUTTON') {
        return;
    }

    const action = event.target.getAttribute('action');
    calcInputs(action);
});

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
