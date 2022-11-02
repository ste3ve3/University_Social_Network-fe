const forgotPasswordForm = document.getElementById("forgotPasswordForm");
const submitEmail = document.getElementById("submitEmail");

const forgotPasswordMessage = document.getElementById("forgotPasswordMessage");
forgotPasswordMessage.style.display = "none";

submitEmail.addEventListener("click", (event) =>{
    event.preventDefault();
    forgotPasswordMessage.style.display = "block";   
    forgotPasswordMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

    forgotPassword();
});


function forgotPassword(){
    const forgotPasswordEmail = document.getElementById("forgotPasswordEmail");

    const data = {
        email: forgotPasswordEmail.value,
    }

    const sendData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

fetch("http://localhost:5000/login/forgotPassword", sendData)
.then(response => response.json())
.then((forgotPasswordFetchedData)=>{
    console.log(forgotPasswordFetchedData)

    if (forgotPasswordFetchedData.invalidEmail){
        forgotPasswordMessage.style.color = "red"
        forgotPasswordMessage.innerHTML = forgotPasswordFetchedData.invalidEmail
    }

    else if (forgotPasswordFetchedData.emailSuccess){
        forgotPasswordMessage.style.color = "green"
        forgotPasswordMessage.innerHTML = forgotPasswordFetchedData.emailSuccess
        localStorage.setItem("token", JSON.stringify(forgotPasswordFetchedData.resetToken))
        setTimeout(()=>{forgotPasswordForm.reset()}, 4000)
    }

    else {
        forgotPasswordMessage.style.color = "red"
        forgotPasswordMessage.innerHTML = forgotPasswordFetchedData.message
    }
})

}