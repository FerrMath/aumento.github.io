const BAIT = document.getElementById("bait");
const MAIN = document.querySelector(".hero");
let first = true;

BAIT.addEventListener("mouseover", trolei)

BAIT.addEventListener("click", trolei)

function getRand(max) {
	return Math.floor(Math.random() * max) + 1;
}

function addNewClaro() {
	let div = document.createElement("a");
	div.href = "./nobre.html"
	div.classList.add("bait");
	div.classList.add("green");
	div.classList.add("option");

	div.innerText = "Claro, meu nobre!"

	let left = getRand(Math.floor(window.innerWidth - 350))
	let top = getRand(Math.floor(window.innerHeight - 100));

	div.style.top = top + "px";
	div.style.left = left + "px";

	MAIN.appendChild(div);
}

function trolei() {
	if (first) {
		first = false;
		BAIT.classList.add("bait");
	}

	let left = getRand(Math.floor(window.innerWidth - 350))
	let top = getRand(Math.floor(window.innerHeight - 100));

	BAIT.style.top = top + "px";
	BAIT.style.left = left + "px";

	addNewClaro()
}