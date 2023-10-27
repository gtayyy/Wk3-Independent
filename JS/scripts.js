// Business logic

//Test1: It should return an array of numbers from 0 to the user's given number
function zeroToNumArray(inputNumber) {
  const inputToArray = [];
  for (let i = 0; i <= inputNumber; i++) {
    const arrayToString = i.toString();
    if (arrayToString.includes("1")) {
      inputToArray.push("Beep!");
    } else {
      inputToArray.push(i);
    }
  }
  return inputToArray;
}

//Test2: It should replace numbers that contain a "1" with "Beep!"

//Test3: It should replace numbers that contain a "2" with "Boop!"

//Test4: It should replace numbers that contain a "3" with "Won't you be my neighbor?"

// UI logic
function formHandler(event) {
	event.preventDefault();
	document.querySelector("h2#result").innerText = ""
	const result = document.querySelector("h2#result")
	const userInput = document.querySelector("input#number").value;
	document.querySelector.append(mrRogers(userInput));
}

window.addEventListener("load", function () {
	document.querySelector("form#rogersNumber").addEventListener("submit", formHandler);
});