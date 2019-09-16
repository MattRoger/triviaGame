var possibleAnswers = [];
var questions="";
var correctAnswer=false;
var score=0;
var correctGuess=0;
var wrongGuess=0;




$(document).ready(function () {
    $("#score").text("Score:" + score);
    $("#correct-guess").text("Correct Answers: "+ correctGuess);
    $("#wrong-guess").text("Wrong Answers: " +wrongGuess )

    $("#start").html("<button> start");

    $("#start").on("click", function (){


        
        
        var question= "Who is Luke's droid?";
        var possibleAnswers = [
            "c3po", "r2d2", "bb-8", "t1b9"
    ]
    var answer= possibleAnswers[1];
    
    for(var i=0;i<possibleAnswers.length;i++){
        var button=$(`<button>`);
        button.text(possibleAnswers[i]);
        button.attr("data-answerchoice", i);
        $("#possible-answers").append(button);
    }
    $("#possible-answers").on("click" ,"button", function(){
        var userPick = $(this).data("answerchoice")
        console.log(userPick)
        if(userPick==1){
            correctAnswer=true;
            score + 10;
            correctGuess++;
            console.log("win")
        }else
        { wrongGuess++;
            console.log("loser")
        }
        
        
    })
    
    
    printQ(question);

})

})









function printQ(x) {
    $("#question").text(x);
}


