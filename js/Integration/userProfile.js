async function UserProfile(){
  const getData = {
      method: "GET",
      headers: {"auth_token": JSON.parse(sessionStorage.getItem("token"))}
  }

let response = await fetch("http://localhost:5000/login/loggedInUser", getData)
const profileFetchedData = await response.json()



const userProfileNames = document.getElementById("userProfileNames");
userProfileNames.innerHTML = profileFetchedData.firstName +"  "+ profileFetchedData.lastName

const userProfileEmail = document.getElementById("userProfileEmail");
userProfileEmail.innerHTML = profileFetchedData.email

const ImageDiv = document.getElementById("ImageDiv");
const profileImageLinkLeft = document.getElementById("profileImageLinkLeft")
ImageDiv.innerHTML = profileFetchedData.firstName.charAt(0) +""+ profileFetchedData.lastName.charAt(0)

if (profileFetchedData.imageLink) {
profileImageLinkLeft.src = `http://localhost:5000/images/${profileFetchedData.imageLink}`
ImageDiv.style.display = "none"
}

else{
profileImageLinkLeft.style.display = "none"
}




const userProfileBio = document.getElementById("userProfileBio");
if (profileFetchedData.bio){
userProfileBio.innerHTML = profileFetchedData.bio
}

else{
userProfileBio.innerHTML = "Your biography goes here!"
}


const profileFaculty = document.getElementById("profileFaculty");
if(profileFetchedData.faculty){
profileFaculty.innerHTML = `<span style="text-decoration: underline; color: white;"> Faculty</span>: ${profileFetchedData.faculty}`
}

else{
profileFaculty.innerHTML = ""
}


const profileDepartment = document.getElementById("profileDepartment");
if(profileFetchedData.department){
profileDepartment.innerHTML = `<span style="text-decoration: underline; color: white;">Department</span>: ${profileFetchedData.department}`
}

else{
profileDepartment.innerHTML = ""
}

const profileRegistrationNumber = document.getElementById("profileRegistrationNumber");
if(profileFetchedData.regNumber){
profileRegistrationNumber.innerHTML = `<span style="text-decoration: underline; color: white;">Registration Number</span>: ${profileFetchedData.regNumber}`
}

else{
profileRegistrationNumber.innerHTML = ""
}


const profileDateOfBirth = document.getElementById("profileDateOfBirth");
if(profileFetchedData.dateOfBirth){
profileDateOfBirth.innerHTML = `<span style="text-decoration: underline; color: white;">Date Of Birth</span>: ${profileFetchedData.dateOfBirth}`
}

else{
profileDateOfBirth.innerHTML = ""
}


const profileYearOfStudy = document.getElementById("profileYearOfStudy");
if(profileFetchedData.yearOfStudy){
profileYearOfStudy.innerHTML = `<span style="text-decoration: underline; color: white;">Year Of Study</span>: ${profileFetchedData.yearOfStudy}`
}

else{
profileYearOfStudy.innerHTML = ""
}


const profilePhoneNumber = document.getElementById("profilePhoneNumber");
if(profileFetchedData.phoneNumber){
profilePhoneNumber.innerHTML = `<span style="text-decoration: underline; color: white;">Phone number</span>: ${profileFetchedData.phoneNumber}`
}

else{
profilePhoneNumber.innerHTML = ""
}





// edit profile section
const profilePicRight = document.getElementById("profilePicRight");
const profileImageLink = document.getElementById("profileImageLink")
profilePicRight.innerHTML = profileFetchedData.firstName.charAt(0) +""+ profileFetchedData.lastName.charAt(0)

if (profileFetchedData.imageLink) {
profileImageLink.src = `http://localhost:5000/images/${profileFetchedData.imageLink}`
profilePicRight.style.display = "none"
}

else{
profileImageLink.style.display = "none"
}




const profileFirstName = document.getElementById("profileFirstName");
profileFirstName.value = profileFetchedData.firstName


const profileLastName = document.getElementById("profileLastName");
profileLastName.value = profileFetchedData.lastName

// const profileEmail = document.getElementById("profileEmail");
// profileEmail.value = profileFetchedData.email

const profileBio = document.getElementById("profileBio");
if (profileFetchedData.bio){
profileBio.value = profileFetchedData.bio
}

else{
profileBio.placeholder = "Add your biography here"
}

const UserProfileFaculty = document.getElementById("UserProfileFaculty");
if(profileFetchedData.faculty){
UserProfileFaculty.value = profileFetchedData.faculty
}

const UserProfileDepartment = document.getElementById("UserProfileDepartment");
if(profileFetchedData.department){
UserProfileDepartment.value = profileFetchedData.department
}

else{
UserProfileDepartment.placeholder = "Add your department here"
}


const UserProfileRegistrationNumber = document.getElementById("UserProfileRegistrationNumber");
if(profileFetchedData.regNumber){
UserProfileRegistrationNumber.value = profileFetchedData.regNumber
}

else{
UserProfileRegistrationNumber.placeholder = "Add your registration number here"
}

const UserProfileYearOfStudy = document.getElementById("UserProfileYearOfStudy");
if(profileFetchedData.yearOfStudy){
UserProfileYearOfStudy.value = profileFetchedData.yearOfStudy
}

else{
UserProfileYearOfStudy.placeholder = "Add your year of study here"
}

const UserProfileDateOfBirth = document.getElementById("UserProfileDateOfBirth");
if(profileFetchedData.dateOfBirth){
UserProfileDateOfBirth.value = profileFetchedData.dateOfBirth
}

else{
UserProfileDateOfBirth.placeholder = "Add your date of birth here"
}

const UserProfilePhoneNumber = document.getElementById("UserProfilePhoneNumber");
if(profileFetchedData.phoneNumber){
UserProfilePhoneNumber.value = profileFetchedData.phoneNumber
}

else{
UserProfilePhoneNumber.placeholder = "Add your phone number here"
}


}

UserProfile()



// Updating user profile

const updateChanges = document.getElementById("updateChanges");
const profileMessage = document.getElementById("profileMessage");

profileMessage.style.display = "none"

updateChanges.addEventListener("click", (event) =>{
event.preventDefault();
profileMessage.style.display = "block"

profileMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

UpdateUserProfile();
});


function UpdateUserProfile(){
const profileFirstName = document.getElementById("profileFirstName");
const profileLastName = document.getElementById("profileLastName");
const profileBio = document.getElementById("profileBio");
const file = document.getElementById("file");
const profileFaculty = document.getElementById("UserProfileFaculty");
const profileDepartment = document.getElementById("UserProfileDepartment");
const profileRegistrationNumber = document.getElementById("UserProfileRegistrationNumber");
const profileYearOfStudy = document.getElementById("UserProfileYearOfStudy");
const profileDateOfBirth = document.getElementById("UserProfileDateOfBirth");
const profilePhoneNumber = document.getElementById("UserProfilePhoneNumber");


const formData = new FormData();
    formData.append("firstName", profileFirstName.value);
    formData.append("lastName", profileLastName.value);
    formData.append("faculty", profileFaculty.options[profileFaculty.selectedIndex].text);
    formData.append("department", profileDepartment.value);
    formData.append("regNumber", profileRegistrationNumber.value);
    formData.append("yearOfStudy", profileYearOfStudy.value);
    formData.append("dateOfBirth", profileDateOfBirth.value);
    formData.append("phoneNumber", profilePhoneNumber.value);
    formData.append("bio", profileBio.value);
    formData.append("image", file.files[0]);


const sendData = {
    method: "PUT",
    body: formData,
    headers: new Headers({"auth_token": JSON.parse(sessionStorage.getItem("token"))})
}

fetch("http://localhost:5000/login/updateUser", sendData)
.then(response => response.json())
.then((fetchedData)=>{
console.log(fetchedData)

if (fetchedData.message){
    profileMessage.style.color = "green"
    profileMessage.innerHTML = fetchedData.message
    location = "userProfile.html"
}
})
}