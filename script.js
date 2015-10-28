
var quiz = [
  {question:"Who is the president of U.S.?", answer:["obama","Obama","barack",
  "Barack","barack obama","Barack Obama","barack Obama","Barack obama"]},
  {question: "How many states are there in the U.S.?", answer:["50","fifty","Fifty","FIFTY"]},
  {question: "Who is the coolest coder?", answer:["adam","Adam","Andy","andy","John","john",
  "nick","Nick","adrian","Adrian","matt","Matt","jesse","Jesse"]}
];

var currentQuestion = 0;
var questions = 0;
var count = 0;

$(".question-text").hide();
$(".score").hide();
$(".submitAnswer").off("click");

$(".submitName").on("click", function (){
  event.preventDefault();
  $(".displayName").text($(".playerName").val()+"'s");
  $(".playerName").val("");
  $(".score").show();
  $(".question-text").show();
  $(".submitAnswer").on ("click", function(){
    questions++;

    $(".result-box").text(+questions +" "+"of 5 Qs" ).css("color","green");
    var answer = ($(".typeAnswer").val());
    event.preventDefault();
    for (i=0; i<=quiz[currentQuestion].answer.length;i++) {
      if (answer === quiz[currentQuestion].answer[i]){
        count++;
        $(".score").html("correct answers:"+" "+count +" "+ "out 5");
      }
    }
    currentQuestion++;
    $(".question-text").html(quiz[currentQuestion].question);
    $(".typeAnswer").val("");

  });

});

$(".typeAnswer").val("");
$(".question-text").html(quiz[currentQuestion].question);
$(".resetBoard").on ("click", function () {
  $(".question-text").html(" ");
});


//After name submittion, whether in the middle of the game, it should reset the entire board.
//The trick is to keep the name of the new player.
//How do I hide the answer input and the auto response of Correct and Wrong after a few secs of
//submitting the answer?
//Set up a function to display winner or loser based on how many questions are answered correctly
//at the end. And by clicking the reset button or putting in name again should restart the game.
