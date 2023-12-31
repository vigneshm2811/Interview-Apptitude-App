
let admin = document.querySelector("#admin");
let user = document.querySelector("#user");
let slider = document.querySelector(".slider");
let formSection = document.querySelector(".form-section");

let stdUsername = document.getElementById("stdUsername");
let stdPassword = document.getElementById("stdPassword");
let adminUsername = document.getElementById("adminUsername");
let adminPassword = document.getElementById("adminPassword");

const userLoginBtn = document.getElementById("userLoginBtn");
const adminLoginBtn = document.getElementById("adminLoginBtn");


let adminAuth =document.getElementById("admin-login-p")
user.classList.add("bg")

admin.addEventListener("click", () => {
    admin.classList.add("bg");
    user.classList.remove("bg")
    // slider.classList.add("moveslider");
    formSection.classList.add("form-section-move");
    
});
 
user.addEventListener("click", () => {
    // slider.classList.remove("moveslider");
    admin.classList.remove("bg");
    user.classList.add("bg")

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