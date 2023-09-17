for (let i = 1; i <= 2; i++) {
    console.log('Привет');
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400',
};

for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]}`);
}

let n = 1000;
let num = 0;

while (n > 50) {
    n = n / 2;
    num++;
}
console.log(`Получилось число ${n}. Число итераций равно ${num}`);

for (let dayMonth = 1; dayMonth <= 31; dayMonth += 7) {
    console.log(`Сегодня пятница, ${dayMonth}-е число. Необходимо подготовить отчет.`);
}