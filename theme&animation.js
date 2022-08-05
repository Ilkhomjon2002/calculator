let displayTheme = document.querySelector(".calculator--output");
let InputTheme = document.querySelector(".calculator--input");
let btnNumTheme = document.querySelectorAll(".btn-num-opt");
let btnOperators = document.querySelectorAll(".text-btn");
let body = document.body;
let equalsTheme = document.querySelector(".equals");
let fonts = document.querySelectorAll(".fontJs");
let redDot = document.querySelector(".red-dot");
let redDotHolder = redDot.parentElement;

let themeColor = [
	{
		bodyColor: "#3A4663",
		outputColor: "#181F33",
		btnOperator: "#647198",
		equals: "#D03F2F",
		buttons: "#EAE3DC",
		buttonsFontColor: "#434A59",
		calInputContainer: "#242D44",
		fontColor: "#FFFFFF",
		red_dot: "#D03F2F",
		redDot_holder: "#242D44",
	},
	{
		bodyColor: "#E6E6E6",
		outputColor: "#EEEEEE",
		btnOperator: "#378187",
		textBtnFontColor: "#ffffff",
		equals: "#C85402",
		buttons: "#E5E4E1",
		calInputContainer: "#D2CDCD",
		fontColor: "#36362C",
		red_dot: "#C85402",
		redDot_holder: "#D2CDCD",
	},
	{
		fontColor: "#FFE53D",
		bodyColor: "#17062A",
		outputColor: "#1E0936",
		btnOperator: "#56077C",
		equals: "#00DED0",
		buttons: "#331C4D",
		calInputContainer: "#1E0936",
		red_dot: "#00DED0",
		textBtnFontColor: "#ffffff",
		redDot_holder: "#1E0936",
	},
];
let boxShadows = [
	{
		numericalButton: "#B3A497",
		textButton: "#414E73",
		equalsButton: "#93261A",
	},
	{
		numericalButton: "#A79E91",
		textButton: "#1B6066",
		equalsButton: "#873901",
	},
	{
		numericalButton: "#881C9E",
		textButton: "#BE15F4",
		equalsButton: "#6CF9F1",
	},
];
let hoverEffect = [
	{
		numericalButton: "#FFFFFE",
		textButton: "#A2B2E1",
		equals_button_and_redDot: "#F96B5B",
	},
	{
		numericalButton: "#FFFFFF",
		textButton: "#62B5BC",
		equals_button_and_redDot: "#FF8A38",
	},
	{
		numericalButton: "#6C34AC",
		textButton: "#8631AF",
		equals_button_and_redDot: "#93FFF8",
	},
];
let i = 0;
redDot.addEventListener("click", () => {
	if (i === 0) {
		redDot.parentElement.style.display = "flex";
		redDot.parentElement.style.justifyContent = "center";
		i++;
		changeTheme(0);
	} else if (i === 1) {
		redDot.parentElement.style.display = "flex";
		redDot.parentElement.style.justifyContent = "flex-end";
		i++;
		changeTheme(1);
	} else if (i === 2) {
		redDot.parentElement.style.justifyContent = "flex-start";
		i = 0;
		changeTheme(2);
	}
});

function changeTheme() {
	//----------BODY

	body.style.backgroundColor = themeColor[i].bodyColor;

	//-------------output and input
	displayTheme.style.backgroundColor = themeColor[i].outputColor;
	InputTheme.style.backgroundColor = themeColor[i].calInputContainer;

	//--------------Font color
	fonts.forEach((font) => {
		font.style.color = themeColor[i].fontColor;
	});

	//-----------buttons
	btnNumTheme.forEach((btn) => {
		btn.style.backgroundColor = themeColor[i].buttons;
		btn.style.boxShadow = `inset 0px -4px 0px 0px ${boxShadows[i].numericalButton}`;
		btn.style.color = themeColor[i].buttonsFontColor;
	});

	btnOperators.forEach((btn) => {
		btn.style.backgroundColor = themeColor[i].btnOperator;
		btn.style.boxShadow = `inset 0px -4px 0px 0px ${boxShadows[i].textButton}`;

		btn.style.color = themeColor[i].textBtnFontColor;
	});

	equalsTheme.style.backgroundColor = themeColor[i].equals;
	equalsTheme.style.boxShadow = `inset 0px -4px 0px 0px ${boxShadows[i].equalsButton}`;

	//----------Red Dot
	redDot.style.backgroundColor = themeColor[i].red_dot;
	redDot.addEventListener("mouseover", hoverAction.bind(null, redDot, i));
	redDot.addEventListener("mouseleave", changeTheme);
	redDotHolder.style.backgroundColor = themeColor[i].redDot_holder;
}

function hoverAction(button, index) {
	let buttonType;

	if (button.classList.contains("btn-num-opt")) {
		buttonType = hoverEffect[index].numericalButton;
	} else if (
		button.classList.contains("text-btn") &&
		!button.classList.contains("equals")
	) {
		buttonType = hoverEffect[index].textButton;
	} else if (
		button.classList.contains("equals") ||
		button.classList.contains("red-dot")
	) {
		buttonType = hoverEffect[index].equals_button_and_redDot;
	}

	button.style.backgroundColor = buttonType;
}
