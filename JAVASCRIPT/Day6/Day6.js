"use strict";
const num=123;
const num1=456;
const use1=document.getElementById("use1");
use1.addEventListener("click",fun=>{
    const user=prompt("Enter your username:");
    use1.textContent=user;
})
const use2=document.getElementById("use2");
use2.addEventListener("click",fun=>{
    const newer=document.createElement("div");
    console.log("Verified");
    newer.textContent=`Hi this is my new content by using create element`;
    document.body.appendChild(newer);
})
const use3=document.getElementById("use3");
use3.addEventListener("click",fun=>{
    use3.setAttribute("type", "button");
    use3.setAttribute("value", "button");
    console.log("Verified");
})
const num2=num/num1;
console.log("num2");
//alert(1/0);// It will show infinity in the alert box.infinity also gives infinity result.
let num4=NaN+1; // Anything with NaN will give result as NaN
console.log(num4);
const num5=897654123984569845684589n;
console.log(num5);
console.log(typeof undefined)
console.log(typeof 10n);
console.log(typeof "100");
//const name1=confirm("Are you Happy");
//alert(name1);
const User=true;
const User1=true;
const value=String(User);
console.log(typeof User1);
console.log(typeof value);
console.log( 8 % 2 ); 
console.log( 10 % 3 ); 
console.log( 26 % 4 );
console.log(5**2); // It is used for Power.
const num6="1"
console.log(1+1+num6);
console.log(1+1+(+num6)); // (+)Unary Operator will converts the string into number 
const number=[1,2,3];
const number1=[1,2,3,...number];
console.log(number1);
const num7=document.getElementById("use7");
num7.addEventListener('click',fun=>{
    const ran=Math.floor(Math.random()*100)
    num7.textContent=ran;
    console.log("Verified");
})
let a=3;
let b=1;
a=a++;
b=b++;
console.log(a);
console.log(b);
let a3=5;
let b3=6;
let a1=++a3;
let b1=++b3;
console.log(a1);
console.log(b1);
var Bus={
    color:"Green",
    No:20
}
console.log(Bus.color);
Bus.color="Red";
console.log(Bus.color);
let check1=2;
let check2="2";
console.log(check1===check2);// It will Result as False because the data types are different.So It is not possible.
console.log(check1==check2);// It will result as true because it satisfies the condition.
const use8=document.getElementById("use8");
const use9=document.getElementById("use9");
use8.addEventListener("click",fun=>{
    if(use8.textContent==="Start the work"){
        use8.textContent="Stop the work";
        use9.textContent=`The Work is started`;
    }
    else{
        use8.textContent="Start the work";
        use9.textContent=`The Work is stopped`;
    }
})
const name1="Kavi";
const name2="arasu";
console.log(name1+name2);
console.log(name1+","+name2);
console.log(`${name1},${name2}`);
const num8=123;
console.log(typeof num8);
const num9=num8.toString(); // Typecase number to string.
console.log(typeof num9);
const str1='Message'; // Finds the specified characters in the declared element.
if (str1.includes('age')) {
  console.log('Found');
} else {
  console.log('Not Found');
}
const str2="The work is started but unable to stop.Next the work is stopped";
const ind=str2.indexOf("is");
const inde=str2.indexOf("is",ind+1);
console.log(ind);
console.log(inde);
const str3='The letters are changed to uppercase';
const str4=str3.toUpperCase; //const str4=str3.toLowerCase();
console.log(str4);
const str5=str3.replace("are","is"); // We can also use replaceall to replace all words which is related to given word.
console.log(str5);
const use10 = document.getElementById("use10");
use10.addEventListener('click',fun=>{
const works = [
  'The work is good',
  'I love my work',
  'The work place also so good',
  'The good reply to be given by others',
  'Okay Byee'
];
for (const work of works) {
  if (work.includes('good')) {
    const new4 = document.createElement('li');
    new4.textContent = work;
    use10.appendChild(new4);
  }
}
})
var words1="The words,are,splitted";
var words2=words1.split(" "); // var words2=words1.split("",3);
console.log(words2);
const objects =["one","two","three"];
const words3=objects.join(" ");
console.log(words3);
const arr6=['Apple','Banana','Grapes','Orange','None']
console.log(Array.of(arr6));
function Selected(select) {
  let Selected = 0;
  for (let i = 0; i < select.options.length; i++) {
    if (select.options[i].selected) {
      Selected++;
    }
  }
  return Selected;
}
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const cars = document.selectForm.cars;
  console.log(`You have selected ${Selected(cars)} option(s).`);
});
const arr = {num1:3,num2:5,num3:7};
for (const i in arr) {
  console.log(`${i}: ${arr[i]}`);
}