

const doneBtn = document.getElementById("doneBtn");

doneBtn.addEventListener("click",()=>{
    let minutes =document.getElementById("minutes").value
    let passPercent =document.getElementById("passPercent").value
    let marksPerQuestion =document.getElementById("marksPerQuestion").value
    let attempts =document.getElementById("attempts").value
    let noOfquestion =document.getElementById("noOfquestion").value
    let examRules ={
        minutes:minutes,
        passPercent:passPercent,
        marksPerQuestion:marksPerQuestion,
        attempts:attempts,
        remainigAttempts: attempts,
         noOfquestion: noOfquestion
        
    }
    let examRulesData = JSON.stringify(examRules)
    localStorage.setItem('examRules',examRulesData)
    if(minutes != "" && passPercent != "" && marksPerQuestion != "" && attempts != "" && noOfquestion != ""){
        modifyModal.style.display = "none"
    }
})