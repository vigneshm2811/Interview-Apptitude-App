let questionsDiv = document.getElementById("questionsDiv");
let currentPage = 1;
const questionsPerPage = 10;
const selectedOptions = [];


  renderLocalStorage()
function renderLocalStorage(){
    
  let storedJsonString = localStorage.getItem('myjson');
  let localData = JSON.parse(storedJsonString);

  let mergedArray = [...quanPage(localData), ...logicalPage(localData), ...verbalPage(localData)];
  console.log(mergedArray)
  renderQuestions(mergedArray, currentPage);
  addPagination(mergedArray);
}




function renderQuestions(data, page) {
  questionsDiv.innerHTML = "";
  const startIndex = (page - 1) * questionsPerPage;
  const endIndex = startIndex + questionsPerPage;

  for (let i = startIndex; i < endIndex && i < data.length; i++) {
    const element = data[i];
    let count = i + 1;
    if (Object.keys(element.options).length === 2) {
      questionsDiv.innerHTML += `<div class=" practice-question-block">
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
      questionsDiv.innerHTML += `<div class=" practice-question-block">
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
  }
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
    }
});


function quanPage(data){
    let filteredData = data.filter((e)=>{
        return e.section === "quantitative"
    })
    return filteredData.slice(5,12)
}

// filter belongs to logical section
function logicalPage(data){
    let filteredData = data.filter((e)=>{
        return e.section === "logical"
    })
    return filteredData.slice(5,10)
}

// filter belongs to verbal section
function verbalPage(data){
    let filteredData = data.filter((e)=>{
        return e.section === "language"
    })
   return filteredData.slice(5,10)
}

//pagination function
function addPagination(data) {
  const totalPages = Math.ceil(data.length / questionsPerPage);
  const paginationDiv = document.querySelector(".btn-paginacao");

//   paginationDiv.innerHTML = `<div class="container">${generatePageNumbers(totalPages)}</div>`;
let a= generatePageNumbers(totalPages)
  paginationDiv.innerHTML += `<div class="container">${generatePageNumbers(totalPages)}</div>`;
//   document.body.appendChild(paginationDiv);

  const pageButtons = document.querySelectorAll(".index");
  pageButtons.forEach(button => {
    button.addEventListener("click", function (event) {
      event.preventDefault();
        let headingApp = document.querySelector(".headingApp");
      currentPage = parseInt(button.textContent);
      switch(currentPage){
        case 1:
            headingApp.innerHTML ="Quantitative Aptitude";
            break;
        case 2:
            headingApp.innerHTML ="logical Aptitude";
            break;
        case 3:
            headingApp.innerHTML ="Verbal Aptitude";
            break;
        default:
            headingApp.innerHTML ="Quantitative Aptitude";
            break;
        
      }
      renderQuestions(data, currentPage);
    });
  });
}

function generatePageNumbers(totalPages) {
  let pageNumbers = "";
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers += `<span class="index">${i}</span>`;
  }
  return pageNumbers;
}

// filtering accroding to the section of the data


