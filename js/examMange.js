let goBack =document.getElementById("goBack")
let tryAgain = document.getElementById("tryAgain");
// data of exam rules modification
let rulesData = localStorage.getItem('examRules')
let examRules = JSON.parse(rulesData)

let attempts = examRules.attempts

// timer functions datas

let minutesInput = examRules.minutes

//  let minutesInput = 1
let totalSeconds = parseInt(minutesInput) * 60;
let remaingSeconds =totalSeconds
timer(totalSeconds)
var timerInterval

// timer functions starts

 function timer(remaingSecond){
   timerInterval = setInterval(function () {
    let minutes = Math.floor(remaingSecond / 60);
    
    let seconds = remaingSecond % 60;
    
    document.getElementById("minutes").innerHTML = leadingZero(minutes);
    document.getElementById("seconds").innerHTML = leadingZero(seconds);
    // console.log( minutes + 'm ' + seconds + 's')
    
    if (remaingSecond <= 0) {
      // clearInterval(timerInterval);
      results()
      console.log("completed")
    } else {
      remaingSecond--;
    }
    remaingSeconds =remaingSecond
  }, 1000);
 }

    
    function leadingZero(value){
      if(value<10){
        value ="0"+value;
      }
      else{
        value=value
      }
      return value
    }
    
    // timer functions ends
    
    // max mark as per admin input
document.getElementById("maxTime").innerHTML = `${examRules.minutes} min`
let marks = examRules.marksPerQuestion;
let noQuestion = examRules.noOfquestion;
const maxTotalMarks =(marks*noQuestion)*3;
const maxTotal =document.getElementById("maxTotal");
maxTotal.textContent = maxTotalMarks;

let maxMarksPer = document.querySelectorAll(".maxMarksPer");
maxMarksPer.forEach((e)=>{
  e.textContent= marks*noQuestion;
})


    // Function for show the result
    let remainingAttempts = parseInt(localStorage.getItem("remaingAttempt"))
    function results() {
      clearInterval(timerInterval);
      // timer()
      attempts -=1;
      console.log(attempts)
      localStorage.setItem("remaingAttempt",attempts)
  const user = document.getElementById("user")
let username = localStorage.getItem('username')
user.textContent = username

// data of scores and percentage
  let localScoreData = JSON.stringify(scoreCal());
  localStorage.setItem('scoresData',localScoreData)
  let data =localStorage.getItem("scoresData");
  let result = JSON.parse(data)
  
  
  console.log(result)
  document.getElementById("quanMarks").innerHTML = result.quan
  document.getElementById("logicMarks").innerHTML = result.logical
  document.getElementById("verbalMarks").innerHTML = result.verbal
  document.getElementById("totalMarks").innerHTML = result.total
  document.getElementById("attempt").innerHTML = attempts

  let timeTaken =  totalSeconds - remaingSeconds
  let min = Math.floor(timeTaken/60)
  let sec = timeTaken % 60
  document.getElementById("timeTaken").innerHTML =`${leadingZero(min)} : ${leadingZero(sec)}`
  modifyModal.style.display = "block";

  const perecntageResult = document.getElementById("perecntageResult")
  if(result.percentage >= examRules.passPercent){
    perecntageResult.innerHTML = `Congrats You Got <span class="gradient-text" style="font-size: 32px">${result.percentage}%</span>  Passed the test`
  }
  else{
    console.log("sorry Your fail try again")
    perecntageResult.innerHTML = `Sorry You Got only <span class="gradient-text" style="font-size: 32px">${result.percentage}%</span> Try again`
  }

console.log(remainingAttempts)
  if(attempts ===0 ){
    document.getElementById("attempt").innerHTML = "0"
    document.getElementById("tryAgain").style.display ="none"
    goBack.style.display ="block"
  
    setTimeout(() => {
      alert("Your Exam is Completed Successfully")
    }, 3000);
    setTimeout(() => {
      window.location.href="./rules.html"
    }, 15000);
  }
}

goBack.addEventListener("click",()=>{
  alert("You will redirect in 5sec")
  setTimeout(() => {
    window.location.href="./rules.html"
  }, 5000);
  
  
})




// submit button event
submit.addEventListener("click",results)

tryAgain.addEventListener("click",()=>{
  alert("next attempt Starts in 10 sec")
  setTimeout(() => {
   modifyModal.style.display = "none"
   timer(totalSeconds)
  
 }, 5000);
})

