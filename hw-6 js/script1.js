let arrayNumbers = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arrayNumbers.length; i++) {
	if (arrayNumbers[i] >= 10) {
		break;
	} else {
		console.log(arrayNumbers[i]);
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
addArr.push(2, 2);
console.log(addArr);


let deleteSymb = [9, 8, 7, 'a', 6, 5];
deleteSymb.sort();
deleteSymb.pop();
console.log(deleteSymb);


let guessNumber = [9, 8, 7, 6, 5];
let result = 0;
let enterNumber = Number(prompt('Введите число любое'));
for (let i = 0; i < guessNumber.length; i++) {
	if (enterNumber === guessNumber[i]) {
		console.log('угадал');
		break
	} else {
		console.log('НЕ угадал');
	}
}


let viceVersa = 'abcdef';
let res = viceVersa.split('');
res = res.reverse();
res = res.join('');
console.log(res);


let sortArr = [
	[1, 2, 3],
	[4, 5, 6]
];
let arr = [];
for (let i = 0; i < sortArr.length; i++) {
	for (let j = 0; j < sortArr[i].length; j++) {
		arr.push(sortArr[i][j]);
	}
}
console.log(arr);


let array = [];
let sum = 1;
for (let i = 1; i <= 10; i++) {
	array.push(i);
}
for (let j = 1; j < array.length; j++) {
	sum += array[j];
	console.log(sum);
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