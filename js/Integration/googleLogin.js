

// const loginMessage = document.getElementById("loginMessage");

const myLoginGoogleButton = document.getElementById("loginGoogle");

// loginMessage.style.display = "none"

myLoginGoogleButton.addEventListener("click", ()=>{
    // loginMessage.style.display = "block";
    // loginMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

    location = "http://localhost:5000/google"
})