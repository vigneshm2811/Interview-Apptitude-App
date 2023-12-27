
let questionsDiv = document.getElementById("questionsDiv")


fetch('../js/quan.json')
  .then(response => response.json())
  .then(data => {
    // Work with the loaded data
    console.log(data)
//    let datas= data.slice(0,10)
   questionRender(quanPage(data))
  
   logicalPage(data)
   verbalPage(data)
  })
//   .catch(error => {
//     console.error('Error loading JSON file:', error);
//   });



  function questionRender(data){
    let count=0;
    data.forEach(element => {
        count=count+1
        console.log(Object.keys(element.options).length)
       if(Object.keys(element.options).length === 2){
        questionsDiv.innerHTML += `<div class=" practice-question-block">
        <div class="question-no">Question ${count}</div>
        <div class="question-text">
           ${element.question}
        </div>
        <div class="options-group">
            <div class="option-block ">${element.options.A}</div>
            <div class="option-block ">${element.options.B}</div>
          
        </div>
    </div>`
       }
      else{
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
    </div>`
      }
        
    });
  }
// filter belongs to quantative section
function quanPage(data){
    let quanData = data.filter((e)=>{
        return e.section === "quantitative"
    })
    return quanData
}

// filter belongs to logical section
function logicalPage(data){
    let quanData = data.filter((e)=>{
        return e.section === "logical"
    })
    return quanData
}

// filter belongs to verbal section
function verbalPage(data){
    let quanData = data.filter((e)=>{
        return e.section === "language"
    })
   return quanData
}
//   pagination
// document.getElementById("sec1").addEventListener("click",questionRender(quanPage()))
// document.getElementById("sec2").addEventListener("click",questionRender(logicalPage()))
// document.getElementById("sec3").addEventListener("click", questionRender(verbalPage()))
const c = document.querySelector('.container')
const indexs = Array.from(document.querySelectorAll('.index'))
let cur = -1
indexs.forEach((index, i) => {
  index.addEventListener('click', (e) => {
    // clear
    c.className = 'container'
    void c.offsetWidth; // Reflow
    c.classList.add('open')
    c.classList.add(`i${i + 1}`)
    if (cur > i) {
      c.classList.add('flip')
    }
    cur = i
  })
})

