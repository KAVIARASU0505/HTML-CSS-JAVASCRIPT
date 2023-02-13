let Newname='Myname';
let age=20;
var any='Yourname';
let array=['Myname','Yourname','Noname'];
const Noname=document.querySelector(".Noname");
document.addEventListener('click',function(){
    alert("You called the function");
    let fname='kavi';
    let lname='arasu';
    Noname.textContent=fname+lname;
    document.body.appendChild(Noname);
})
const Noname=document.querySelector(".Noname");
document.addEventListener('click',function(){
    alert("You called the function");
    let fname='kavi';
    Noname.textContent=fname+'arasu';
    document.body.appendChild(Noname);
})
const Noname=document.querySelector(".Noname");
document.addEventListener('click',function(){
    alert("You called the function");
    let fname='kavi';
    fname +="arasu";
    Noname.textContent=fname;
    document.body.appendChild(Noname);

})
const Noname=document.querySelector(".Noname");
document.addEventListener('click',function(){
    alert("You called the function");
    const fname=prompt("Enter Your Firstname:");
    const lname=prompt("Enter Your Lastname:");
    let fullname=fname + lname;
    if(fullname=='kaviarasu'){
        function1();
    }
    else{
        function2();
    }
})
function function1(){
    const result=true;
    Noname.textContent=result+" Your name is matched with *kaviarasu*";
    document.body.appendChild(Noname);
}
function function2(){
    const result1=false;
    Noname.textContent=result1 + " Your name is not matched";
    document.body.appendChild(Noname);
}
const text=document.querySelector('.Btn');
console.log(text);
text.addEventListener('click',content);
function content(){
    const Cont=prompt("Enter your Content:");
    text.textContent=`${Cont}`;
}
const text1=document.querySelectorAll('.Creation');
for(const article of text1 ){
    article.addEventListener('click',createparagraph);
}
function createparagraph(){
    const para=document.createElement('p');
    para.textContent="Welcome to the Show";
    document.body.appendChild(para);
}

const looper=document.querySelector(".looper");
looper.addEventListener("click",function(){
    const numarray=[30,40,50,80,32,56];
for(const num of numarray){
    looper.textContent=num+1;
    document.body.appendChild(looper);
}
});
const button=document.querySelector("#button");

button.addEventListener('click',function(){
    const name=prompt("Enter your name:");
    alert(`Hi ${name}, Welcome`);
    button.textContent=`Welcome ${name}`;
})

const btn=document.querySelector("#btn");
const txt=document.querySelector(".txt");

btn.addEventListener("click",myfunction);
function myfunction(){
    if(btn.textContent==="Start the work"){
        btn.textContent="stop the work";
        txt.textContent="Working Hours is not over";
    }
    else{
        btn.textContent="start the work";
        txt.textContent="Working Hours is over";
    }
}

