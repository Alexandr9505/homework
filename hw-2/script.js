let a = 20;
alert(a);

let year = 2007;
alert(year);

let name = "Брендан Эйх";
alert(name);

let num1 = 10;
let num2 = 2;
alert (num1+num2);
alert (num1-num2);
alert (num1*num2);
alert (num1/num2);

let num3 = 2;
let result = 2**5;
alert(result);

let a1 = 9;
let b1 = 2;
let remainder = 9%2;
alert(remainder);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

let age = prompt("Сколько вам лет?");
alert(age);

const user = {name: "Alex" , age: "20" , isAdmin: "admin"};
alert(user.name);

user["City of residence"] = true;
alert(user["City of residence"]);

user[21] = true;
alert(user[21]);

delete user["City of residence"];

let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user.name , user.age , user.isAdmin);

prompt("Привет, ИМЯ");