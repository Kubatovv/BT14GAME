// setTimeout( function () {
//     console.log("Hello World")
// }, 3000) // выполняет функцию через определённый промежуток времени (один раз)

// setInterval( function () {
//     console.log("Hello World");
// }, 2000) // выполняет функцию через определённый промежуток времени
// (до тех пор пока не указать стоп)

// console.log( $("#text").text() );

// setTimeout(function () {
//     $("#text").text("Hello, Snus")
// }, 2000)

// "" - строка

// ДЗ. через 2 секунды отображать в h1 "hello, ваше имя"

// text() - позволяет проверить контент тега, также может изменить его

// Инкремент = ++
// Декремент = --

// для создания переменной мы используем ключевое слово let название переменной

// ДЗ: сделать так чтобы этот таймер отображался в h1

// let Eldar = 174 // тип данных number

// let Alym = 174 // тип данных number

// if & else - условный оператор
// if (Eldar > Alym) { // в круглых скобках будет идти сравнение

//     // будет в случае если это правда (true)

//     console.log("Выше");  // тип данных строка

// } else {
//     // будет в случае если это ложь (false)
//     console.log("Ниже");
// }

// 10 > 0, 1 > 0, 1 - 1 = 0, 0 > 0 false

let time = 10;

let count = 1;

let timer;

$("#btn-start").on("click", function () {

  timer = setInterval(function () {
    if (time >= 0) {
      $("#text").text(`time: ${time--}`); // мы находим h1 и меняем контент h1
    } else {
      $("#finish-window").css("display", "flex");
      $("#finish-window h2").text("YOU LOUSE!");
    }
    // если таймер равен 0 то отображать окно finish window

  }, 1000); // выполняет функцию вычитания

  $("#text").css("display", "block");
  
  $("#count").css("display", "block");

  $("#box").css("display", "block");

  $(".buttons").css("display", "none");
});

// если переменная time > 0 то отображать box, если переменная time будет равно 0
// то скрывать мой box

let randomPosition = () => {
  let x = Math.floor(Math.random() * ($(document).width() - 200)); // 1366 - 200 = 0 - 1166
  let y = Math.floor(Math.random() * ($(document).height() - 200)); // 100 - 200 = -100

  $("#box").css("left", `${x}px`);
  $("#box").css("top", `${y}px`);
};

$("#box").on("click", function () {
  // нужно добавлять единицу к переменной count при нажатии на box

  $("#box").toggleClass("active");

  if (count > 10) {
    clearInterval(timer);
    $("#finish-window").css("display", "flex");
    $("#finish-window h2").text("YOU WIN!");
  } else {
    $("#count").text(`COUNT: ${count++}`);
  }

  randomPosition()
  // 200px статичные числа, но, нам нужны динамичные
});
// Math.floor(1200.12321312)

// $(document)

// изначально дива box не будет, он будет появляться при нажатии на кнопку START

// text() - показывает то что находиться внутри h1

// clearInterval() - останавливает setInterval()

// clearTimeout() - останавливает setTimeout()

// num-- // инкремент добавляет единицу

// console.log(num);
