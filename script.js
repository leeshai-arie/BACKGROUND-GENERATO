let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");


c1.innerHTML = "Color 1: #8F3FDE";
c2.innerHTML = "Color 2: #58FD5B";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	function codeDisplay() {
		c1.innerHTML = "Color 1: " + color1.value;
		c2.innerHTML = "Color 2: " + color2.value;
	};
	codeDisplay();
};


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
