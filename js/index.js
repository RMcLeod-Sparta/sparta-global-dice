function wholeDie(){
function rollDie(){
var dieRoll = Math.floor((Math.random() * 6) + 1);
return dieRoll;
 }
 //rollDie generates a number between 1 and 6.
function clearDie(){
  var element1 = document.getElementById("1");
  element1.classList.remove("dot");
  var element2 = document.getElementById("2");
  element2.classList.remove("dot");
  var element3 = document.getElementById("3");
  element3.classList.remove("dot");
  var element4 = document.getElementById("4");
  element4.classList.remove("dot");
  var element5 = document.getElementById("5");
  element5.classList.remove("dot");
  var element6 = document.getElementById("6");
  element6.classList.remove("dot");
  var element7 = document.getElementById("7");
  element7.classList.remove("dot");
  var element8 = document.getElementById("8");
  element8.classList.remove("dot");
  var element9 = document.getElementById("9");
  element9.classList.remove("dot");
  //if i were to do this in the futute i would put the elements in an array
  //and remove dot fot each member of the array.
  // it is a function for removing the dot class from any div's with it when
  //you roll a new number.
}
var die = rollDie();

if(die == 1){
  console.log("1");
  clearDie();
  var element = document.getElementById("5");
  element.classList.add("dot");
  //adding a dot to the middle div to represent a 1 on a die.
}else if(die == 2){
  console.log("2");
  clearDie();
  var element = document.getElementById("1");
  var element2 = document.getElementById("9");
  element.classList.add("dot");
  element2.classList.add("dot");
}else if(die == 3){
  console.log("3");
  clearDie();
  var element = document.getElementById("1");
  var element2 = document.getElementById("5");
  var element3 = document.getElementById("9");
  element.classList.add("dot");
  element2.classList.add("dot");
  element3.classList.add("dot");
}else if(die == 4){
  console.log("4");
  clearDie();
  var element = document.getElementById("1");
  var element2 = document.getElementById("3");
  var element3 = document.getElementById("7");
  var element4 = document.getElementById("9");
  element.classList.add("dot");
  element2.classList.add("dot");
  element3.classList.add("dot");
  element4.classList.add("dot");
}else if(die == 5){
  console.log("5");
  clearDie();
  var element = document.getElementById("1");
  var element2 = document.getElementById("3");
  var element3 = document.getElementById("5");
  var element4 = document.getElementById("7");
  var element5 = document.getElementById("9");
  element.classList.add("dot");
  element2.classList.add("dot");
  element3.classList.add("dot");
  element4.classList.add("dot");
  element5.classList.add("dot");
}else{
  console.log("6");
  clearDie();
  var element = document.getElementById("1");
  var element2 = document.getElementById("3");
  var element3 = document.getElementById("4");
  var element4 = document.getElementById("6");
  var element5 = document.getElementById("7");
  var element6 = document.getElementById("9");
  element.classList.add("dot");
  element2.classList.add("dot");
  element3.classList.add("dot");
  element4.classList.add("dot");
  element5.classList.add("dot");
  element6.classList.add("dot");
  //I would have liked to do this more effiently aswell, maybe making a function
  //for adding elements to get id'ed.
  //this was me adding all the dots nessisary for each side of a die.
}
}
