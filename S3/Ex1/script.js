window.onload = function() {
    console.log("script loaded");

    //get user input
    document.getElementById("btn").addEventListener("click", function(){
    let userNumber =  document.getElementById("inputN").value;

    event.preventDefault();
    console.log(userNumber);

    });

    let promise = new Promise(function(resolve, reject) {
        setTimeout(() => {
			const randomNumber = Math.floor(Math.random() * 20) + 1;
			resolve(randomNumber)
		}, 10)
    });

    promise.then(
        
    );


    /**
    console.log("The mystery number is lower. Guess again!");
    console.log("The mystery number is higher. Guess again!");
    console.log("You have guessed the mystery number!");
    console.log("That is not a valid number (Error)");
    */
};