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
	btn.addEventListener("click", appendNum);
});

btnOpt.forEach((btn) => {
	btn.addEventListener("click", chooseOperator);
});
function chooseOperator() {
	if (!currentNum) return;
	if (currentNum && !prevNum) {
		prevNum = currentNum;
		currentNum = "";
		operator = this.value;
		updateDisplay();
	} else if (currentNum && prevNum && !operator) {
		prevNum = currentNum;
		currentNum = "";
		operator = this.value;
		updateDisplay();
	} else {
		compute();
		prevNum = "";
		operator = this.value;
	}
}
del.addEventListener("click", deleteDigit);
equals.addEventListener("click", compute);

//functions

function compute() {
	if (prevNum && currentNum && operator) {
		currentNum = eval(`${prevNum}${operator}${currentNum}`);
	}

	updateDisplay();
}

function appendNum() {
	if (this.value === "." && currentNum.includes(".")) return;
	if (currentNum && this.value.startsWith(".")) {
		currentNum = "0" + this.value;
		updateDisplay();
		return;
	}
	if (!operator) {
		currentNum = currentNum + this.value;
		updateDisplay();
	} else if (operator && currentNum && !prevNum) {
		prevNum = currentNum;
		currentNum = this.value;
		updateDisplay();
	} else {
		currentNum = currentNum + this.value;
		updateDisplay();
	}
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

function deleteDigit() {
	currentNum = currentNum.toString().slice(0, -1);

	updateDisplay();
}
