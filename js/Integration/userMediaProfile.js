async function UserProfile(){
    const getData = {
        method: "GET",
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }
  
  let response = await fetch("https://university-social-network-be.herokuapp.com/socialMediaLoggedInUser", getData)
  const profileMediaFetchedData = await response.json()
  console.log(profileMediaFetchedData)
  
  
  const userProfileNames = document.getElementById("userProfileNames");
  userProfileNames.innerHTML = profileMediaFetchedData.userName
  
  const userProfileEmail = document.getElementById("userProfileEmail");
  userProfileEmail.innerHTML = profileMediaFetchedData.email
  

  const profileImageLinkLeft = document.getElementById("profileImageLinkLeft")
  profileImageLinkLeft.src = profileMediaFetchedData.picture

  const userProfileBio = document.getElementById("userProfileBio");
  if (profileMediaFetchedData.bio){
  userProfileBio.innerHTML = profileMediaFetchedData.bio
  }
  
  else{
  userProfileBio.innerHTML = "Your biography goes here!"
  }
  
  
  const profileFacebook = document.getElementById("profileFacebook");
  if(profileMediaFetchedData.profileFacebook){
  profileFacebook.innerHTML = `<img src="../images/profile/facebook_black.png" alt=""> &nbsp; ${profileMediaFetchedData.profileFacebook}`
  }
  
  else{
  profileFacebook.innerHTML = ""
  }
  
  
  const profileTwitter = document.getElementById("profileTwitter");
  if(profileMediaFetchedData.profileTwitter){
  profileTwitter.innerHTML = `<img src="../images/profile/twitter_black.png" alt=""> &nbsp; ${profileMediaFetchedData.profileTwitter}`
  }
  
  else{
  profileTwitter.innerHTML = ""
  }
  
  const profileLinkedin = document.getElementById("profileLinkedin");
  if(profileMediaFetchedData.profileLinkedin){
  profileLinkedin.innerHTML = `<img src="../images/profile/linkedin_black.png" alt=""> &nbsp; ${profileMediaFetchedData.profileLinkedin}`
  }
  
  else{
  profileLinkedin.innerHTML = ""
  }
  
  
  const profileInstagram = document.getElementById("profileInstagram");
  if(profileMediaFetchedData.profileInstagram){
  profileInstagram.innerHTML = `<img src="../images/profile/instagram_black.png" alt=""> &nbsp; ${profileMediaFetchedData.profileInstagram}`
  }
  
  else{
  profileInstagram.innerHTML = ""
  }
  
  
  
  
  
  // edit profile section
  
  const profileBio = document.getElementById("profileBio");
  if (profileMediaFetchedData.bio){
  profileBio.value = profileMediaFetchedData.bio
  }
  
  else{
  profileBio.placeholder = "Add your biography here"
  }
  
  
  const UserProfileFacebook = document.getElementById("UserProfileFacebook");
  if(profileMediaFetchedData.profileFacebook){
  UserProfileFacebook.value = profileMediaFetchedData.profileFacebook
  }
  
  else if(profileMediaFetchedData.profileFacebook = ""){
  UserProfileFacebook.value = ""
  }
  
  else{
  UserProfileFacebook.placeholder = "Add your facebook username here"
  }
  
  const UserProfileTwitter = document.getElementById("UserProfileTwitter");
  if(profileMediaFetchedData.profileTwitter){
  UserProfileTwitter.value = profileMediaFetchedData.profileTwitter
  }
  
  else{
  UserProfileTwitter.placeholder = "Add your twitter username here"
  }
  
  
  const UserProfileLinkedin = document.getElementById("UserProfileLinkedin");
  if(profileMediaFetchedData.profileLinkedin){
  UserProfileLinkedin.value = profileMediaFetchedData.profileLinkedin
  }
  
  else{
  UserProfileLinkedin.placeholder = "Add your linkedin username here"
  }
  
  const UserProfileInstagram = document.getElementById("UserProfileInstagram");
  if(profileMediaFetchedData.profileInstagram){
  UserProfileInstagram.value = profileMediaFetchedData.profileInstagram
  }
  
  else{
  UserProfileInstagram.placeholder = "Add your instagram username here"
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
  const UserProfileFacebook = document.getElementById("UserProfileFacebook");
  const UserProfileTwitter = document.getElementById("UserProfileTwitter");
  const UserProfileLinkedin = document.getElementById("UserProfileLinkedin");
  const UserProfileInstagram = document.getElementById("UserProfileInstagram");
  const profileBio = document.getElementById("profileBio");
  
  
  const data = {
        profileFacebook: UserProfileFacebook.value, 
        profileLinkedin: UserProfileLinkedin.value,
        profileInstagram: UserProfileInstagram.value,
        profileTwitter: UserProfileTwitter.value,
        bio: profileBio.value
    }
  
  
  const sendData = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
  }
  
  fetch("https://university-social-network-be.herokuapp.com/socialMediaUpdateUser", sendData)
  .then(response => response.json())
  .then((fetchedData)=>{
  console.log(fetchedData)
  
  if (fetchedData.message){
      profileMessage.style.color = "green"
      profileMessage.innerHTML = fetchedData.message
      location = "socialMediaUserProfile.html"
  }
  })
  }