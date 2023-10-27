// Business logic



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