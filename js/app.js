$(document).ready(function(){

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

var maxValue = prompt('enter a number ')


});