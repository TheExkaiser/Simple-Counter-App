var i = 0;
var pressNum = 0;

function myFunc(a){
    i+=a;
    pressNum++;
    document.getElementById("counter").innerHTML = i;
    console.clear();
    console.log(pressNum);
}