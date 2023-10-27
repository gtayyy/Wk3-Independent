// Business logic

//Test1: It should return an array of numbers from 0 to the user's given number | PASS
//Test2: It should replace numbers that contain a "1" with "Beep!" | PASS
//Test3: It should replace numbers that contain a "2" with "Boop!" | PASS
//Test4: It should replace numbers that contain a "3" with "Won't you be my neighbor?" | PASS 
function zeroToNumArray(inputNumber) {
  const inputToArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    const arrayToString = i.toString();
		if (arrayToString.includes("3")) {
			inputToArray.push("Won't you be my neighbor?");
		}	else if (arrayToString.includes("2")) {
      inputToArray.push("Boop!");
		}	else if (arrayToString.includes("1")) {
      inputToArray.push("Beep!");
    } else {
      inputToArray.push(i);
    }
  }
  return inputToArray;
}

//Test4: It should replace numbers that contain a "3" with "Won't you be my neighbor?"

// UI logic
document.addEventListener("DOMContentLoaded", function () {
	const form = document.querySelector(".rogersNumber");
	const resultElement = document.getElementById("result");
	
	form.addEventListener("submit", function (event) {
		event.preventDefault();
		const inputNumber = parseInt(document.getElementById("number").value, 10);
		const results = zeroToNumArray(inputNumber);
		resultElement.textContent = "Rest in peace.... knowing that no crimes ever happen in Mr. Rogers neighborhood!: " + results.join(", ");
		document.getElementById("results").classList.remove("hidden");
	});
});	