let createModal = document.getElementById("createModal");
let modifyModal = document.getElementById("modifyModal");
let reportModal = document.getElementById("reportModal");
let createBtn = document.getElementById("createBtn");
let modifyBtn = document.getElementById("modifyBtn");
let reportBtn = document.getElementById("reportBtn");

let modifyClose = document.getElementById("modifyClose");
let reportClose = document.getElementById("reportClose");
let createClose = document.getElementById("createClose");

let addBtn = document.getElementById("addBtn");



createBtn.addEventListener("click",()=>{
    createModal.style.display = "block";
})
modifyBtn.addEventListener("click",()=>{
    modifyModal.style.display = "block";
})
reportBtn.addEventListener("click",()=>{
    reportModal.style.display = "block";
})


createClose.addEventListener("click",()=>createModal.style.display = "none")
modifyClose .addEventListener("click",()=> modifyModal.style.display = "none")
reportClose.addEventListener("click",()=>reportModal.style.display = "none")

addBtn.addEventListener("click", ()=>{
    createModal.style.display = "none"
})



// slider for reports

let graph = document.querySelector(".graph");
let marks = document.querySelector(".marks");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");
marks.classList.add("bg")

graph.addEventListener("click", () => {
    // slider.classList.add("moveslider");
    graph.classList.add("bg");
    marks.classList.remove("bg")
    formSection.classList.add("form-section-move");
});
marks.addEventListener("click", () => {
    // slider.classList.remove("moveslider");
    marks.classList.add("bg");
    graph.classList.remove("bg")
    formSection.classList.remove("form-section-move");
});
