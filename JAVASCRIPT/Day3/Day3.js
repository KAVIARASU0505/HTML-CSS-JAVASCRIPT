const button=document.querySelector("#button");
button.addEventListener('click',function(){
    button.setAttribute("type", "button");
    button.setAttribute("value", "button");
    //console.log("Verified");
})
function random(number){
    return Math.floor(Math.random()*(number));
}
const button1=document.querySelector("#color");
button1.addEventListener('click',function(){
const bcolor=`rgb(${random(255)},${random(255)},${random(255)})`;
document.body.style.backgroundColor=bcolor;
//console.log("Verified");
})
const len1=document.querySelector('.len1');
len1.addEventListener('click',update);
function update(){
const person = {
    name: ["Bob", "Smith"],
    age: 32,
    introduceSelf() {
        const number=(`Hi! I'm ${this.name[0]}.`);
        len1.textContent=number;
        console.log("Verified");
      },
  };
  person.introduceSelf();
}
const len2=document.querySelector('.len2');
len2.addEventListener('click',update);
function update(){
const person = {
    name:{
        first:"kavi",
        last:"arasu",
    },
    age: 32,
    function() {
        const number=(`Hi! I'm ${person.name.last}.`); // const number=(`Hi! I'm ${person["name"]["last"]}.`);
        len2.textContent=number;
        console.log("Verified");
      },
  };
  person.function();
}
  
const len3=document.querySelector('.len3');
len3.addEventListener('click',update);
function update(){
const person = {
    name:{
        first:"kavi",
        last:"arasu",
    },
    age: 32,
    function() {
        const number=(`Hi! I'm ${person.name.last}.`); // const number=(`Hi! I'm ${person["name"]["last"]}.`);
        len3.textContent=number;
        console.log("Verified");
      },
  };
  person.function();
}

const len4=document.querySelector('.len4');
len4.addEventListener('click',calling);
function calling(){
    function person(name,name1,age){
        this.name=name;
        this.name1=name1;
        this.age=age;
        this.self = function () {
            const number1=`Hi! ${this.name}`;
            len4.textContent=number1;
          };
    }

    const person1=new person('sanjevi','prasanth',21);
    person1.self();
    // const number=`Hi! ${person1.name1}`;
    // len4.textContent=number;   
}
const len5=document.querySelector('.len5');
len5.addEventListener('click',calling);
function calling(){
    const person={
    self(){
        const number='Hi!';
        len5.textContent=number;   
     }  
}

    const person1=Object.create(person);
    person1.self();
    // const number=`Hi! ${person1.name1}`;
    // len4.textContent=number;   
}
const len6=document.querySelector('.len6');
len6.addEventListener('click',calling);
function calling(){
    function person(){
        this.name="kavi";
        this.age=20;
    }
    const person1=new person();
    person.prototype.gender = 'male';
    const number=`The gender of kavi is ${person1.gender}`;
    len6.textContent=number;   
}
const len7=document.querySelector('.len7');
len7.addEventListener('click',calling);
function calling(){
class Person {
    constructor(name) {
      this.name = name;
    }
    getinfo(){
        len7.textContent=(`My name is ${this.name}`);
    }
}
  class Professor extends Person {
    constructor(name, teaches) {
      super(name);
      this.teaches = teaches;
    }
  
    introduceSelf() {
      len7.textContent=(`My name is ${this.name}, and I will be your ${this.teaches} professor.`);
    }
    grade(paper) {
        const grade = Math.floor(Math.random() * (5 - 1) + 1);
        console.log(grade);
      }
    
  }
  let professor1=new Professor('Raj','Psychology');
  professor1.introduceSelf();
 // professor1.getinfo();
 // console.log(professor1);
}
