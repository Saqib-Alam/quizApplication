var quesArr = [
    {
      num: 1,
      question: "Which of the following is not a JavaScript Data Types?",
      options: {
        a: "Boolean",
        b: "Undefined",
        c: "Number",
        d: "Float",
      },
      answer: "Float",
    },
    {
      num: 2,
      question: "Why does the name of JavaScript and Java are similar",
      options: {
        a: "JavaScript is a stripped-down version of Java.",
        b: "The syntax of JavaScript is loosely based on the syntax of Java.",
        c: "JavaScript and Java both are originated on the island of Java.",
        d: "None of the above",
      },
      answer: "The syntax of JavaScript is loosely based on the syntax of Java.",
    },
    {
      num: 3,
      question: " Which of the following is the correct way to write a comment in JavaScript code?",
      options: {
        a: "//This is a comment",
        b: "/*This is a comment*/",
        c: "$This is a comment$",
        d: "**This is a comment**",
      },
      answer: "//This is a comment",
    },
    {
      num: 4,
      question: "The 'function' and  'var' are known as:",
      options: {
        a: "Keywords",
        b: "Data types",
        c: "Declaration statements",
        d: "Prototypes",
      },
      answer: "Declaration statements",
    },
    {
      num: 5,
      question: "Which of the following variables are used in JavaScript programs?",
      options: {
        a: "Varying randomly",
        b: "Causing high-school algebra flashbacks",
        c: "Storing numbers, dates, or other values",
        d: "None of the above",
      },
      answer: "Storing numbers, dates, or other values",
    },
    {
        num: 6,
        question: "In JavaScript, what will be used for calling the function definition expression:",
        options: {
          a: "Function prototype",
          b: "Function literal",
          c: "Function calling",
          d: "Function declaration",
        },
        answer: "Function literal",
      },
      {
        num: 7,
        question: "When interpreter encounters an empty statements, what it will do:",
        options: {
          a: "Shows a warning",
          b: "Prompts to complete the statement",
          c: "Throws an error",
          d: "Ignores the statements",
        },
        answer: "Ignores the statements",
      },
      {
        num: 8,
        question: "Which type of JavaScript language is ___",
        options: {
          a: "Object-Oriented",
          b: "Object-Based",
          c: "Assembly-language",
          d: "High-level",
        },
        answer: "Object-Based",
      },
      {
        num: 9,
        question: "Which one of the following also known as Conditional Expression:",
        options: {
          a: "Alternative to if-else",
          b: "Switch statement",
          c: "If-then-else statement",
          d: "immediate if",
        },
        answer: "immediate if",
      },
      {
        num: 10,
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        options: {
          a: "Preprocessor",
          b: "Triggering Event",
          c: "RMI",
          d: "Function/Method",
        },
        answer: "Function literal",
      },
  ];





///get question
var uiQuestion = document.getElementById("question");

///get Option
var quesOptions = document.getElementsByClassName("quesOptions");
console.log(quesOptions)

var nextBtn = document.getElementById("nextBtn")
var mtotalQues = document.getElementById("totalQues")
var mcorrectAns = document.getElementById("correctAns")
var mwrongQues = document.getElementById("wrongQues")
var resultBox = document.getElementById("resultBox")
var mainBody = document.getElementsByClassName("mainBody")
var quesNo = document.getElementById("quesNo")

//set onclick event on options
for(var i = 0 ; i < quesOptions.length ; i++){
    quesOptions[i].setAttribute("onclick" , "checkAnswer(this)")
}

var mainBody=document.getElementById('mainBody');
var quiz=document.getElementById('quiz')

var counter = 0
var scoreCounter = 0
var wrongCounter = 0

//// quizStart///
function startQuiz(){
    //set ques 
    quiz.style.display='none'
    mainBody.style.display='flex'
    uiQuestion.innerHTML = quesArr[counter].question

    quesNo.innerHTML = quesArr[counter].num+"/10"

    //set options
    quesOptions[0].innerHTML = quesArr[counter].options.a
    quesOptions[1].innerHTML = quesArr[counter].options.b
    quesOptions[2].innerHTML = quesArr[counter].options.c
    quesOptions[3].innerHTML = quesArr[counter].options.d

    nextBtn.style.display = "none";

}



function nextQues(){
    
  if( counter < quesArr.length -1){
    counter++
    startQuiz()

  }else{
    resultBox.style.display = "flex"
    mainBody.style.display = "none"
    mtotalQues.innerHTML = quesArr.length
    mcorrectAns.innerHTML = scoreCounter
    mwrongQues.innerHTML = wrongCounter


  }
    // console.log(quesArr.length)
      
    for(var i = 0 ; i<quesOptions.length ; i++){
      quesOptions[i].style.pointerEvents = "visible"
      quesOptions[i].style.backgroundColor = "transparent"
      quesOptions[i].style.color = "#69000e"

  }
}


function checkAnswer(li){
    
    if(li.innerHTML === quesArr[counter].answer){
        console.log("true ans")
        scoreCounter++
        console.log("scoreCounter" , scoreCounter);
        li.style.backgroundColor = "green"
        li.style.color = "white"
      }else{
        wrongCounter++
      console.log("false");
      li.style.backgroundColor = "red"
      li.style.color = "white"
      
    }
      
    for(var i = 0 ; i<quesOptions.length ; i++){
        quesOptions[i].style.pointerEvents = "none"
    }
    nextBtn.style.display = "block"

}
