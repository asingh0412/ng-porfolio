
function randomFunc(){
  console.log("In Random function");
  var num1 = parseInt(document.getElementById("rand1").value);
  var num2 = parseInt(document.getElementById("rand2").value);
  return Math.floor(Math.random() * (num2-num1 + 1)) + num1;
}
