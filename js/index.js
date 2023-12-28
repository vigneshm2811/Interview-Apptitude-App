
let signup = document.querySelector(".signup");
let login = document.querySelector(".login");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

let stdUsername = document.getElementById("stdUsername");
let stdPassword = document.getElementById("stdPassword");
let adminUsername = document.getElementById("adminUsername");
let adminPassword = document.getElementById("adminPassword");

const userLoginBtn = document.getElementById("userLoginBtn");
const adminLoginBtn = document.getElementById("adminLoginBtn");


let adminAuth =document.getElementById("admin-login-p")
 
signup.addEventListener("click", () => {
    slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
});
 
login.addEventListener("click", () => {
    slider.classList.remove("moveslider");
    formSection.classList.remove("form-section-move");
});

adminLoginBtn.addEventListener("click",()=>{
    let username = adminUsername.value;
    let password = adminPassword.value;
    if(username === "admin" && password ==="admin"){
        window.location.href = "./main/admin.html";
    }
    else{
        adminAuth.innerHTML ="Enter valid Login"
    }
    adminUsername.value=""
    adminPassword.value=""
})


userLoginBtn.addEventListener("click",()=>{
    let username = stdUsername.value;
    let password = stdPassword.value;

    console.log(username)
if(username !="" && password != ""){
    window.location.href = "./main/rules.html";
    localStorage.setItem("username",username);
}
    stdUsername.value=""
    stdPassword.value=""
  
})