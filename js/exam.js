let questionsDiv = document.getElementById("questionsDiv");
let questionsDiv2 = document.getElementById("questionsDiv2");
let questionsDiv3 = document.getElementById("questionsDiv3");
let submit = document.getElementById("submit");
let selectQuestions = document.querySelector("#slides");
let currentPage = 1;
const questionsPerPage = 10;
const selectedOptions = [];





 
  let storedJsonString = localStorage.getItem('myjson');
  let localData = JSON.parse(storedJsonString);
  renderLocalStorage()

function renderLocalStorage(){
  let mergedArray = [...quanPage(localData), ...logicalPage(localData), ...verbalPage(localData)];
  console.log(mergedArray)
  renderQuestions(quanPage(localData), questionsDiv);
  renderQuestions(logicalPage(localData), questionsDiv2);
  renderQuestions(verbalPage(localData), questionsDiv3);
  // addPagination(mergedArray);
}



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

selectQuestions.addEventListener('click', function (event) {

  // if (event.target.classList.contains('ans-block')) {
  // }
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
        checkAnswer(answerValue,selectedOptions[questionNumber],section)

    }
});


function quanPage(data){
    let filteredData = data.filter((e)=>{
        return e.section === "quantitative"
    })
    return filteredData.slice(0,10)
}

// filter belongs to logical section
function logicalPage(data){
    let filteredData = data.filter((e)=>{
        return e.section === "logical"
    })
    return filteredData.slice(0,10)
}

// filter belongs to verbal section
function verbalPage(data){
    let filteredData = data.filter((e)=>{
        return e.section === "language"
    })
   return filteredData.slice(0,10)
}
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

// scoreCal()
function scoreCal(){
  let total=0
  let quan=0
  let logic =0
  let verbal =0
  console.log(score)
  score.forEach((element)=>{
    if(element.correctAnswer === element.selectedAnswer){
      if(element.section === "quantitative"){
        quan +=1
      }
      if(element.section === "logical"){
        logic +=1
      }
      if(element.section === "language"){
        verbal +=1
      }
     total+=1
      console.log(total)
    }
  })
  let scoresData ={
    quan:quan,
    logical:logic,
    verbal: verbal,
    total:total
  }
  console.log(scoresData)

return scoresData
}


modifyClose .addEventListener("click",()=> modifyModal.style.display = "none")
submit.addEventListener("click",()=>{
  const user = document.getElementById("user")
let username = localStorage.getItem('username')
user.textContent = username
  let localScoreData = JSON.stringify(scoreCal());

  localStorage.setItem('scoresData',localScoreData)
  let data =localStorage.getItem("scoresData");
  let result = JSON.parse(data)
  
  console.log(result)
  document.getElementById("quanMarks").innerHTML = result.quan
  document.getElementById("logicMarks").innerHTML = result.logical
  document.getElementById("verbalMarks").innerHTML = result.verbal
  document.getElementById("totalMarks").innerHTML = result.total
  modifyModal.style.display = "block";
})



// slider 

let slideIndex = 1;
      
function showSlides(index) {
  const slides = document.getElementById('slides');
  const slidesCount = document.querySelectorAll('.slide').length;
    let headingApp =document.querySelector(".headingApp")
  switch(index){
    case 1:
        headingApp.textContent = "Quantitative Aptitude"
        break;
    
    case 2:
        headingApp.textContent = "Logical Aptitude"
        break;
    
    case 3:
        headingApp.textContent = "Verbal Aptitude"
        break;
    
  }

  if (index > slidesCount) {
    slideIndex = 1;
  } else if (index < 1) {
    slideIndex = slidesCount;
  }

  const translateValue = -100 * (slideIndex - 1) + '%';
  slides.style.transform = 'translateX(' + translateValue + ')';
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}
