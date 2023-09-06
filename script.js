var celsius=document.querySelector("#celsius");
var fahrenheit=document.querySelector("#fahrenheit");
celsius.oninput=function(){
    var c=celsius.value;
    var f=(c*(9/5))+32;
    fahrenheit.value=f;
}
fahrenheit.oninput=function(){
    var f=fahrenheit.value;
    var c=(f-32)*(5/9);
    celsius.value=c;
}
function erase(){
    celsius.value=null;
    fahrenheit.value=null;
}