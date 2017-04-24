
var origin = function(whatToSay) {
  alert(whatToSay);
};

var celciusToFar = function(number1) {
  return number1 * 1.8 + 32;
};

var gallonToLiter = function(number1) {
    return number1 * 3.8;
};

var cupToTablespoon = function(number1) {
  return number1 * 16;
};

var ouncesToCup = function(number1) {
  return number1 / 8;
};

var inchesToCent = function(number1) {
  return number1 * 2.54;
};

var poundsToKilo = function(number1) {
  return number1 * .45;
};

var pinchToTeaspon = function(number1) {
  return number1 * (1/12);
};



var number1 = parseInt(prompt("Enter the number you'd like to convert: "));

origin("Your conversion is: " + celciusToFar(number1) + ".");
