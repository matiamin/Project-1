
var quiz = [
  {question:"Who is the president of U.S.?", answer:["obama","Obama","barack",
  "Barack","barack obama","Barack Obama","barack Obama","Barack obama"]},
  {question: "How many states are there in the U.S.?", answer:["50","fifty","Fifty","FIFTY"]},
  {question: "Who is the coolest coder?", answer:["adam","Adam","Andy","andy","John","john",
  "nick","Nick","adrian","Adrian","matt","Matt","jesse","Jesse"]}
];

var currentQuestion = 0;
var questionCount = 0;
var answerCount = 0;

$(".question-text").hide();
$(".score").hide();
$(".submitAnswer").off("click");

$(".submitName").on("click", function (){
  event.preventDefault();
  $(".displayName").text($(".playerName").val()+"'s");
  $(".playerName").val("");
  $(".question-text").show("");
  $(".question-text").html(quiz[0].question);
  $(".submitAnswer").on ("click", function(){

    $(".score").show();
    questionCount++;
    $(".result-box").text(+questionCount +" "+"of 5 Qs" ).css("color","green");
    /*why isn't is displaying the message in the text body? Instead, it disappears.*/
    if (questionCount===quiz[currentQuestion].question) {
      event.preventDefault();
      $(".question-text").text("Reset to play again");
    }
    var answer = ($(".typeAnswer").val());
    event.preventDefault();
    for (i=0; i<=quiz[currentQuestion].answer.length;i++) {
      if (answer === quiz[currentQuestion].answer[i]){
        answerCount++;
        $(".score").html("correct answers:"+" "+answerCount +" "+ "out 5");
      }
    }

    currentQuestion++;
    $(".question-text").html(quiz[currentQuestion].question);
    $(".typeAnswer").val("");

  });

});

$(".typeAnswer").val("");
$(".resetBoard").on ("click", function () {
  $(".question-text").html(" ");

});

/*After name submittion, even if in the middle of a game, it should reset the entire board
with a starting set of score and first question and show the new player's name.*/
/*Showing a "Play again" message after a player has answered all questions.*/
/*clicking on the startbutton without any value in the input should show a reset blank board.*/
