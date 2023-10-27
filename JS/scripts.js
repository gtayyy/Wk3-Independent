// Business logic

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