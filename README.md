# Star Wars Trivia
A timed Star Wars Trivia Game! Players are asked 10 multiple choice questions and are given 10 seconds to answer. If the user answers correcty, they are awarded a point and the correct sound clip plays, otherwise the incorrect sound clip plays. At the end of the game, the user is awarded a rank from Jar Jar Binks if the to poorley, to Jedi Master if they get a perfect score.

[Test Your Knowledge and Play the Game](https://mattroger.github.io/triviaGame/)

## How to use?
Start the game and answer the questions with in 10 seconds. Turn on sound if you want to hear the sound clips.

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
#### Question and Answer Array 
This is a sample of what the array for each question looks like

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

### Start Of the Game :game_die:

The start screen on larger displays.

![Start](https://github.com/MattRoger/screenshots/blob/master/webProjectScreenShots/starWarsTrivia/home.png?raw=true)

Mobile users get a different background.

![StartM](https://github.com/MattRoger/screenshots/blob/master/webProjectScreenShots/starWarsTrivia/homeMobile.png?raw=true)

This starts the game by calling the askQuestion() and clearing out the start div. :crossed_flags:

```javascript
$("#start_button").on("click", function () {
    console.log("clicked")
    askQuestion()
    $("#start_div").empty()
})
```

### Asking The Questions
The questions screen is created with the askQuestion, renderChoices, and timer functions.

![questions](https://github.com/MattRoger/screenshots/blob/master/webProjectScreenShots/starWarsTrivia/question.png?raw=true)

:grey_question:
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
:raising_hand_man:
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
:hourglass_flowing_sand:
The timer function counts down from 10 seconds. If the user runs out of time, the outOfTime function is called. Each round the timer is reset with the dump function.
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
### Wrong Answer :x: :man_facepalming:
If the user answers incorrectly or runs out of time the dump, answerImg, and nextRound functions are called.
The incorrect sound clip also plays.

![wrong](https://github.com/MattRoger/screenshots/blob/master/webProjectScreenShots/starWarsTrivia/wrong.png?raw=true)

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

### Correct Answer :heavy_check_mark: :trophy:
If the user answers correctly the dump, answerImg, and nextRound functions are called.
The users score increase by one.
The correct sound clip plays

![correct](https://github.com/MattRoger/screenshots/blob/master/webProjectScreenShots/starWarsTrivia/correct.png?raw=true)


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

### End of the Game :checkered_flag:	
At the end of the game, when all of the questions have been asked the game calls the endGame function. This function also ranks the player with the rank function and ask the  player if they would like to play again with the playAgain(). If the button is clicked, the game restarts.

### Ranking :1st_place_medal: :2nd_place_medal:	:3rd_place_medal:	

The ranking function assigns a user rank based on their scores. The Rank of Jedi Master is awarded to a user with a perfect score, and Jar Jar Binks if they fail to answer a single question correctly.

![rank](https://github.com/MattRoger/screenshots/blob/master/webProjectScreenShots/starWarsTrivia/rank.png?raw=true)

```javascript
function ranking() {
    console.log(rank)
    const ranks = ["Jar Jar Binks", "Service Droid", "Ewok", "Padawan", "Smuggler", "Resistance Fighter", "Spy", "Fleet Commander", "Resistance Leader", "Jedi Knight", "Jedi Master"]
    const rankImg = ["assets/images/jarjar.jpg", "assets/images/servicedriod.jpg", "assets/images/ewok.jpeg", "assets/images/padawan.jpg", "assets/images/smuggler.jpg", "assets/images/resistancefighter.jpg", "assets/images/jyn.jpg", "assets/images/admiralackbar.jpeg", "assets/images/resistanceleader.png", "assets/images/kit.jpeg", "assets/images/jedimaster.png"]
    const s = score;
    rank = ranks[s]
    const image = $("<img>")
    image.attr("src", rankImg[s])
    $("#img").append(image)
    console.log(rank + "x")
}
```
## Features

* Timer Function
* Sound
* Multiple Choice questions with unique images

## Installation
* :trident: Fork it
* :sheep: Clone it

## Credits / Contact information
* @MattRoger 
  * :man_office_worker: https://mattroger.github.io/
  * :e-mail: mattroger.webdev@gmail.com
  * :man_office_worker: www.linkedin.com/in/matt-roger/


## License
