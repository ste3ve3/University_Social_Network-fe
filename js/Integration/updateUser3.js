// Updating user1

const signUpCoverSubmitData = document.getElementById("signUpCoverSubmitData");
const signUpCoverMessage = document.getElementById("signUpCoverMessage");

signUpCoverMessage.style.display = "none"

signUpCoverSubmitData.addEventListener("click", (event) =>{
    event.preventDefault();
    signUpCoverMessage.style.display = "block"
    
    signUpCoverMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`
    
    UpdateUser3();

    });


function UpdateUser3(){
const userDateOfBirth = document.getElementById("userDateOfBirth");
const userPhoneNumber = document.getElementById("userPhoneNumber");


    const data = {
        dateOfBirth: userDateOfBirth.value,
        phoneNumber: userPhoneNumber.value
    }

    const sendData = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

fetch("https://university-social-network-be.herokuapp.com/register/updateUser3", sendData)
.then(response => response.json())
.then((fetchedData)=>{
console.log(fetchedData)

if (fetchedData.message){
    signUpCoverMessage.style.color = "green"
    signUpCoverMessage.innerHTML = fetchedData.message
    setTimeout(()=>{location = "signin.html"}, 2000)
}
})
}


