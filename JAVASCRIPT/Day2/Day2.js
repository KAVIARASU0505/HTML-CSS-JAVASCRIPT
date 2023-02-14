//document.body.style.backgroundColor='Yellow';
const button=document.querySelector('#button');
button.addEventListener('click',function(){
    button.textContent='I have\'nt completed my work.';
})
// const words=document.querySelector('.txt');
// words.addEventListener('click',function(){
//     let fname='Kavi';
//     let lname='arasu';
//     let fullname=`${fname}${lname}`;
//     words.textContent=fullname;
// })
// const words=document.querySelector('.txt');
// words.addEventListener('click',function(){
//     let fname='Kavi';
//     let lname='arasu';
//     words.textContent=`${fname},${lname}`;
// })
// const words=document.querySelector('.txt');
// words.addEventListener('click',function(){
//     let number="1+2+3";
//     let numstring=number.toString();
//     const num="1";
//     const num1=Number(num);
//     words.textContent=`${num},${num1}`;
// })
// const length=document.querySelector('.len');
// length.addEventListener('click',function(){
//     let fname='What the purpose of living';
//     const len=fname.length-1;
//     length.textContent=`${len}`;
// })
// const length1=document.querySelector('.len1');
// length1.addEventListener('click',function(){
//     let fname='What the purpose of living';
//     length1.textContent=`${fname[0]}`;
// })
// const length2=document.querySelector('.len2');
// length2.addEventListener('click',function(){
//     let name="kaviarasu";
//     if(name.includes('arasu')){
//         length2.textContent='Found';
//     }
//     else{
//         length2.textContent='NotFound';
//     }
// })
// const length2=document.querySelector('.len2');
// length2.addEventListener('click',function(){
//     let name="kaviarasu";
//     if(name.startsWith('kavi')){ // if(name.endsWith('arasu))
//         length2.textContent='Found';
//     }
//     else{
//         length2.textContent='NotFound';
//     }
// })
// const length3=document.querySelector('.len3');
// length3.addEventListener('click',function(){
//     let name="This is the wonderful place i have ever seen";
//     length3.textContent=name.indexOf('ever');
// })
const length3=document.querySelector('.len3');
length3.addEventListener('click',function(){
    let name="This is the wonderful place i have ever seen";
    length3.textContent=name.replace('place','part'); //replaceAll('text','Changing Text');
})
const length4=document.querySelector('.len4');
length4.addEventListener('click',function(){
    let name1="wonderful";
    length4.textContent=name1.slice(1,4);
})
const length5=document.querySelector('.len5');
length5.addEventListener('click',function(){
    let name2="wonderful";
    length5.textContent=name2.toUpperCase(); //name2.toLowerCase();
})

const list = document.querySelector('.len6');
list.addEventListener('click',function(){
const greetings= ['Happy Evening!','How was the day','The day is good','But Your day is not good','I will see you soon'];
for(const word of greetings){
    if(word.includes('day')){
        var newen =document.createElement('p');
        newen.textContent=word;
        list.appendChild(newen);
    }
}
})
const length6=document.querySelector('.len7');
length6.addEventListener('click',function(){
    const names=['Kavi','Sanjevi','Jai','Arun'];
    names.push('Sathurthi'); //names.pop()-->It will delete the last string in the given input.
    names.unshift('Harsha'); //names.shift()-->It will delete the first string in the given input.
    length6.textContent=names;
})

const length7=document.querySelector('.len8');
length7.addEventListener('click',function(){
    const names=['Harsha','Kavi','Sanjevi','Jai','Arun','Sathurthi'];
    const num=names.indexOf('Arun');
    names.splice(num,1);     //---->The num is a start,1 is the number of items want to delete after.
    length7.textContent=names;
})
const length8=document.querySelector('.len9');
length8.addEventListener('click',function(){
    const names=[1,3,4,5,7];
    const map1=names.map(x=>x*3); //     const name=names.join('-');----->We can join the numbers by including different symbols like '-' ','.
    length8.textContent=map1;
})
const length9=document.querySelector('.len10');
length9.addEventListener('click',function(){
    const names=['Harsha','Kavi','Sanjevi','Jai','Arun','Sathurthi'];
    const news=names.filter(word =>word.length > 3);
    length9.textContent=news;
})
const select = document.querySelector('select');
const detail = document.querySelector('h3');
select.addEventListener("change",Choose);
function Choose(){
    const choice=select.value;
    switch(choice){
            case 'sweet':
            detail.textContent=('It is sweet');
            break;
            case 'mild':
            detail.textContent=('It is Mild');
            break;
            case 'sugar':
            detail.textContent=('It is sugar');
            break;
            case 'snow':
            detail.textContent=('It is snow');
            break;
            default:
            detail.textContent=("")
            
    }
}

function update(backcolor,textcolor){
    fnt.style.backgroundColor=backcolor;
    fnt.style.color=textcolor;
}
const note=document.querySelector('#Colour');
const fnt=document.querySelector('h4');
note.addEventListener('change',()=>note.value==='Red'?update('Red','Blue'):update('Blue','Red'));


function work(worker){
  return worker.toUpperCase();
}
const mapping=document.querySelector('.mapping');
mapping.addEventListener('click',function(){
    const words=['Harsha','Kavi','Sanjevi','Jai','Arun','Sathurthi'];
    const word=words.map(work);
    mapping.textContent=word;
})
const table=document.querySelector('.table');
const clear=document.querySelector('.clear');
const result=document.querySelector('#result');
table.addEventListener('click',function(){
    for(i=1;i<=10;i++){
        const multiply=`${i} x ${i} = ${i*i}`;
        result.textContent += `${multiply}\n`;
    }
})
clear.addEventListener('click',function(){
    result.textContent='';
})