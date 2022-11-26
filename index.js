const greetings = [
	"Hello everyone!",
	"¡Hola a todos!",
	"Bonjour tout le monde!",
	"Hallo alle zusammen!",
	"Buongiorno a tutti!",
	"Olá a todos!",
];

const container = document.getElementById("container");

function sleep(milliseconds) {
	const date = Date.now();
	let currentDate = null;
	do {
		currentDate = Date.now();
	} while (currentDate - date < milliseconds);
}

function addElementText(text, className, parent) {
	const element = document.createElement("h1");
	console.log(text.length);
	element.id = "typed";
	element.innerText = text;
	element.style.animation = `typing 3.5s steps(${text.length}, end), blinking .75s step-end infinite`;
	element.className = className;
	parent.appendChild(element);
}

function removeElementText(id, parent) {
	const element = document.getElementById(id);
	parent.removeChild(element);
}

const init = (parent, arrayElements, className) => {
	addElementText(arrayElements[0], className, parent);
	let index = 1;
	setInterval(() => {
		addElementText(arrayElements[index], className, parent);
		sleep(1);
		removeElementText(className, parent);
		index++;
		if (index === arrayElements.length) {
			index = 0;
		}
	}, 4000);
};

init(container, greetings, "typed");
