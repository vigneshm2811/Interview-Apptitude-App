
// data of exam rules modification
let rulesData = localStorage.getItem('examRules')
let examRules = JSON.parse(rulesData)


// timer functions starts
let maxtime = examRules.minutes - 1 ;
// let maxtime = 1-1;
document.getElementById("minutes").innerHTML =leadingZero(maxtime);

let secCountdown = setInterval(secCounter,1000)
let minCountdown = setInterval(minCounter,60000)

let sec=60;
function leadingZero(value){
  if(value<10){
    value ="0"+value;
  }
  else{
    value=value
  }
  return value
}
function minCounter(){
  if(maxtime !=0 && maxtime>0){
    maxtime-=1;
  }
  if(maxtime === 0){
    clearInterval(secCountdown)
  clearInterval(minCountdown)
   }
  console.log(maxtime)
  document.getElementById("minutes").innerHTML = leadingZero(maxtime);

 }
function secCounter(){
 sec-=1;
 document.getElementById("seconds").innerHTML = leadingZero(sec);
  if(sec === 0){
   sec=59;
  }
}

// timer functions ends

let remainingAttempts = examRules.remainigAttempts


modifyClose .addEventListener("click",()=> modifyModal.style.display = "none")

submit.addEventListener("click",()=>{
  remainingAttempts -=1;
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
  document.getElementById("attempt").innerHTML = remainingAttempts
  modifyModal.style.display = "block";

  clearInterval(secCountdown)
  clearInterval(minCountdown)

  if(remainingAttempts ===0 ){
    document.getElementById("attempt").innerHTML = "out of attempt"
    let goBack =document.getElementById("goBack")
    document.getElementById("tryAgain").style.display ="none"
    goBack.style.display ="block"
    goBack.addEventListener("click",()=>{
      window.location.href="./rules.html"

    })
    setTimeout(() => {
      window.location.href="./rules.html"
    }, 15000);
  }
})

