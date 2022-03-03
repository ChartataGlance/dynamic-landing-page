/** @format */

const time = document.getElementById("time");
const greeting = document.getElementById("greeting");
const name = document.getElementById("name");
const focus = document.getElementById("focus");

//time
function showTime() {
	(let = today = new Date()),
		(hour = today.getHours()),
		(min = today.getMinutes()),
		(sec = today.getSeconds());
	

	const amPm = hour >= 12 ? "PM " : "AM";

	hour = hour % 12 || 12;

	time.innerHTML = ` ${hour}<span>:</span>${addZero(
		min,
	)}<span>:</span>${addZero(sec)}`;
	setTimeout(showTime, 1000);
}

function addZero(n) {
	return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBg() {
	let today = new Date();
	let hour = today.getHours();

	if (hour < 12) {
		document.body.style.backgroundColor = "blue";
		greeting.textContent = "gmorning";
	} else if (hour < 18) {
		document.body.style.backgroundColor = "red";
		greeting.textContent = "afternoon";
	} else {
		document.body.style.backgroundColor = "green";
		greeting.textContent = "Good Night";
	}
}

function getName() {
	if (localStorage.getItem("name") === null) {
		name.textContent = "[Enter Name]";
	} else {
		name.textContent = localStorage.getItem("name");
	}
}

function getFocus() {
	if (localStorage.getItem("focus") === null) {
		focus.textContent = "[focus ?]";
	} else {
		focus.textContent = localStorage.getItem("focus");
	}
}

showTime();
setBg();
getName();
getFocus();
