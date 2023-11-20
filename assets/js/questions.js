const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn\'t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];


// const indexQuestionChosen = [];
const indexQuestionChosen = [];
let indexCurrentQuestion;
let answerChosen;
let rightAnswersSum = 0;
let wrongAnswersSum = 0;


window.onload = function () {
  startTimer();
  generateQuiz()
}

function generateQuiz() {
      resetQuestion()
      resetTimer()
      setQuestion() //printQuestion(chosen) //questions[chosen].question
      if(questions[indexCurrentQuestion].type === "multiple"){
          setMultipleAnswers()
      } else {
          setBooleanAnswers()
      }  
      printQuestionNumber()
}

function resetQuestion(){
  document.querySelector("#titleQuestion").innerText = "";
  let buttons = document.querySelectorAll(".styleButton");
  buttons.forEach((element) => element.innerText = "")
  buttons.forEach((element) => element.classList.remove("selected"))
  document.querySelector("#questionsCounter").innerText = "";
  document.querySelector("#contenutoQuestion2").style.display = "";
  document.querySelector(".nextButton").setAttribute("id", "")
  document.querySelector("#containerFooterQuestion button").setAttribute("onclick", "")
  
}

function setQuestion() {
    let question = document.querySelector("#titleQuestion");
    let p = document.createElement("p");
    const domanda = selectQuestion();
    console.log(domanda)
    p.innerText = domanda;
    question.appendChild(p);
}

function selectQuestion(){
    indexCurrentQuestion = "";
    let chosen = Math.floor(Math.random()* 10); // 4
    console.log("random number", chosen)
    let alreadyPresent = indexQuestionChosen.includes(chosen);
    console.log("question already answered", alreadyPresent)
    if(alreadyPresent){ 
        return selectQuestion()
    } else {
        console.log("question chosen",chosen)
        indexQuestionChosen.push(chosen)
        indexQuestionChosen
        // indexQuestionChosen.push(chosen)
        indexCurrentQuestion = chosen;
        return questions[chosen].question;
    }
}

function setMultipleAnswers() {
    let answersAlreadySet = [];
    let answerSelected;

    for(let i = 1 ; i < 5 ; i++){
        let spot = document.getElementById("button_" + i)
        let answer = document.createElement("p")
        
        do {
            answerSelected = Math.floor(Math.random()*4 +1)
        } while (answersAlreadySet.includes(answerSelected))

        answersAlreadySet.push(answerSelected)

        switch (answerSelected) {
            case 1:
                answer.innerText = questions[indexCurrentQuestion].correct_answer
                spot.appendChild(answer)
                break;

            case 2:
                answer.innerText = questions[indexCurrentQuestion].incorrect_answers[0]
                spot.appendChild(answer)
                break;

            case 3:
                answer.innerText = questions[indexCurrentQuestion].incorrect_answers[1]
                spot.appendChild(answer)
                break;

            case 4:
                answer.innerText = questions[indexCurrentQuestion].incorrect_answers[2]
                spot.appendChild(answer)
                break;
        } 
    }
}



function setBooleanAnswers() {

    document.querySelector("#contenutoQuestion2").style.display = "none";
    let answersAlreadySet = [];
    let answerSelected;
    for(let i = 1; i < 3 ; i++){
        let spot = document.getElementById("button_" + i)
        let answer = document.createElement("p")
        
        do {
            answerSelected = Math.floor(Math.random()*2 +1)
        } while (answersAlreadySet.includes(answerSelected))
        
        answersAlreadySet.push(answerSelected)

        switch (answerSelected) {
            case 1:
                answer.innerText = questions[indexCurrentQuestion].correct_answer
                spot.appendChild(answer)
                break;

            case 2:
                answer.innerText = questions[indexCurrentQuestion].incorrect_answers[0]
                spot.appendChild(answer)
                break;
    }
  }
}


function select(num){
  answerChosen = "";
  let buttons = document.querySelectorAll(".styleButton");
  buttons.forEach((element) => element.classList.remove("selected"))
  let buttonChosen = document.getElementById("button_" + num);
  buttonChosen.classList.add("selected")
  answerChosen = buttonChosen.innerText
  console.log(answerChosen)
  document.querySelector("#containerFooterQuestion button").setAttribute("id", "answerSelected")
  document.querySelector("#containerFooterQuestion button").setAttribute("onclick", "nextPage()")
}

function printQuestionNumber() {
  let counter = document.getElementById("questionsCounter");
  let h3 = document.createElement("h3")
  h3.innerHTML = "QUESTION " + indexQuestionChosen.length + "<span> /10<span>"
  counter.appendChild(h3)
}

function nextPage(){
  if(answerChosen === questions[indexCurrentQuestion].correct_answer){
    rightAnswersSum += 1
  } else {
    wrongAnswersSum += 1
  }

  if (indexQuestionChosen.length < questions.length){
    console.log(rightAnswersSum)
    console.log(wrongAnswersSum)
    generateQuiz()
  } else {
    window.location.href = `results.html?${rightAnswersSum}|${wrongAnswersSum}`;
  }
  
}

//TIMER
const FULL_DASH_ARRAY = 283;

const COLOR_CODES = {
    info: {
      color: "green"
    }};

const TIME_LIMIT = 45;
let timePassed;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("app").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="base-timer-label" class="base-timer__label">${formatTime(
    timeLeft
  )}</span>
</div>
`;


function onTimesUp() {
  nextPage()
}

function resetTimer() {
  clearInterval(timerInterval);
  startTimer()
}

function startTimer() {
  timePassed = 0
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML = formatTime(timeLeft);
  
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  if(time === 0o0){
    time = 45
  } 
  const minutes = Math.floor(time / 45);
  let seconds = time % 46;
  
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
  
    return `${seconds}`;
  }

function setRemainingPathColor(timeLeft) {
    const {info} = COLOR_CODES;
    if (timeLeft <= info.threshold) {
        document.getElementById("base-timer-path-remaining")
        .classList.add(info.color);
    }
  }

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}
  
