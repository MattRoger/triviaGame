var score = 0;
var answer;
var x = 0;
var round = 0
var count=10;
var counter;
var rank;
var swQuestion = [{
    // 1
    question: "In A New Hope, who did Han solo owe money to?",
    choices: ["Jar Jar Binks", "Sam Wise", "Darth Vader", "Jabba the Hut"],
    images: ["../images/Rajah.gif"],
    validAnswer: "Jabba the Hut"
}, {
    // 2
    question: "What Planet were the Clone Troopers created on?",
    choices: ["Camino", "Hoth", "Yolanda", "Tatooine"],
    validAnswer: "Camino"

},
     {
        // 3
        question: "In The Empire Strikes Back, what is the name of the creature who attacks luke?",
        choices: ["Tauntaun", "Yeti", "Wampa", "Wookie"],
        validAnswer: "Wampa"

    }, {
        // 4
        question:"In The Force Awakens, Where does Kylo Ren bring Rey to",
        choices: ["The Death Star","Star Killer Base", "The Dreadnought", "Fort Doom"],
        validAnswer:"Star Killer Base"

    }, {
        // 5
        question: "In how many languages is C-3P0 fluent?",
        choices: ["990", "Over 6 Billion", "Over 6 Million", "He only speaks in beeps and boops"],
        validAnswer: "Over 6 Million"

    }, {
        // 6
        question: "In The Last Jedi, what planet does the Resistance make their last stand?",
        choices: ["Crait", "Canto Bight", "Ahch-To"," Hoth"],
        validAnswer: "Crait"

    }, {
        // 7
        question: "Who is Darth Tyranus als known as?",
        choices: ["Kylo Ren", "Mace Windu", "Count Dooku", "Emperor Palpatine"],
        validAnswer: "Count Dooku"

    }, {
        // 8
        question: "Who did Obi-Wan Kenobi defeat in the Battle of Naboo?",
        choices: ["Darth Mall", "Darth Vader", "Darth Sideous", "Darth Maul"],
        validAnswer: "Darth Maul"

    },{
        //9 
        question:"What is Anakin Skywalker’s mother’s name?",
        choices:["Padme", "Shmi", "Shuri", "Leia"],
        validAnswer:"Shmi"
    },{
        // 10
        question:" What is the name of the order Darth Sidious gives the clone troopers, which means they will kill all Jedi?",
        choices:["Order 66", "Order 69", "Order 59", "Order 99"],
        validAnswer:"Order 66"
    }
]

$("#start_button").on("click", function () {
    console.log("clicked")
    askQuestion()
    $("#start_div").empty()
})

function askQuestion() {
    var q = swQuestion[x].question;
    $("#question_div").append(q);
    $("#timer").append(count)
    renderChoices();
    timer();

}

answered();
function renderChoices() {
    $("#choices_div").empty();
    for (var i = 0; i < swQuestion[x].choices.length; i++) {
        const button = $("<button>");
        button.text(swQuestion[x].choices[i]);
        button.attr("data-answer", swQuestion[x].choices[i])
        $("#choices_div").append(button);
    }
    console.log("choices asked");
}
function answered() {
    console.log("answered start")
    $("#choices_div").on("click", "button", function () {
        clearInterval(counter)
        var answerGuessed = $(this).attr("data-answer")
        answer = swQuestion[x].validAnswer;
        if (answerGuessed === answer) {
            console.log("Correct")
            correct()
        } else {
            console.log("Incorrect")
            incorrect()
        }
    })
}


function correct() {
    dump()
    score += 1;
    console.log("current score: " + score)
    var textLine = $("<p>");
    textLine.text("You are Correct!");
    var nextRoundBtn = $("<button>").attr("id", "next")
    nextRoundBtn.text("Next Round")
    $("#correct").append(textLine, nextRoundBtn);
    nextRound();


}

function incorrect() {
    dump();
    var textLine = $("<p>");
    textLine.text("You are Incorrect! The correct answer is " + answer);
    var nextRoundBtn = $("<button>").attr("id", "next")
    nextRoundBtn.text("Next Round")
    $("#incorrect").append(textLine, nextRoundBtn);
    console.log(`current score:  + ${score}`)
    nextRound();
}

function nextRound() {
    $("#next").on("click", function () {
        dump();
        x += 1;
        round += 1;
        console.log(round)
        endGame();

    })
}
function dump() {
    $("#incorrect").empty();
    $("#correct").empty()
    $("#question_div").empty();
    $("#choices_div").empty();
    $("#endGame").empty();
    $("#timer").empty();
}
function endGame() {
    const gameLength = swQuestion.length;
    if (round === gameLength) {
        dump();
        ranking()
        console.log("game has ended")
        console.log()
        var endMessage = $("<p>");
        endMessage.text(`You got ${score} out of ${gameLength}
       \n Your rank is ${rank}`);
        
        var playAgainBtn = $("<button>").attr("id", "playAgain");
        playAgainBtn.text("Play again?");
        var exitBtn = $("<button>").attr("id", "exit");
        exitBtn.text("Exit")
        $("#endGame").append(endMessage, playAgainBtn, exitBtn);
        playAgain();
    } else {
        nextRound()
        askQuestion()
    }
}

function playAgain() {
    $("#playAgain").on("click", function () {
        console.log("clicked")
        dump();
        round = 0;
        x = 0;
        score = 0;
        askQuestion()
    })
}
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

function outOfTime(){
    dump();
    var textLine = $("<p>");
    answer = swQuestion[x].validAnswer;
    textLine.text("You are Out Of Time! The correct answer is " + answer);
    var nextRoundBtn = $("<button>").attr("id", "next")
    nextRoundBtn.text("Next Round")
    $("#incorrect").append(textLine, nextRoundBtn);
    console.log(`current score:  + ${score}s`)
    nextRound();
    
}
function ranking(){
    console.log(rank)
    const ranks=["Jar Jar Binks","Service Droid","Ewok", "Padiwan","Smuggler","Resistance Fighter","Bothan Spy","Fleet Commander","Resistance Leader","Jedi Knight", "Jedi Master"]
    const s=score;
    rank=ranks[s]
    console.log(rank+ "x")
   
}