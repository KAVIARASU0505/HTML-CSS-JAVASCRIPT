document.body.style.backgroundColor ="lightblue";
document.getElementById('go-back').addEventListener('click',function(){
history.back();
})
document.getElementById('go-forward').addEventListener('click', function(){
   history.forward();
   console.log("clicked");
})
/*const url = 'sample.html';
history.pushState('null','null', url);*/

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

/*let id;
let target;
let options;

function success(pos) {
  const crd = pos.coords;

  if (target.latitude === crd.latitude && target.longitude === crd.longitude) {
    console.log('Congratulations, you reached the target');
    navigator.geolocation.clearWatch(id);
  }
}
function error(err) {
  console.error('ERROR');
}
target = {
  latitude : 0,
  longitude: 0
};
options = {
  enableHighAccuracy: false,
};
id = navigator.geolocation.watchPosition(success, error, options);*/
