const startTest = document.getElementById("startTest");
const userName = document.getElementById("user-name")
userName.textContent=  localStorage.getItem("username");
startTest.addEventListener("click",()=>{
    window.location.href="./exam.html"
})

let rulesData = localStorage.getItem('examRules')
let examRules = JSON.parse(rulesData)
console.log(examRules)

let nQwestions = document.querySelectorAll(".noOfquestion")

nQwestions.forEach((element)=>{
    element.textContent=examRules.noOfquestion
})
document.getElementById("pass").textContent = `${examRules.passPercent} %`
document.getElementById("mins").textContent =examRules.minutes
document.getElementById("attempts").textContent = examRules.attempts