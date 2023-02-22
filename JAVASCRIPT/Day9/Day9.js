//Long Synchronous program
const gen=document.getElementById("btn");
gen.addEventListener("click",function(){
function isprime(value){
   for(let i=0;i<Math.sqrt(value);i++){
    if (value % i === 0) {
        return false;
      }
   }
   return value>1;
}
function random(value){
 return Math.floor(Math.random()*value);
}
const MAX_PRIME = 10;
function generateprime(value){
    const prime=[];
    while(prime.length<value){
      const newer=random(MAX_PRIME);
      if(isprime(newer)){
        prime.push(newer);
      }
    }
    return prime;
}
   const prime=generateprime(Sync.value);
   const new1=document.createElement("div");
   new1.textContent=`Finished generating ${Sync.value} primes!`
   document.body.appendChild(new1);
   console.log("Verified");
})
document.getElementById('btn1').addEventListener('click', () => {
    document.location.reload();
  });
//Event Handler
const Ehandler=document.getElementById("Ehandler");
Ehandler.onclick=()=>{
    Ehandler.textContent="This is the content after clicking(Event Handler).";
}//In Event Handler we cannot create more than 1 handler.If created means,the output of the script will be last defined handler works.
//EventListener
const Elistener=document.getElementById("Elistener");
Elistener.addEventListener("click",()=>{
    Elistener.textContent="This is the content after clicking(Event Listener).";
})
//In Event Listener we can create multiple addeventlistener.
//Promises
const promise=document.getElementById("promise");
promise.addEventListener("click",()=>{
const reaction=false;
const reaction2=true;
let promise=new Promise((resolve,reject)=>{
    if(reaction){
        reject({
            name:"Very Worst",
            message:"Bye"
        })
    }
    else if(reaction2){
        reject({
            name:"Not bad",
            message:"Byee"
        })
    }
    else{
        resolve("Good and ok");
    }
})
promise.then((message)=>{
    console.log("Success "+message);
})
promise.catch((error)=>{
    console.log(error.name+" "+error.message);
})
})
//Promise chaining
const promise1=document.getElementById("promise1");
promise1.addEventListener("click",()=>{
const promise1=new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Successfully Verified");
    }, 2000);
})
.then((mess)=>{
  console.log(mess+"1"); 
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(mess+"1"), 1500);
  });
}).then((mess)=>{
    console.log(mess+"2"); 
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(mess+"2"), 2000);
      }); 
}).then((mess)=>{
    throw new Error("Whoops!");  
})
})
//Promise API
const promise2=document.getElementById("promise2");
promise2.addEventListener("click",()=>{
    let promise=Promise.race("iterable");
Promise.race([
new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Successfully Verified-1");
    }, 2000);
}),
new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Successfully Verified-2");
    }, 3000);
}),
new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("Successfully Verified-3");
    }, 1000);
})
])
.then((message)=>{
    console.log("Success "+message);
})
})
//Async and Await
const promise3=document.getElementById("promise3");
promise3.addEventListener("click",()=>{
    const greet=((value)=>{
       return new Promise((resolve,reject)=>{
            if(value){
            setTimeout(() => {
                resolve("Successfully Verified-2");
            }, 4000);
        }
            else{
                throw new Error("There is an error")
            }
        })
        .then((message)=>{
            console.log("Good"+message);
        })
    })
async function call(){
    let output= await greet(true);
    console.log("It has been displayed after 4 Seconds");
}
call();
})
//reduce method in array
const arr=[10,20,30,40];
const arr2= arr.reduce((accu,curr)=>accu+curr,5); 
console.log(arr2);
//Keyboard event
const text= document.getElementById("textbox");
const op = document.getElementById("output");
text.addEventListener("keydown",(e)=>{ //Keypress is only suitable for alphabetic,numeric,punctuation keys.
    op.textContent = `You pressed the ${e.key}.`
})
//keydown is suitable for all keys presses.
//Event Bubbling
const bubble=document.getElementById("bubble");
const op1=document.getElementById("out");
bubble.addEventListener("click",calling);
function calling(e){
    output.textContent = `You clicked on a ${e.currentTarget.tagName} element\n`;
}
