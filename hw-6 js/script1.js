let arrayNumbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrayNumbers.length; i++) {
	console.log(arrayNumbers[i]);
	if (arrayNumbers[i] === 10) {
		break;
	}
}


let checkIndex = [1, 5, 4, 10, 0, 3];
console.log(checkIndex.indexOf(4));


let useJoin = [1, 3, 5, 10, 20];
console.log(useJoin.join(' '));


let createArr = [];
for (let i = 0; i < 3; i++) {
	createArr[i] = [];

	for (let j = 0; j < 3; j++) {
		createArr[i].push(1);
	}
}
console.log(createArr);


let addArr = [1, 1, 1];
addArr.push(2, 2, 2);
console.log(addArr);


let deleteSymb = [9, 8, 7, 'a', 6, 5];
deleteSymb.sort();
deleteSymb.pop();
console.log(deleteSymb);


let guessNumber = [9, 8, 7, 6, 5];
let checkNumber = guessNumber.includes(Number(prompt('Введите число любое')));
if (checkNumber === true) {
	alert('Угадал');
 } else {
	alert('Не угадал');
}


let viceVersa = 'abcdef';
let res = viceVersa.split('');
res = res.reverse();
res = res.join('');
console.log(res);


let sortArr2 = [
	[1, 2, 3],
	[4, 5, 6]
];
console.log(sortArr2.flat());


let array = [];
let sum = 0;
for (let i = 0; i < 10; i++) {
	array.push(getRandomInt(10));
}
console.log(array);

for (let i = 0; i < array.length - 1; i++) {
	const sum = array[i] + array[i + 1];
	console.log("Сумма", array[i], "и", array[i + 1], "равна", sum);
}


let arrSqr = [1, 2, 3, 4, 5];
let sqrResult = arrSqr.map(item => item**2);
console.log(sqrResult);


const getLengthWords = quanity => quanity.map(str => str.length);
console.log(getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']));


function filterPositive(array) {
	return array.filter(item => item < 0)
}
filterPositive([-1, 0, 5, -10, 56]); 
filterPositive([-25, 25, 0, -1000, -2]);