
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
