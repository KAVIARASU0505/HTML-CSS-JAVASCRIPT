function calling(){
    name1="Kavi";
    name2="arasu";
    name3="kaviarasu";
    let convey=`http://example.com/foo?bar=${name1+name2}&quux=${name3}`;
    console.log(convey);
}
calling();
//Raw string in Template Literals
function call(name,age){  // Using Raw we can get output as what we declared such as \n->It is used for newline characters but using raw we can set as it as have.
    name1=name;
    age1=age;
const details = String.raw`His name is \n\d\t\b RaviKrishnan`;
console.log(`The detail was: ${details}`);
console.log(name1);
console.log(age1);
}
call("Ravi",24);
//Spread Operator
let str="Kavi";
let arr=[...str];
console.log(arr);
//Destructing Assigments
//Array Matching
//Object Matching-Shorthand Notation
const obj1={
    name:"Kavi",
    age:20,
    location:"Namakkal"
}
console.log(obj1);
const l="Sukesh";
const m=21;
const n="Erode";
const obj2={location:l,age:m,name:n};
console.log(obj2);
const obj3={m,l,n};
console.log(obj3);
//
var list=[1,2,3];
var[a,b,c]=list;
[b,c,a]=[a,b,c];
console.log(a);
console.log(b);
console.log(c);
//Object Matching-Deep Matching
const obj11={
    name:"Kavi",
    age:20,
    location:"Namakkal",
    detai1:{
        name:"kaviarasu",
        address:"Kabilarmalai"
    }
}
console.log(obj11.detai1);
//Object and array Matching
var str1 = { a: 1 };
var arr2 = [ 1 ];
var { a, b = 2 } = str1;
var [ x, y = 2 ] = arr2;
console.log(str1);
console.log(arr2);
//Parameter context matching
//Import and Export
function paraself([name1,age]){
   const words=`My name is ${name1} and his age is ${age}`;
   console.log(words);
}
paraself(["kavi",20]);
function context({name,age}){
    const fnt=`My sister name is ${name} and her age is ${age}`;
    console.log(fnt);
}
context({name:"Hema",age:23});
export{paraself,context};
//Import and Export in default values
export default class rule{ 
    good(name,id){
    const words=`My Friend name is ${name} and his id is ${id}`;
    console.log(words);
 }
// good("chandru",20);
     bad(name,id){
     const fnt=`My Friend name is ${name} and his id is ${id}`;
     console.log(fnt);
 }
//  bad("Karthi",23);
}
Classes in ES6
class Rectangle { 
    constructor(height, width) { 
       this.h = height; 
       this.w = width; 
    } 
    test() { 
        console.log("The height of the polygon: ",this.h) 
        console.log("The width of the polygon: ",this. w) 
     } 
 }
 var cont = new Rectangle(10,12);
cont.test();
////Setter Function
class Student {
    constructor(id,fname,lname){
       this.id = id;
       this.fname = fname;
       this.lname = lname;
       console.log('Verified 1');
    }
    set idnum(newid){
       console.log("Verified 2");
       this.id = newid;
    }
 }
let d1 = new Student(22,'kavin','kumar')
 console.log(d1);
 d1.idnum = 23;
 console.log(d1);
 ////getter Function
 class Student1 {
    constructor(id,fname,lname){
       this.id = id;
       this.fname = fname;
       this.lname = lname;
       console.log('Verified 3');
    }
    get fullname(){
        return console.log(`The full name is ${this.fname + this.lname}`);
    }
 }
let r1 = new Student1(22,'kavin','kumar')
 console.log(r1);
 r1.fullname();
 console.log(r1);
 //Inheritance
 class car{
    constructor(brand){
        this.name=brand;
    }
 }
 class model extends car{
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
////static
class Car{
    static numberOfCars = 0;
    static beginRace(){
      console.log("The race has begun!");
    }
    constructor(model){
      this.model = model;
      Car.numberOfCars += 1;
    }
  }
  let car1 = new Car("Ford");
  let car2 = new Car("Mustang");
  let car3 = new Car("Swift");
  console.log(Car.numberOfCars);
  Car.beginRace();
