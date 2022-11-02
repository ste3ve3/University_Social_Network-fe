const resetPasswordForm = document.getElementById("resetPasswordForm");
const submitnewPassword = document.getElementById("submitnewPassword");

const resetPasswordMessage = document.getElementById("resetPasswordMessage");
resetPasswordMessage.style.display = "none";

submitnewPassword.addEventListener("click", (event) =>{
    event.preventDefault();
    resetPasswordMessage.style.display = "block";   
    resetPasswordMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

    resetPassword();
});


function resetPassword(){
    const resetPassword = document.getElementById("resetPassword");
    const repeatResetPassword = document.getElementById("repeatResetPassword");

    const data = {
        password: resetPassword.value,
        repeatPassword: repeatResetPassword.value
    }

    const sendData = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8', "auth_token": JSON.parse(localStorage.getItem("token"))})
    }

fetch("http://localhost:5000/login/newPassword", sendData)
.then(response => response.json())
.then((resetPasswordFetchedData)=>{
    console.log(resetPasswordFetchedData)

    if (resetPasswordFetchedData.validationError){
        resetPasswordMessage.style.color = "red"
        resetPasswordMessage.innerHTML = resetPasswordFetchedData.validationError
    }

    else if (resetPasswordFetchedData.emailSuccess){
        resetPasswordMessage.style.color = "green"
        resetPasswordMessage.innerHTML = resetPasswordFetchedData.emailSuccess
        setTimeout(()=>{location="signin.html"}, 4000)
    }

    else {
        resetPasswordMessage.style.color = "red"
        resetPasswordMessage.innerHTML = resetPasswordFetchedData.message
    }
})

}