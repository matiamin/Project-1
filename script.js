
var quiz = [
  {question: "Who is the coolest coder?", answer:["adam","me", "Adam","Andy","andy","John","john",
  "nick","Nick","adrian","Adrian","matt","Matt","jesse","Jesse"]},
  {question:"What is Mitt Romney's middle name?", answer:["mitt","Mitt"]},
  {question: "What's the capital of Afghanistan?", answer:["Kabul","kabul","kabol","Kabol"]},
  {question: "Which U.S. state is nearest to the former Soviet Union? ", answer:["alaska","Alaska"]},
  {question: "What is Canada's national animal? ", answer:["beaver","Beaver"]},
  {question: "Who is it that removed Broccoli from the WH menus?", answer:["bush","Bush", "George", "george", "george bush", "George Bush", "George bush"]}
];

var currentQuestion = 0;
var questionCount = 0;
var answerCount = 0;

$(".question-text").hide();
$(".score").hide();
$(".submitAnswer").off("click");

//When player name is submited, it appears under with the first quesiton.
//The start button and the input box disappear.
$(".submitName").on("click", function (){
  event.preventDefault();
  $(".displayName").text($(".playerName").val());
  $(".playerName").val("");
  $(".question-text").show("");
  $(".question-text").html(quiz[0].question);
  $(".form").hide();

  //When answer is submitted, qestion number increments by 1.
  $(".submitAnswer").on ("click", function(){
    $(".score").show();
    questionCount++;
    $(".result-box").text(+questionCount +" "+"of 6 Qs" ).css("color","green");
    if (questionCount==quiz.length) {
      $(".result-box").text("Reset to play again");
      $(".question-text").hide();
      $(".displayName").hide();
      $(".submitAnswer").off("click");
    }
    //checking whether answer is correct or not, counting by 1 every time it is correct.
    var answer = $(".typeAnswer").val();
    event.preventDefault();
    for (i=0; i<=quiz[currentQuestion].answer.length;i++) {
      if (answer === quiz[currentQuestion].answer[i]){
        answerCount++;
        $(".score").html("correct answers:\n"+answerCount + "\n" + "\n out of 6");
      }
    }

    //Moving to the next question and retrieving its text after each answer submission.
    currentQuestion++;
    $(".question-text").html(quiz[currentQuestion].question);
    $(".typeAnswer").val("");
  });
});

//Reset button clears up the board.
$(".typeAnswer").val("");
$(".resetBoard").on ("click", function () {
  $(".question-text").html(" ");
});
