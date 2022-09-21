// update user2

const signUpProfileSubmitData = document.getElementById("signUpProfileSubmitData");
const signUpProfileMessage = document.getElementById("signUpProfileMessage");

signUpProfileMessage.style.display = "none"

signUpProfileSubmitData.addEventListener("click", (event) =>{
    event.preventDefault();
    signUpProfileMessage.style.display = "block"
    
    signUpProfileMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`
    
    UpdateUser2();

    });

function UpdateUser2(){

    const userTranscript = document.getElementById("userTranscript");
    const transcriptImage = document.getElementById("transcriptImage");
    
    const formData = new FormData();
        formData.append("transcript", userTranscript.files[0]);
    
    
        const sendData = {
            method: "PUT",
            body: formData,
            headers: new Headers({})
        }
    
    fetch("http://localhost:5000/register/updateUser2", sendData)
    .then(response => response.json())
    .then((fetchedData)=>{
    console.log(fetchedData)
    
    if (fetchedData.message){
        signUpProfileMessage.style.color = "green"
        signUpProfileMessage.innerHTML = fetchedData.message
        transcriptImage.src = fetchedData.UpdatedUser.transcript
        console.log(fetchedData.UpdatedUser.transcript)
        setTimeout(()=>{location = "signupcover.html"}, 4000)
    }
    })
    }