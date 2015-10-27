
var quiz = [
  {question:"Who is the president of U.S.?", answer:["obama","Obama","barack",
  "Barack","barack obama","Barack Obama","barack Obama","Barack obama"]},

  {question: "How many states are there in the U.S.?", answer:["50","fifty","Fifty","FIFTY"]},

  {question: "Who is the coolest coder?", answer:["adam","Adam","Andy","andy","John","john",
  "nick","Nick","adrian","Adrian","matt","Matt","jesse","Jesse"]}
];

var currentQuestion = 0;
// var currentAnswer = 0;
var count = 0;

$(".question-text").html(quiz[currentQuestion].question);
$(".resetBoard").on ("click", function () {
  $(".question-text").html(" ");
  // $(".question-text").html(quiz[currentQuestion].question);
});

$(".submitAnswer").on ("click", function(){
  var answer = ($(".typeAnswer").val());
  // var player = ($(".playerName").val());
  event.preventDefault();

  for (i=0; i<=quiz[currentQuestion].answer.length;i++) {
    console.log(quiz[currentQuestion].answer[i]);
    if (answer === quiz[currentQuestion].answer[i]){
      $(".result-box").text("Correct").css("color","green");
      count++;
      $(".score").html("Your Current Score:" +count);
    } else {
      $(".result-box").text("Wrong").css("color","red");
    }
    currentQuestion++;
    $(".question-text").html(quiz[currentQuestion].question);
  }
});
