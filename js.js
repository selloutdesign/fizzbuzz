$(document).ready(function() {
	var count100 = 0;
	for (var i = 1; i <= 100; i++) {
		if(i % 3 == 0){
			if(i % 5 == 0){
				$(".fb").append("<li>fizzbuzz</li>");
				("fizzbuzz");
			}
			else{
				$(".fb").append("<li>fizz</li>");
				console.log("fizz");
			}
		}
		else if(i % 5 ==0){
			$(".fb").append("<li>buzz</li>");
			console.log("buzz");
		}
		else{
			$(".fb").append("<li>" + i + "</li>");
		console.log(i);
		}
	}


});