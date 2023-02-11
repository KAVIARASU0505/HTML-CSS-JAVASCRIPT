const samp=document.querySelector("h2");
samp.addEventListener('click',sample);
function sample(){
    const para=prompt('Enter any content:');
    samp.textContent=(`${para}`);
}
const text=document.querySelector('ul');
const li=document.createElement('li');
text.append(li);
li.innerText=('Content 5');
console.log(li);
li.classList.add('list-items')

const listitems=document.getElementsByClassName('list-items');

for(i=0;i<listitems.length;i++){
    listitems[i].style.fontSize='4rem';
}
console.log(listitems);

const list=document.querySelector('ul');
list.childNodes[1].style.backgroundColor='blue';

const temp=document.querySelector('h3');
temp.style.backgroundColor='red';
temp.addEventListener("click",update);
function update(){
    alert('You clicked the button');
}
const mouse=document.querySelector(".Container");

mouse.addEventListener("mouseover",function(mousee){
    mousee.target.style.backgroundColor='yellow';
},true)
 
const mouse=document.querySelector(".Container");

mouse.addEventListener("mouseover",mousee);
function mousee(){
    mouse.style.backgroundColor='green';
}

const rbutton =document.querySelector('.Reveal-button');
const hbutton =document.querySelector('.hidden-details');

rbutton.addEventListener("click",clicker)
function clicker(){
    if(hbutton.classList.contains('rbutton')){
        hbutton.classList.remove('rbutton')
    }else{
        hbutton.classList.add('rbutton')
    }
}
const Box=document.querySelector(".form");
Box.addEventListener("focus",function(event){
    event.target.style.background="lightblue";
},true);
Box.addEventListener("blur",function(event){
    event.target.style.background="LightYellow";
},true);