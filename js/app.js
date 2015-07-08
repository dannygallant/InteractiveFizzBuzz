$(document).ready(function(){

var maxValue = prompt('Enter a number between 20 and 1000 for the upper limit of FizzBuzz');

testInput(maxValue);

console.log(maxValue);  // Used for testing, but left active. Not necessary.

function testInput() {
	maxValue = +maxValue;	 // Convert user entry into a number.
	if (Number.isNaN(maxValue)) {
		alert("FizzBuzz can only accept numerical values. Please reload the page and enter an integer.");
	} else if (maxValue > 1000) {
		alert("No numbers over 1000, or you'll be waiting a while.");
	} else if (maxValue < 20) {
		alert("Please enter a number between 20 and 1000 to get the full FizzBuzz effect.");
	} else if (Number.isInteger(maxValue)) {
		alert("Thanks for the integer!");
		fizzBuzz(maxValue);
	}  else {
		alert("FizzBuzz can only accept whole numbers. Please reload the page and enter an integer.");
	}
}


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