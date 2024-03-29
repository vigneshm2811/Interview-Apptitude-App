let questionsDiv = document.getElementById("questionsDiv");
let questionsDiv2 = document.getElementById("questionsDiv2");
let questionsDiv3 = document.getElementById("questionsDiv3");
let submit = document.getElementById("submit");
let selectQuestions = document.querySelector("#slides");
let currentPage = 1;
const questionsPerPage = examRules.noOfquestion;
const selectedOptions = [];

// Geting Json Data from localstorage
  let storedJsonString = localStorage.getItem('myjson');
  let localData = JSON.parse(storedJsonString);
  renderLocalStorage()

  // redener the question as per section
function renderLocalStorage(){
  renderQuestions(quanPage(localData), questionsDiv);
  renderQuestions(logicalPage(localData), questionsDiv2);
  renderQuestions(verbalPage(localData), questionsDiv3);
}


// filter belongs to quantative section
function quanPage(data){
  let filteredData = data.filter((e)=>{
      return e.section === "quantitative"
  })
  return filteredData.slice(0,questionsPerPage)
}

// filter belongs to logical section
function logicalPage(data){
  let filteredData = data.filter((e)=>{
      return e.section === "logical"
  })
  return filteredData.slice(0,questionsPerPage)
}

// filter belongs to verbal section
function verbalPage(data){
  let filteredData = data.filter((e)=>{
      return e.section === "language"
  })
 return filteredData.slice(0,questionsPerPage)
}


//function for reender the questions
function renderQuestions(data, div) {
  div.innerHTML = "";
  let count=0;
data.forEach((element)=>{
   count +=1;

    div.innerHTML += `<div class=" practice-question-block">
      <div class="question-no">Question ${count}</div>
      <div class="question-text">
         ${element.question}
      </div>
      <div class="options-group">
      <div class="ans" style="display:none">${element.correctAnswer}</div>
      <div class="sec" style="display:none">${element.section}</div>
      <div class="option-block ">${element.options.A}</div>
          <div class="option-block ">${element.options.B}</div>
          <div class="option-block ">${element.options.C}</div>
          <div class="option-block ">${element.options.D}</div>
      </div>
    </div>`;
  
})
 
}

// event for selecting the options

selectQuestions.addEventListener('click', function (event) {

    if (event.target.classList.contains('option-block')) {
   
        const questionBlock = event.target.closest('.practice-question-block');
        const answerValue = questionBlock.querySelector('.ans').textContent;
        const section = questionBlock.querySelector('.sec').textContent;
        console.log("correct",answerValue)
           const questionNumber = questionBlock.querySelector('.question-no').textContent;
           selectedOptions[questionNumber] = event.target.textContent;
           console.log(`Selected Option for ${questionNumber}:`, selectedOptions[questionNumber]);

        questionBlock.querySelectorAll('.option-block').forEach(option => {
            option.classList.remove('selected');
        });
        event.target.classList.add('selected');
        //calling the check answer function
        checkAnswer(answerValue,selectedOptions[questionNumber],section)

    }
});

// function to clear the selected options
function clearSelectedOptions() {
  document.querySelectorAll('.option-block.selected').forEach(option => {
    option.classList.remove('selected');
  });
}


// get the selected answer and correct answer and push to an array
let score=[]
function checkAnswer(answer,selected,section){

  let ans={
    section:section,
    correctAnswer:answer,
  selectedAnswer:selected
}
  score.push(ans)
//  return score
}

function scoreCal(){
  let total=0,quan=0,logic=0,verbal=0;
  console.log(score);
  let marks= parseInt(examRules.marksPerQuestion)
  score.forEach((element)=>{
    if(element.correctAnswer === element.selectedAnswer){
      if(element.section === "quantitative"){
        quan +=marks
      }
      if(element.section === "logical"){
        logic +=marks
      }
      if(element.section === "language"){
        verbal +=marks
      }
     total+=marks
      console.log(total)
    }
  })
  let precntage = Math.floor((total/maxTotalMarks)*100)
  console.log(precntage)
  let scoresData ={
    quan:quan,
    logical:logic,
    verbal: verbal,
    total:total,
    percentage: precntage
  }
  console.log(scoresData)

return scoresData
}


// slider 
let slideIndex = 1;

function showSlides(index) {
  const slides = document.getElementById('slides');
  const slidesCount = document.querySelectorAll('.slide').length;
  let headingApp = document.querySelector(".headingApp");

  // Remove the 'active' class from all dots
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('active'));

  switch (index) {
    case 1:
      headingApp.textContent = "Quantitative Aptitude";
      break;

    case 2:
      headingApp.textContent = "Logical Aptitude";
      break;

    case 3:
      headingApp.textContent = "Verbal Aptitude";
      document.getElementById("submit").style.display="block"
      break;
  }

  if (index > slidesCount) {
    slideIndex = 1;
  } else if (index < 1) {
    slideIndex = slidesCount;
  }

  const translateValue = -100 * (slideIndex - 1) + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';

  // Add the 'active' class to the current dot
  dots[slideIndex - 1].classList.add('active');
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Initialize by setting the first dot as active
showSlides(slideIndex);

