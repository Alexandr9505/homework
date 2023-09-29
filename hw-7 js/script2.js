let js ='js';
console.log(js.toUpperCase());


const searchStart = (array, stringSrch) => {
	let newArray = [];
		array.forEach(element => {
		if (element.toLowerCase().startsWith(stringSrch.toLowerCase())) {
			newArray.push(element);
		}
	});
	return newArray;
}
searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру');
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');


console.log(Math.ceil(32.58884));
console.log(Math.floor(32.58884));
console.log(Math.round(32.58884));


let maxNumber = Math.max(52, 53, 49, 77, 21, 32);
console.log(maxNumber);
let minNumber = Math.min(52, 53, 49, 77, 21, 32);
console.log(minNumber);



const consoleRandom1 = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(consoleRandom1(1, 10));


const consoleRandom2 = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
console.log(consoleRandom2(1, 10));


const consoleRandomInt = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const getRandomArrNumbers = (userNumber) => {
	const consoleRandomInt = (min, max) => {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	let array = [];
	for (let i = 0; array.length < Math.floor((userNumber / 2)); i++) {
		array.push(consoleRandomInt(0, userNumber));
	}
	console.log(array);
}
getRandomArrNumbers(12);


const consoleRandom3 = (min, max) => {
	let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const twoIntNumber = (a, b) => {
	const consoleRandom3 = (min, max) => {
		let rand = min + Math.random() * (max + 1 - min);
		return Math.floor(rand);
	}
	return consoleRandom3(a, b);
}

twoIntNumber(16, 34);



let currentDate = new Date();
console.log(currentDate);


let currentDateNew = new Date();
console.log(`Текущая дата ${currentDateNew}`);
currentDateNew.setDate(currentDateNew.getDate() + 73);
console.log(`Новая дата через 73 дня: ${currentDateNew}`);


const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let myDate = new Date(); 
let fullDate = `${myDate.getDate()} ${months[myDate.getMonth()]} ${myDate.getFullYear()} - это ${days[myDate.getDay()]}`;
let hour = myDate.getHours(); 
let minute = myDate.getMinutes();
let second = myDate.getSeconds();
console.log(fullDate); 
if (minute < 10) {
	minute = "0" + minute;
}
if (second < 10) {
	second = "0" + second;
}

console.log(`Время сейчас ${hour}:${minute}:${second}`);


function gameStart() {
	let gameArr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	gameArr.sort();
	alert(gameArr);
	questionFristEl = prompt('Чему равнялся первый элемент массива?');
	questionLastEl = prompt('Чему равнялся последний элемент массива?');

		if (gameArr[0].toLowerCase() === questionFristEl.toLowerCase() && gameArr[6].toLowerCase() === questionLastEl.toLowerCase()) {
			alert('Молодец!');
		} else if (gameArr[0].toLowerCase() != questionFristEl.toLowerCase() && gameArr[6].toLowerCase() != questionLastEl.toLowerCase()) {
			alert('Неправильно');
		} else {
			alert('Вы были близки к победе!');
		}
}