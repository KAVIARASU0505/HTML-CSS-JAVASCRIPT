const obj1={
    name1:"Kaviarasu",
    age:20
}
const obj2={
    name1:"Sanjevi"
}
Object.assign(obj2,obj1);
console.log(obj2);
console.log("Verified");
const newobj={
    name1:"Pradeep",
    age:21,
    Location:"Tamilnadu"
}
// Clone an Object
const newobj1=Object.assign({},newobj);
console.log(newobj1);
//Object Entries
const car={
    name:"Swift",
    Year:2016,
    Defect:"yes"
}
const arr=Object.entries(car);
console.log(arr);
//Object.getOwnPropertyDescriptors
const car1={
    name:"ford",
    Year:2017,
    Defect:"yes"
}
const arr1=Object.getOwnPropertyDescriptors(car1);
console.log(arr1);
const arr2=["Lion","Penquin","Giraffe"];
const Arr3=arr2.includes("Giraffe");
console.log(Arr3);
for(let i=0;i<arr2.length;i++){
if(arr2[i]==="Tiger"){
    console.log(arr2);
    break;
}
else{
    const new1=arr2.push("Tiger");
    console.log(arr2);
    break;
}
}
const arr4=["Apple","Banana","Casberry","Dairy"];
const num4=arr4.find(x=>x=="Dairy"); //Find the words in the arrays 
console.log(num4);
const num5=arr4.findIndex(x=>x=="Dairy"); //Find the index of the given Arrays
console.log(num5);
const arr5=["Candy","Sweet","Beries","Chocklate"];//Value
const iter=arr5.values(arr5);
for(const iters of iter){
    console.log(iters);
}
//Object Entries
const arr6=["Candy","Sweet","Beries","Chocklate"];
const iters=arr6.entries();
for(const iterator of iters){
    console.log(iterator);
}
console.log(Array.from(arr6)); // Array.from()
const arr7=["one","two","three","four"];
const arr8=Array.from(arr7);
console.log(arr8);
const arr10=[1,2,3,4];
const arr9=Array.from(arr10,item=>item*10);
console.log(arr9);
console.log(Math.sign(7))//Returns only 1 or -1.
console.log(Math.trunc(10.001));
console.log(Number.isSafeInteger(900715499254740992) === true) // We can check that the declared number is safe or not.
console.log(Number.isNaN(42)) //isNan only shows true value for only NaN values.
console.log(Number.isNaN(NaN))
let num6=45;
// console.log(Number.isInteger(num6))
let num8=7674;
console.log(Number.isFinite(num8));
const use = document.getElementById("use");
use.addEventListener("click",function(){
    console.log("Verified");
    class work{
        getinfo(name,time){
            console.log(`This the work done by ${name} and worked for ${time} hours.`)
        }
    }
    const info=new work();
    info.getinfo("kavi",8);
})
const use1 = document.getElementById("use1");
use1.addEventListener("click",function(){
    console.log("Verified");
    class work1{
        constructor(name,time){
            this.name=name;
            this.time=time;
        }
        getinfo(){
            console.log(`This the work done by ${this.name} and worked for ${this.time} hours.`)
        }
    }
    const info=new work1("kavi",8);
    info.getinfo();
})
//Encapsulation
const use2= document.getElementById("use2");
use2.addEventListener("click",function(){
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
       std.setmarks(89);
       std.setname("Kavi");
       document.writeln("His name is "+std.getname()+" and his mark is "+std.getmarks());    
})
