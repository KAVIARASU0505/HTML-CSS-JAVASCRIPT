const namel = document.querySelector('#namel');
const delayl = document.querySelector('#delay');
const button = document.querySelector('#set-alarm');
const output = document.querySelector('#output');

function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      throw new Error('Alarm delay must not be negative');
    }
    setTimeout(() => {
      resolve(`Wake up, ${person}!`);
    }, delay);
  });
}

button.addEventListener('click', () => {
  alarm(namel.value, delay.value)
    .then((message) => output.textContent = message)
    .catch((error) => output.textContent = `Couldn't set alarm: ${error}`);
});

////ES6 Version New Features
////Constants
const PI=3.1456785;  
console.log(PI > 2.0);
document.querySelector("#l1").innerHTML=PI.toFixed(2);
const a=10;
const b="10";
console.log(a==b);
console.log(a===b);

////Scoping-Block Scoped Variables - Using let in one scope only.We cannot use in other areas.
for (let i = 0; i < a.length; i++) {
    let x = a[i]
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
}
//
let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
if(callbacks[0]() === 0){
    console.log(callbacks[0]);
}
////Arrow Functions new in ES6
////lexical .this new in ES6
////Default Parameter values
function fun(x,y=10,z=20){
    console.log(x+y+z);
}
fun(10);
//
function fun1(x, y,...h) {
    return (x + y) * h.length
}
f=fun1(1, 2, "hello", true, 7);
console.log(f===9);
////Spread Operator
var p=[1,2,4];
var other=[2,4,5,...p];
console.log(other);
var none="567";
var chars=[...none];
console.log(chars);
////String Interpolation
var customer = { name: "Ravi" }
var card = { amount: 8, product: "pen", unitprice: 80 }
var message = `Hi ${customer.name},want to buy ${card.amount} ${card.product} for a total of ${card.amount * card.unitprice} bucks?`
console.log(message);