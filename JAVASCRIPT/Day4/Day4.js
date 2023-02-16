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
////Destructuring Assignment
let P = 1;
let Q = 3;
[P, Q] = [Q, P];
console.log(P); 
console.log(Q); 
//Arrays
const num=[];
num.push("23","25","50");
num.push("60");
console.log(num.length);
//
const cars=[];
cars.push("Swift","Fortuner","Honda City","Jaguar","Tesla");
console.log(cars[1]);
cars[7]="Mazda";
console.log(cars.length);
console.log(cars[6]);
console.log(Object.keys(cars));
console.log(Object.values(cars));
//
const a1 = ['a', 'b', 'c'];
const a2 = ['d', 'e', 'f'];
const a3 = a1.concat(a2);
console.log(a3);
//
const b1=['1','2','3','4','5'];
const b2=b1.copyWithin(0,3);
console.log(b2);
//
const words = ['bird', 'anime', 'humans', 'exotic', 'destruct', 'amibous'];
const result = words.filter(word => word.length > 5);
console.log(result);
//
const array1 = ['a', 'b', 'c'];
array1.forEach(element)
function element(item){
console.log(item);
}
//
const p1 = [1, 2, 4, 5];
const map1 = p1.map(x => x * 2);
console.log(map1);
//
const animals = ['lion', 'tiger', 'camel', 'cow', 'Giraffe','tiger'];
console.log(animals.indexOf('tiger'));
console.log(animals.indexOf('tiger',2));
//
const a4 = ['1', '2', '3'];
const reversed = a4.reverse();
console.log(reversed);
//
const animal = ['lion', 'tiger', 'camel', 'cow', 'Giraffe','tiger'];
d=animal.slice(2);
console.log(d);
e=animal.slice(2,4);
console.log(e);
f=animal.splice(2,0,"Human");
console.log(animal);
//
const arr1 = [1, 2, 3];
const firstElement = arr1.shift();
console.log(arr1);
//
const insert = ["One","Two","Three"];
l=insert.unshift("four","five");
console.log(l);
console.log(insert);
