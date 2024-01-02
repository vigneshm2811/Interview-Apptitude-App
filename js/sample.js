let questionsDiv = document.getElementById("questionsDiv");
let questionsDiv2 = document.getElementById("questionsDiv2");
let questionsDiv3 = document.getElementById("questionsDiv3");
let currentPage = 1;
const questionsPerPage = 10;
const selectedOptions = [];

let maxtime = 3;
document.getElementById("minutes").innerHTML = maxtime;

let secCountdown = setInterval(secCounter,1000)
let minCountdown = setInterval(minCounter,60000)

let sec=60;
function minCounter(){
  maxtime-=1;
  if(maxtime === 0){
  clearInterval(minCountdown)
  clearInterval(secCountdown)
   }
  console.log(maxtime)
  document.getElementById("minutes").innerHTML = maxtime;

 }
function secCounter(){
 sec-=1;
//  console.log(sec)
 document.getElementById("seconds").innerHTML = sec;
  if(sec === 0){
   sec=59;
  }
}



 
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
  // const startIndex = (page - 1) * questionsPerPage;
  // const endIndex = startIndex + questionsPerPage;
  let count=0;
data.forEach((element)=>{
   count +=1;
  if (Object.keys(element.options).length === 2) {
    div.innerHTML += `<div class=" practice-question-block">
      <div class="question-no">Question ${count}</div>
      <div class="question-text">
         ${element.question}
      </div>
      <div class="options-group">
          <div class="option-block ">${element.options.A}</div>
          <div class="option-block ">${element.options.B}</div>
      </div>
    </div>`;
  } else {
    div.innerHTML += `<div class=" practice-question-block">
      <div class="question-no">Question ${count}</div>
      <div class="question-text">
         ${element.question}
      </div>
      <div class="options-group">
          <div class="option-block ">${element.options.A}</div>
          <div class="option-block ">${element.options.B}</div>
          <div class="option-block ">${element.options.C}</div>
          <div class="option-block ">${element.options.D}</div>
      </div>
    </div>`;
  }
})
 
}

questionsDiv.addEventListener('click', function (event) {
    a=event
    // Check if the clicked element is an option-block
    if (event.target.classList.contains('option-block')) {
        console.log(event)
        // Find the parent question block
        const questionBlock = event.target.closest('.practice-question-block');

        // Remove the 'selected' class from all options within the parent question block
        questionBlock.querySelectorAll('.option-block').forEach(option => {
            option.classList.remove('selected');
        });

        // Add the 'selected' class to the clicked option
        event.target.classList.add('selected');

        // Store the selected option value in the variable for the specific question
        const questionNumber = questionBlock.querySelector('.question-no').textContent;
        selectedOptions[questionNumber] = event.target.textContent;

        // You can perform additional actions based on the selected option if needed
        console.log(`Selected Option for ${questionNumber}:`, selectedOptions[questionNumber]);

        const data = [...quanPage(localData), ...logicalPage(localData), ...verbalPage(localData)];
        // const score = calculateScore(data, selectedOptions[questionNumber]);
        // console.log(`Current Score: ${score}`);
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

