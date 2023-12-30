
let storedJsonString = localStorage.getItem('myjson');
let existingData = JSON.parse(storedJsonString);
// const addBtn = document.getElementById("addBtn");

addBtn.addEventListener("click", createQuestion)

function createQuestion(){
  let id= document.getElementById("qno").value
  let section= document.getElementById("section").value
  let questions= document.getElementById("textarea").value

  let op1= document.getElementById("op1").value
  let op2= document.getElementById("op2").value
  let op3= document.getElementById("op3").value
  let op4= document.getElementById("op4").value
  let correct = document.getElementById("correct").value

  let newValue = {
    "id": id,
    "section": section,
    "question": questions,
    "options": {
      "A": op1,
      "B": op2,
      "C": op3,
      "D": op4
    },
    "correctAnswer": correct
  };
  
  existingData.push(newValue);
  
  let updatedJsonString = JSON.stringify(existingData);
  
  localStorage.setItem('myjson', updatedJsonString);
  
}


