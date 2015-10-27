
var quiz = [
  {question:"who is the president of US?", answer:"obama"},
  {question: "How many states are there in the U.S.?", answer:"50"},
  {question: "Who is the coolest coder?", answer:"Mati"}
];

var currentQuestion = 0;

$(".question-text").html(quiz[currentQuestion].question);

$(".resetBoard").on ("click", function () {
  $(".question-text").html(" ");
});

$(".submitAnswer").on ("click", function(){
  var answer = ($(".typeAnswer").val());
  $(".typeAnswer").text(" ");
  event.preventDefault();
  if (answer === quiz[currentQuestion].answer){
    $(".result-box").text("Correct").css("color","green");
  } else {
    $(".result-box").text("Wrong").css("color","red");
  }
  currentQuestion++;
  $(".question-text").html(quiz[currentQuestion].question);
});
