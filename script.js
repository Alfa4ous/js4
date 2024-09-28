'use strict'
// задание 1
let a = Number(prompt("Введите число 1"));
let b = Number(prompt("Введите сисло 2"));
for(let san = a; san < b+1; san ++){
    if(san % 2 == 0){
        console.log(san);
    }
}
// задание 2
let i = 0;
while(i < 3){
    console.log( `number ${i}!` );
    i++; 
}
// задание 3
while(true){
   let san1 = Number(prompt("Введите число больше 10"));
   if(san1 > 10){
    console.log(san1);
    break;
   }
}
// задание 4
let a1 = Number(prompt("Введите число"));
let b1 = Number(prompt("Введите число"));
console.log(`Число ${Math.min(a1,b1)} меньше`);
// задание 5
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
  }
  ask(
    "Вы согласны?",
    () =>{ alert("Вы согласились."); },
    () =>{ alert("Вы отменили выполнение."); }
  );
// задание 6
checkAge(prompt("Введите свой возраст"));
function checkAge(age) { (age >= 18) ? true : confirm('Родители разрешили?')};