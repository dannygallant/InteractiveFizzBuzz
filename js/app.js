$(document).ready(function(){

var maxValue = parseInt(prompt('Enter a number between 20 and 100 for the upper limit of FizzBuzz'));

if (maxValue !== parseInt(maxValue)) {
	alert("FizzBuzz can only accept numerical values. Please re-enter an integer.");
}
console.log(maxValue);

fizzBuzz(maxValue);

function fizzBuzz(max) {
for (i = 1; i <= max; i++) {
	if (i%3 === 0 && i%5 === 0) {
		$('body').append("FizzBuzz");
		$('body').append("<br>");
	} else if (i%3 === 0) {
		$('body').append("Fizz");
		$('body').append("<br>");
	} else if (i%5 === 0) {
		$('body').append("Buzz");
		$('body').append("<br>");
	}  else {
		$('body').append(i);
		$('body').append("<br>");
	}
  }
}


});