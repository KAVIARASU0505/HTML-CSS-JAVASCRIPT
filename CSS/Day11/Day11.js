document.body.style.backgroundColor ="lightblue";
document.getElementById('go-back').addEventListener('click',function(){
history.back();
})
document.getElementById('go-forward').addEventListener('click', function(){
   history.forward();
   console.log("clicked");
})

const options = {
   enableHighAccuracy: true,
 };
 function success(pos) {
   const crd = pos.coords;
 }
 function error(err) {
   console.warn('ERROR');
 }
 navigator.geolocation.getCurrentPosition(success, error, options);

