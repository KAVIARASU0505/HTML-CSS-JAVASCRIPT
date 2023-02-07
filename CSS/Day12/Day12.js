
let Newname='Myname';
let age=20;
var any='Yourname';
let array=['Myname','Yourname','Noname'];
let numarray=[30,40,50,80,32,56];
let input = document.querySelector("h3");
input.addEventListener("click",update);
function update(){
    let para=prompt("Enter your Content");
    input.textContent = `${para}`;
}
function createpara(){
    const para= document.createElement('h1');
    para.textContent="Hello Everyone";
    document.body.appendChild(para);
    alert("You clicked the button");
}
const buttons=document.querySelectorAll("button");
for(const button of buttons){
    button.addEventListener('click',createpara);
}
myfunction();
function myfunction(){
    const para =document.createElement('h1');
    para.textContent="This a Content which is coded in Javascript";
    document.body.appendChild(para);
}
const Newbtn=document.querySelector("#btn_a");
const Newheader=document.querySelector("#btn_b");

Newbtn.onclick= () => {
    const para=prompt("Where are you from?");
    alert(`Hi ${para} How are you?`);
    Newheader.textContent=`Now the content is changed to ${para}`;
}
function number(){
    let ans=Number(prompt("Type your Number"));
    let n= Number.parseFloat(ans).toFixed(2);
    document.querySelector("#click").innerHTML = n;
 }

