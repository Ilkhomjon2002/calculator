const display = document.querySelector(".display");
const btnNum = document.querySelectorAll(".btn-num");
const btnOpt = document.querySelectorAll(".btn-opt");
const del = document.querySelector(".del");
const reset = document.querySelector(".reset");
const equals = document.querySelector(".equals");
let currentNum = "";
let prevNum = "";
let operator = "";

// Adding event listeners
reset.addEventListener("click", () => {
	resetAll();
});

btnNum.forEach((btn) => {
	btn.addEventListener("click", appendNum.bind(null, btn));
});

btnOpt.forEach((btn) => {
	btn.addEventListener("click", chooseOperator.bind(null, btn));
});
del.addEventListener("click", deleteDigit);
equals.addEventListener("click", compute);

//functions

function compute() {
	let result;

	if (isNaN(prevNum) || isNaN(currentNum)) return;
	if (operator) {
		result = eval(`${prevNum}${operator}${currentNum}`);
	}

	currentNum = result;
	updateDisplay();
}

function appendNum(num) {
	if (num.value === "." && currentNum.includes(".")) return;
	if (currentNum.length === 0 && num.value.startsWith(".")) {
		currentNum = "0" + num.value;
		updateDisplay();
		return;
	}
	currentNum = currentNum + num.value;

	updateDisplay();
}

function updateDisplay() {
	display.textContent = currentNum;
}
function resetAll() {
	currentNum = "";
	prevNum = "";
	operator = "";

	updateDisplay();
	display.textContent = "0";
}
function chooseOperator(btn) {
	prevNum = currentNum;
	currentNum = "";
	operator = btn.value;

	updateDisplay();
}
function deleteDigit() {
	currentNum = currentNum.toString().slice(0, -1);

	updateDisplay();
}
