//Array Methods
const arr=[2,4,6,8]; // map
const map1=arr.map(y=>y*5);
console.log(map1);
const arr1 = [{key:1, value:10 },{key:2, value:20 },{ key:3, value:30 }];
  const newarr = arr1.map(({ key,value }) => ({ [key*2]: value*2 }));
  console.log(newarr);
//Filter
const words = ['one', 'two', 'three', 'four', 'five', 'six'];
const new1=words.filter(x=>x.length>3); 
console.log(new1);
//reduce
const arr2= arr.reduce((value1,value2)=>value1+value2,2); 
console.log(arr2);
 //find
const arr3= arr.find(find=>find>2);
console.log(arr3);
const arr5=["Grapes","Orange","Casberry","Dairy"];
const num5=arr5.find(x=>x=="Dairy"); 
console.log(num5);
//Object Entries
const car={
    name:"Swift",
    Year:2016,
    Defect:"yes"
}
const arr6=Object.entries(car);
console.log(arr6);
//Find Indexof
const num6=arr5.findIndex(x=>x=="Dairy"); 
console.log(num6);
//Keys
const arr7 = ['a','b','c'];
const looper = arr7.keys();
for (const key of looper) {
  console.log(key);
}
//values
const arr8=["Candy","Sweet","Beries","Chocklate"];
const iter=arr8.values(arr8);
for(const iters of iter){
    console.log(iters);
}
const arr9=Array.from(arr8);//From
console.log(arr9);
//Push
const arr10=["orange","grapes","pineapple"];
arr10.push("Fruits");
console.log(arr10);
//Pop
console.log(arr10.pop());
//shift
const arr11 = [1, 2, 3];
console.log("Verified");
const firstElement = arr1.shift();
console.log(arr11);
//Unshift
const insert = ["One","Two","Three"];
l=insert.unshift("four","five");
console.log(insert);
//slice
const animal = ['lion', 'tiger', 'camel', 'cow', 'Giraffe','tiger'];
d=animal.slice(2);
console.log(d);
e=animal.slice(2,4);
console.log(e);
//splice
f=animal.splice(2,0,"Human");
console.log(animal);
//reverse
const reversed = arr.reverse();
console.log(reversed);
//tostring
console.log(animal.toString());
//concat
let arr12="No";
let arr13="Name";
console.log(arr12.concat(arr13));
//indexof
const beasts = ['ant', 'dog', 'bison', 'duck', 'dog'];
console.log(beasts.indexOf('dog', 2));
const arr14 = [1, 2, [3, 4, [5, 6]]];
const got3=arr14.flat(Infinity);
console.log(got3);
////
////String Methods
//Length
let text = "To find the length of the string";
let length = text.length;
console.log(length);
//Slice
let text1 = "This is my Home Home";
let part = text1.slice(5, 15);
console.log(part);
let part1 = text1.substring(5, 15); // Substring // Also use substr()
console.log(part1);
//Replace
let newText = text1.replace("Home","House"); 
//ReplceAll
let newText1 = text1.replaceAll("Home","House");
console.log(newText);
console.log(newText1);
//to lowercase and to uppercase
let text2=text1.toLowerCase();
console.log(text2);
let text3=text1.toUpperCase();
console.log(text3);
//String Concat
let text4 = "Hi";
let text5 = "Welcome";
let text6 = text4.concat(" ",text5);
console.log(text6);
//////
//TypeCasting
let rdm="10";
console.log(typeof rdm);
let rdm1=Number(rdm);      //Coverting string to Number
console.log(typeof rdm1);
let rdm2=+rdm;             //Converting String to Number using Unary + operator
console.log(typeof rdm2);
let rdm3=123456789;        //Converting Number to string
console.log(typeof rdm3);
let rdm4=rdm3.toString();
console.log(rdm4);
console.log(typeof beasts);
let newer=beasts.toString();
console.log(typeof newer);
//Converting boolean to number
let rdm5=Number(false);
console.log(rdm5); 
let rdm6=Number(true);
console.log(rdm6);
const bool=true;
console.log(typeof bool);
const bool1=String(bool);
console.log(typeof bool1);
////
//ES6 New Features
//Constants
const id=100;
//Scoping
let age1=25;
function call(){
    let age=34;
    console.log(age);
}
call();
console.log(age1);
//Arrow Function
const p1 = [1, 2, 4, 5];
const map2 = p1.map(x => x * 2); // Here the arrow function is used.
console.log(map2);
let name1 = "";
name1 = () => {
  return "Hi Welcome";
}
const you=name1();
console.log(you);
//Extended Parameter HAndling
function create(x,y=10,z=20){
    let a=x+y+z+20;
    console.log(a);
}
create(10);
//Spread Operator
function create1(x,y,...a){
    let b=(x+y)*a.length;
    console.log(b);
}
create1(10,20,"Hello",1,4);
var string="Normal";
var array=[...string];
console.log(array);
//String Interpolation
function paraself([name1,age]){
    const words=`My name is ${name1} and my age is ${age}`;
    console.log(words);
 }
 paraself(["kavi",20]);
 function call3(name,age){  // Using Raw 
    name1=name;
    age1=age;
const details = String.raw`His name is \n\d\t\b kumar`;
console.log(`The detail was: ${details}`);
}
call3("Ravi",24);
//Array Matching
var cone=[1,2,3];
[a,b,c]=cone;
[a,b]=[b,a];
console.log(a,b,c)
// 
const x="Manoj";
const y=20;
const z="Erode";
const obj2={location:z,age:y,name:x};
console.log(obj2);
const obj3={y,x,z};
console.log(obj3);
//
function go({name:n,age:a}){
      this.name1=n;
      this.age=a;
      console.log(`He is ${name1} and his age is ${age}`)
}
go({name1:"Ravi",age:21});
//
var list=[10,20,30]
var [a=1,b=2,c=3,d] = list
console.log(a,b,c,d);
//Trunc
console.log(Math.trunc(35.5));
console.log(Math.sign(7))//Returns only 1 or -1.
console.log(Number.isSafeInteger(900715499254740992) === true) // We can check that the declared number is safe or not.
console.log(Number.isNaN(42)) //isNan only shows true value for only NaN values.
console.log(Number.isNaN(NaN))
//SetInterval
const int=document.getElementById("setinterval");
int.addEventListener("click",function(){
    var Intervel = setInterval(() => {
     document.getElementById("setinterval").innerHTML += " Hi";
    },1000); 
})
//SettimeOut
const int1=document.getElementById("settimeout");
int1.addEventListener("click",function(){
    console.log("verified");
    var Intervel1 = setTimeout(() => {
        document.getElementById("settimeout").innerHTML =" Welcome to the company";
    }, 2000);
})
//OOPs Concepts
//Encapsulation
const Ec= document.getElementById("Encapsulation");
Ec.addEventListener("click",function(){
    class Students{
        constructor(Name,marks){
            this.name=Name;
            this.marks=marks
        }
        setname(name){
            this.name=name;
        }
        setmarks(marks){
            this.marks=marks;
        }
        getmarks(){
            return this.marks;
        }
        getname(){
            return this.name;
        }
    }
       var std=new Students();
       var std1=new Students();
       std1.setmarks(80);
       std1.setname("Ram");
       std.setmarks(95);
       std.setname("Ravi");
       document.writeln("His name is "+std.getname()+" and his mark is "+std.getmarks()+".");
       document.writeln("Another student name is "+std1.getname()+" and his mark is "+std1.getmarks());    
})
//Abstraction
const As= document.getElementById("Abstraction");
As.addEventListener("click",function(){
    function Employee(name1,age,salary){
        this.name=name1;
        this.age=age;
        this.salary=salary;
        let bonus=3000;
        let finalsalary=function(){
            let finalsalary=salary+bonus;
            document.writeln("The final salary is :"+finalsalary);
        }
        this.empdetails=function(){
            document.writeln("The name is "+this.name+" and his salary is "+this.salary+".");
            finalsalary();
        }
    }
    let emp=new Employee("Sunil",25,5000);
    emp.empdetails();
})
//Ploymorphism
const Ps= document.getElementById("Polymorphism");
Ps.addEventListener("click",function(){
class Birds{
    constructor(name){
        this.name=name;
    }
    sings(){
        document.writeln("The bird "+this.name+" sings.");
    }
}
class Normal extends Birds{
    sings(){
        super.sings();
        document.writeln("The "+this.name+" sings.");
    }
}
let normal=new Normal('Human');
normal.sings();
})
//Inheritance
class car1{
    constructor(brand){
        this.name=brand;
    }
 }
 class model extends car1{
    constructor(brand,year){
         super(brand);
         this.year=year;
    }
    out(){
        return console.log(`The car brand name is ${this.name} and the year is ${this.year}`);
    }
 }

const Mycar=new model("Maruthi",2006);
Mycar.out()
