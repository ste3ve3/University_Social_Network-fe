// Updating user1

const signUpNextSubmitData = document.getElementById("signUpNextSubmitData");
const signUpNextMessage = document.getElementById("signUpNextMessage");

signUpNextMessage.style.display = "none"

signUpNextSubmitData.addEventListener("click", (event) =>{
    event.preventDefault();
    signUpNextMessage.style.display = "block"
    
    signUpNextMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`
    
    UpdateUser1();

    });


function UpdateUser1(){
const userFaculty = document.getElementById("userFaculty");
const userDepartment = document.getElementById("userDepartment");
const userRegNumber = document.getElementById("userRegNumber");
const userYearOfStudy = document.getElementById("userYearOfStudy");
// const userTranscript = document.getElementById("userTranscript");
// const userDateOfBirth = document.getElementById("userDateOfBirth");
// const userPhoneNumber = document.getElementById("userPhoneNumber");


// const formData = new FormData();
//     formData.append("faculty", userFaculty.options[userFaculty.selectedIndex].text);
//     formData.append("department", userDepartment.value);  
//     formData.append("regNumber", userRegNumber.value);
//     formData.append("yearOfStudy", userYearOfStudy.value);
    // formData.append("transcript", userTranscript.files[0]);
    // formData.append("dateOfBirth", userDateOfBirth.value);
    // formData.append("phoneNumber", userPhoneNumber.value);  

    const data = {
        faculty: userFaculty.options[userFaculty.selectedIndex].text,
        department: userDepartment.value,
        regNumber: userRegNumber.value,
        yearOfStudy: userYearOfStudy.value,
    }

    const sendData = {
        method: "PUT",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

fetch("http://localhost:5000/register/updateUser1", sendData)
.then(response => response.json())
.then((fetchedData)=>{
console.log(fetchedData)

if (fetchedData.message){
    signUpNextMessage.style.color = "green"
    signUpNextMessage.innerHTML = fetchedData.message
    setTimeout(()=>{location = "signupprofile.html"}, 2000)
}
})
}


