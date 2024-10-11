const questions = [
  {
    question: "high dmnd langauag?",
    answer: [
      { text: "php", correct: "false" },
      { text: "javascript", correct: "false" },
      { text: "python", correct: "true" },
      { text: "machin", correct: "false" },
    ],
  },
  {
    question: "high dmnd job?",
    answer: [
      { text: "dvlopr", correct: "true" },
      { text: "frontnd", correct: "false" },
      { text: "tsting", correct: "false" },
      { text: "hr", correct: "false" },
    ],
  },
  {
    question: "high dmnd company?",
    answer: [
      { text: "Google", correct: "false" },
      { text: "Microsoft", correct: "false" },
      { text: "Apple", correct: "true" },
      { text: "Tesla", correct: "false" },
    ],
  },
  {
    question: "high dmnd country",
    answer: [
      { text: "Bangladeh", correct: "false" },
      { text: "pakistan", correct: "false" },
      { text: "america", correct: "true" },
      { text: "india", correct: "false" },
    ],
  },
  {
    question: "high dmnd Assmbly?",
    answer: [
      { text: "pakistan", correct: "false" },
      { text: "amrca", correct: "false" },
      { text: "russia", correct: "true" },
      { text: "china", correct: "false" },
    ],
  },
];
const questionid = document.getElementById("question");
var answerbtn = document.getElementById("answer-buttons");
var nxt = document.getElementById("next-btn");
const btn = document.getElementById("btn");


let questionindx = 0;
let scor = 0;
start();
function start() {
  questionindx = 0;
  scor = 0;
  nxt.innerHTML = "Next";
  Shoquestion();
}

function Shoquestion() {
    rststat();
  let currqustion = questions[questionindx];
  console.log(questionindx);
  let no = questionindx + 1;
  questionid.innerHTML = no + ". " + currqustion.question;

  currqustion.answer.forEach((answers) => {
    const btn1 = document.createElement("button");

    btn1.innerHTML = answers.text;
    btn1.classList.add("btn");
    answerbtn.appendChild(btn1);
    console.log(answers.correct);
    if (answers.correct) {
      btn1.dataset.correct = answers.correct;
    }
    btn1.addEventListener("click", correctans);
  });
}

function correctans(e) {
  const slctdbtn = e.target;

  const slcans = slctdbtn.dataset.correct === "true";

  if (slcans) {
    slctdbtn.classList.add("correct");
 
  } else {
    slctdbtn.classList.add("incorrect");
scor--;
    c
  }

  Array.from(answerbtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
    scor--;
  });
  nxt.style.display="block";
}

function nxtt(){
   
    if (questionindx < questions.length) {
      handlnxt();
    } else {
      Shoquestion();
    }
}

function handlnxt() {
     
    questionindx++;
    if(  questionindx < questions.length){
        Shoquestion();
        
    }else {
      nxt.style.display="none";
      }
}

function rststat(){
while(answerbtn.firstChild){
    answerbtn.removeChild( answerbtn.firstChild)
}

}

console.log(scor);