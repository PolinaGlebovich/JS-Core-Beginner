// Обращение к переменной до её объявления

console.log(x); // undefined

var x = 10;

console.log(y); // ReferenceError: Cannot access 'y' before initialization

let y = 20;

console.log(z); // ReferenceError: Cannot access 'z' before initialization

const z = 30;
