const user = document.getElementById("user")
let username = localStorage.getItem('username')
user.textContent = username

let data =localStorage.getItem("scoresData");
let result = JSON.parse(data)

let rulesData = localStorage.getItem('examRules')
let examRules = JSON.parse(rulesData)

// max mark as per admin input
let markss = examRules.marksPerQuestion
let noQuestion = examRules.noOfquestion

const maxTotal =document.getElementById("maxTotal")
maxTotal.textContent = (markss*noQuestion)*3

let maxMarksPer = document.querySelectorAll(".maxMarksPer");
maxMarksPer.forEach((e)=>{
  e.textContent= markss*noQuestion
})

console.log(result)
document.getElementById("quanMarks").innerHTML = result.quan
document.getElementById("logicMarks").innerHTML = result.logical
document.getElementById("verbalMarks").innerHTML = result.verbal
document.getElementById("totalMarks").innerHTML = result.total


window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "light2", "dark1", "dark2"
        title: {
            text: "Scores of the User"
        },
        axisY: {
            title: "Scores (in %)",
            suffix: "%"
        },
        axisX: {
            title: "Sections"
        },
        data: [{
            type: "column",
            yValueFormatString: "#,##0.0#\"%\"",
            dataPoints: [
                { label: "Quantative", y: result.quan },
                { label: "Logical", y: result.logical },
                { label: "Verbal", y: result.verbal }
            ]
        }]
    });
    chart.render();

}