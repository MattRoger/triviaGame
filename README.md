# Star Wars Trivia
A star wars trivia game

## Motivation
To create a multilple choice timed trivia game with JavaScript and jQuery.

## Build Status
Compete and ready to crush the rebellion with one swift stroke!

## Tech/framework used
HTML
CSS
JavaScript
jQuery

## How The Game Logic Works

#### Game Variables 
```javascript
let score = 0;
let answer;
// x is in place of i for array placement
let x = 0;
let round = 0
let count = 10;
let counter;
let rank;
```
#### Question and Answer Array 
```javascript
const swQuestion = [{
    // 1
    question: "In A New Hope, who did Han solo owe money to?",
    choices: ["Jar Jar Binks", "Sam Wise", "Darth Vader", "Jabba the Hutt"],
    images: "assets/images/hansolo01.jpg",
    answerImages: "assets/images/jaba.jpg",
    validAnswer: "Jabba the Hutt"
},
```
#### Functions
This starts the game by calling the askQuestion() and clearing out the start div.

```javascript
$("#start_button").on("click", function () {
    console.log("clicked")
    askQuestion()
    $("#start_div").empty()
})
```
The askQuestion function builds up each question by using the swQuestion array. x = the array element

```javascript
function askQuestion() {
    const image = $("<img>")
    image.attr("src", swQuestion[x].images)
    $("#img").append(image)
    let q = swQuestion[x].question;
    $("#question_div").append(q);
    $("#timer").append(count)
    renderChoices();
    timer();
}
```
renderChoices creates the users possible answer choices.
```javascript
 $("#choices_div").empty();
    for (var i = 0; i < swQuestion[x].choices.length; i++) {
        // [x] let x=0 top page each round x++ until the end of the game.
        const button = $("<button>");
        button.text(swQuestion[x].choices[i]);
        button.attr("data-answer", swQuestion[x].choices[i])
        $("#choices_div").append(button);
    }
    console.log("choices asked");
}
```
The timer() counds down from 10 seconds. If the user runs out of time, the outOfTime() is called. Each round the timer is reset with the dump()
```javascript
function timer() {
    count = 10;
    counter = setInterval(countDown, 1000);
    function countDown() {
        count = count - 1;
        $("#timer").empty().append(count)
        if (count <= 0) {
            console.log("times up")
            clearInterval(counter)
            outOfTime();
            return
        }
    }
}
```

The outOfTime function() occurs when the user runs out of time. It also triggers the dump(), answerImg(), and the nextRound()
```javascript
function outOfTime() {
    dump();
    $('audio#incorrectsound')[0].play()
    answerImg()
    const textLine = $("<p>");
    answer = swQuestion[x].validAnswer;
    textLine.text("You are Out Of Time! The correct answer is " + answer);
    const nextRoundBtn = $("<button>").attr("id", "next")
    nextRoundBtn.text("Next Round")
    $("#question_div").append(textLine, nextRoundBtn);
    console.log(`current score:  + ${score}s`)
    nextRound();
}
```
If the user answers incorrectly the dump(), answerImg(), and nextRound() are called. 
```javascript
function incorrect() {
    dump();
    answerImg()
    $('audio#incorrectsound')[0].play()
    const textLine = $("<p>");
    textLine.text("You are Incorrect! The correct answer is " + answer);
    const nextRoundBtn = $("<button>").attr("id", "next")
    nextRoundBtn.text("Next Round")
    $("#question_div"
    ).append(textLine, nextRoundBtn);
    console.log(`current score:  + ${score}`)
    nextRound();
}

```

If the user answers correctly the dump(), answerImg(), and nextRound() are called. 
The users score increase by one.
```javascript
function correct() {
    dump()
    answerImg()
    $('audio#correctsound')[0].play()
    score += 1;
    console.log("current score: " + score)
    const textLine = $("<p>");
    textLine.text("You are Correct!");
    const nextRoundBtn = $("<button>").attr("id", "next")
    nextRoundBtn.text("Next Round")
    $("#question_div").append(textLine, nextRoundBtn);
    nextRound();
}

```
The dump() clears out the question, choices, img, and time divs. allowing for the next round to load.
```javascript
function dump() {
    $("#question_div").empty();
    $("#choices_div").empty();
    $("#img").empty();
    $("#timer").empty();
}
```



## Features

* Timer Function
* Sound
* Multiple Choice questions with unique images

## Installation
* :trident: Fork it
* :sheep: Clone it


## API Reference

## Tests

## How to use?


## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/


## License
