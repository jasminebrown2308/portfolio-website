$(function() {
	startTypingAnimation()
});

const headlines = [
	"Software Engineer",
	"Ex-Amazon SDE Intern",
	"Computer Science Student",
	"Student at Warwick Uni",
	"Software Engineer"
]

const typingSpeed = 100;
const backspaceSpeed = 60;
const waitDuration = 1000;

async function startTypingAnimation() {

	$("#subtitle").text(headlines[0]);

	for (let s = 0; s < headlines.length - 1; s++) {
		await wait();
		await backspace(headlines[s], headlines[s].length);
		await write(headlines[s+1], 0);
	}

	$("#subtitle").addClass("no-caret");
}

function backspace(str, i) {
	return new Promise((resolve) => {
		if (i >= 0) {
			$("#subtitle").text(str.substring(0, i));

			setTimeout(() => {
				resolve(backspace(str, i-1));
			}, backspaceSpeed);
		} else {
			resolve();
		}
	});
}

function write(str, i) {
	return new Promise((resolve) => {
		if (i <= str.length) {
			$("#subtitle").text(str.substring(0, i));

			setTimeout(() => {
				resolve(write(str, i+1));
			}, typingSpeed);
		} else {
			resolve();
		}
	});
}

function wait() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, waitDuration);
	});
}