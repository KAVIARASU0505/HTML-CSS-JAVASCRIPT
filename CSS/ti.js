let Box=document.getElementById("form");
Box.addEventListener("focus",function(event){
    event.target.style.background="lightblue";
},true);
Box.addEventListener("blur",function(event){
    event.target.style.background="LightYellow";
},true);
let Box1=document.getElementById("Inout");
Box1.addEventListener("focusin",function(event){
    event.target.style.background="Lightgreen";
},true);
Box1.addEventListener("focusout",function(event){
    event.target.style.background="orange";
},true);
var Window;
        function windowOpen() {
          Window = window.open("https://developer.mozilla.org/en-US/docs/Web/API/Window/focus_event");
        }
        function windowClose() {
          Window.close();
        }