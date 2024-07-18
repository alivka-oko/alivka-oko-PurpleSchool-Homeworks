const language = prompt('write your language');
switch (language) {
    case 'en':
        alert('Welcome! Have a nice day!')
        break;
    case 'ru':
        alert('Добро пожаловать! Хорошего дня!')
        break;
    case 'de':
        alert('Willkommen! Guten Tag!')
        break;
    case 'es':
        alert('¡Bienvenido! Que tengas un buen día.')
        break;
    case 'fr':
        alert('Bienvenue ! Bonne journée!')
        break;
    default:
        alert('ERROR. Write your language')
        break;
}