let password = '0000';
let enterPassword = prompt('Введите пароль');
let message;
if (enterPassword === password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неверно');
}

let c = Number(prompt('Введите число больше нуля и меньше десяти'));
if (c > 0 && c < 10) {
    alert('Верно');
} else {
    alert('Неверно');
}

let d = Number(prompt('Введите число больше ста'));
let e = Number(prompt('Введите любое число'));
if (d > 100 || e > 100) {
    alert('Верно');
} else {
    alert('Неверно');
}

let a = '2';
let b = '3';
alert(Number(a) + Number(b));

let varMonth = Number(prompt("Введите номер месяца от 1 до 12"));
switch (varMonth) {
    case 1:
        alert('Зима');
        break;
    case 2:
        alert('Зима');
        break;
    case 3:
        alert('весна');
        break;
    case 4:
        alert('весна');
        break;
    case 5:
        alert('весна');
        break;
    case 6:
        alert('лето');
        break;
    case 7:
        alert('лето');
        break;
    case 8:
        alert('лето');
        break;
    case 9:
        alert('осень');
        break;
    case 10:
        alert('осень');
        break;
    case 11:
        alert('осень');
        break;
    case 12:
        alert('Зима');
        break;
    default:
        alert('Неизвестное значение');
}
