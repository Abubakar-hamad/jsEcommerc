// <<<<<<<<<<<<<<<<<< variable >>>>>>>>>>>>>>>>>>>>>>>//

let btnLogin = document.querySelector(".login-form")
let loginUserInput= document.getElementById("loginUsername")
let loginPassInput= document.getElementById("loginPassword")





// <<<<<<<<<<<<<<<<<< event >>>>>>>>>>>>>>>>>>>>>>>//
btnLogin.addEventListener("submit", loginUser)


// <<<<<<<<<<<<<<<<<< function >>>>>>>>>>>>>>>>>>>>>>>//

function loginUser(e) {
    e.preventDefault();
    
    if (loginUserInput.value === "" || loginPassInput.value === "") {
        alert("some field it Empty !! ")
    } else {
        if (loginUserInput.value !== localStorage.getItem("username") || loginPassInput.value !== localStorage.getItem("password")) {
            alert("username or password wrong !!")
        } else {
            setTimeout(() => {
                window.location = "../index.html"
            },500)
        }
    }
    
   
}