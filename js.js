// confirm("Press confirm to start the Quiz");
let timeCounter = 0;
let secondsLeft = 60;
var timer = $("#timeLeft");
let score = 0;

$(".scoreContainer").append(score);
timer.text(secondsLeft - timeCounter);
function timeIt() {
	timeCounter++;
	timer.html(convertSeconds(secondsLeft - timeCounter));
	if (timeCounter >= secondsLeft) {
		clearInterval(countDown);
		// display highScore;
	}
}
var countDown = setInterval(timeIt, 1000);

function convertSeconds(s) {
	let min = Math.floor(s / 60);
	let sec = s % 60;
	return sec;
}
let questions = [
	{
		title: "What are the symbols for id and class?",
		choices: [
			"#for class . for id",
			"$for class, * for id",
			"!for id, : for class",
			".for class, # for id"
		],
		answer: ".for class, # for id"
	},
	{
		title: "What is a very useful tool for debugging in Javscript?",
		choices: ["console.log()", "checkout()", "pressing f5", "cout()="],
		answer: "console.log()"
	},
	{
		title:
			"What code must be included in order for the number to be rounded up to the number user wants?",
		choices: ["max_value", "toFixed(#)", "toString()", "valueOf()"],
		answer: "toFixed(#)"
	},
	{
		title: "How do you call upon an ID in Jquery?",
		choices: ["function.addeventlistener", "$('#idname')", "#idname"],
		answer: "$('#idname')"
	}
];
let currentQuestion = 0;
function nextQuestion() {
	var q = questions[currentQuestion];
	$(".questionContainer").append("<h2>" + q.title + "</h2>");
	for (i = 0; i < q.choices.length; i++) {
		$(".questionContainer").append("<button>" + q.choices[i] + "</button>");
	}
	$(".questionContainer").on("click", function(e) {
		let button = e.target;
		if (button.innerText === q.answer) {
			score += 20;
			console.log("answer is right");
		}
		if (button.innerText != q.answer) {
			timeCounter += 5;
		}
		currentQuestion++;
		nextQuestion();
		if (currentQuestion >= questions.length) {
			//display highScore;
		}
		console.log(button);
	});
}
function highScore() {
	let currentScores = localStorage.getItem("scores");
	localStorage.setItem("scores", "name");
	var array = [{ name: "", score: "" }];
	localStorage.setItem("array", JSON.stringify(array));
	array = JSON.parse(localStorage.getItem("array"));
}
nextQuestion();
