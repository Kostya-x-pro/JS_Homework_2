//. Home work Урок 10 && and ||

// // Задание 1
// let userName = prompt("Введите ваше имя");
// let userSurname = prompt("Введите вашу фамилию");
// let userLogin = prompt("Введите ваш логин");
// if (userName && userSurname && userLogin) {
//   alert(userName + " " + userSurname);
// } else if (userName && userSurname) {
//   alert(userName + " " + userSurname);
// } else if (userLogin && userSurname) {
//   alert(userLogin);
// } else if (userLogin && userName) {
//   alert(userName);
// } else {
//   userSurname || userLogin;
//   alert("Noname");
// }

// Задание 2
// let userNumber = prompt("Введите число");
// if (userNumber != 100 && userNumber % 2 && userNumber % 1 == 0) {
//   alert("Вы ввели число не равное 100, не четное, не дробное");
// }

// Задание 3 (2-ая)
// let num = +prompt("Введите первое число");
// let num1 = +prompt("Введите второе число");
// let num2 = +prompt("Введите третье число");
// let result = (num, num1, num2)
//   ? alert(num + num1 + num2)
//   : (num, num1)
//   ? alert(num + num1)
//   : (num1, num2)
//   ? alert(num1 + num2)
//   : alert("вы не ввели число");

// (3-тья)
// const userName = prompt("Ваше имя");
// const userAge = prompt("Ваш возраст");
// const result =
//   userAge >= 18
//     ? alert(`Добро пожаловать! ${userName}`)
//     : alert(`Простите ${userName} доступ закрыт!`);

// Задание 4
let arg = prompt("Введите число");
switch (arg) {
  case "0" /* не понимаю по чему число дожно быть в "" т.е строкой ? */:
    alert("Ноль");
    break;
  case "1":
    alert("один");
    break;
  case "2":
    alert("два");
    break;
  case "3":
    alert("три");
    break;
  case "4":
    alert("четыре");
    break;
  case "5":
    alert("пять");
    break;
  case "6":
    alert("шесть");
    break;
  case "7":
    alert("семь");
    break;
  case "8":
    alert("восемь");
    break;
  case "9":
    alert("девять");
    break;
  case arg >= "10":
    alert("Веденное число больше 10");
    break;
      // case isNaN(value):
  //   alert("Некоректное значение");
    default:
      alert("некоректное значение");
}