// be meticulous about formatting, it really helps with readability.
// e.g. remove the blank line inside the array, and put spaces between comma-
// separated values (.e.g the answers in the inner arrays)
var quiz = [

  {question: "Who is the coolest coder?", answer:["adam","me","Mujeeb","mujeeb","Mati","mati","Adam","Andy","andy","John","john"]},
  {question: "Who is the coolest coder?", answer:["adam","me", "Adam","Andy","andy","John","john",
  "nick","Nick","adrian","Adrian","matt","Matt","jesse","Jesse"]},
  {question:"What is Mitt Romney's middle name?", answer:["mitt","Mitt"]},
  {question: "What's the capital of Afghanistan?", answer:["Kabul","kabul","kabol","Kabol"]},
  {question: "Which U.S. state is nearest to the former Soviet Union? ", answer:["alaska","Alaska"]},
  {question: "What is Canada's national animal? ", answer:["beaver","Beaver"]},
  {question: "Who is it that removed Broccoli from the WH menus?", answer:["bush","Bush", "George", "george", "george bush", "George Bush", "George bush"]}
];
// I really like how you structured your questions as an array of objects, and
// espcially how you support multiple correct answers.
// My one suggestion here for improvement is to rename the `answer` property
// to `correct_answers`

var currentQuestion = 0;
var questionCount = 0;
var answerCount = 0;

$(".question-text").hide();
$(".score").hide();
$(".submitAnswer").off("click"); // is this line doing anything? no listeners
// have been added yet, so I don't think it's necessary

//When player name is submited, it appears under with the first quesiton. The start button and the input box disappear.
$(".submitName").on("click", function (){
  event.preventDefault();
  $(".displayName").text($(".playerName").val()+"'s");
  $(".playerName").val("");
  $(".question-text").show(""); // don't need to pass this empty string to show
  $(".question-text").html(quiz[0].question); // I'd use `currentQuestion`
  // instead of 0 here, to convey intent more clearly.
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
    var answer = ($(".typeAnswer").val()); // you don't need the extra set of parens here!
    event.preventDefault();
    for (i=0; i<=quiz[currentQuestion].answer.length;i++) {
      if (answer === quiz[currentQuestion].answer[i]){
        answerCount++;
        $(".score").html("correct answers:"+answerCount);
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

// I feel like more needs to happen here to reset, such as resetting the values
// of currentQuestion, etc.
$(".resetBoard").on ("click", function () {
  $(".question-text").html(" ");

});
