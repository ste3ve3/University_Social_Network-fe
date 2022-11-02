async function socialMediaLoggedInUser(){
    const getData = {
        method: "GET",
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

  let response = await fetch("http://localhost:5000/socialMediaLoggedInUser", getData)
  const fetchedData = await response.json()
  console.log(fetchedData)



    


    



  const addProfile = document.getElementById("addProfile");
  addProfile.innerHTML = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
      <title>Document</title>



      <style>
          
        div.profilePicture img{
            width: 50px;
            height: 50px;
            border-radius: 50%; 
            cursor: pointer; 
            background: none;
        }
        
        div.profilePictureIn img{
            width: 90px;
            height: 90px;
            border-radius: 50%; 
            cursor: pointer; 
            background: none;
        }
        
        div.userProfile{
            position: fixed;
            background-color: #414A4C;
            border-radius: 10px;
            z-index: 3;
            top: 65px;
            right: 95px;
            width: 300px;
            text-align: center;
            text-align: center;
            padding-top: 20px;
            color: white;
            Height: 500px;
        }
        
        a.ManageAccountLink{
            text-decoration: none;
            padding: 7px 15px;
            border-radius: 5px;
            color: black;
            background: white;
        }

        a.ManageAccountLink:hover{
            background: white;
            color: black;
            border: 2px solid black;
        }

        img.topProfileImage{
            background: none;
            width: 55px;
            height: 55px;
            border-radius: 50%;
            cursor: pointer;
            text-align: center;
           
        }

        div.profilePictureIn{ 
            width: 80px;
            height: 80px;
            border-radius: 50%;
            margin-left: 105px;
            margin-bottom: 20px;
            line-height: 80px;
            font-weight: bold;
            font-size: 30px;
            cursor: pointer;
        }

        img.inProfileImage{
            background: none;
            color: black;
            width: 100px;
            height: 100px;
            border-radius: 50%;
            margin-left: 100px;
            margin-bottom: 20px;
            line-height: 80px;
            font-weight: bold;
            font-size: 30px;
            cursor: pointer;
        }

        p.userFetchedEmail{
            margin-top: 5px;
            margin-bottom: 50px;
            color: white;
        }

        div.switchAccount{
            border-top: 1px solid white;
            padding-top: 20px;
            margin-bottom: -30px;
        }

        p.switchAccountLink{
            border: 1px solid white; 
            padding: 5px; 
            border-radius: 5px; 
            cursor: pointer; 
            background: white;
            color: black;
        }

        p.switchAccountLink:hover{
            background: white;
            color: black;
        }
        div.preNavLogin {
           padding-top: 50px;
        }

        div.preNavLogin h5 a{
            text-decoration: none;
            border: 2px solid white;
            padding: 7px 15px;
            border-radius: 5px;
            
            background: black;
        }
        
        div.preNavLogin h5 a:hover{
            border: 2px solid black;
        }


      </style>
  </head>
  <body>
      <div class="profilePicture" id="profilePicture">
        <img src="${fetchedData.user.picture}" alt=""></img>
      </div>
          
      <div class="userProfile" id="userProfile">
          <div class="profilePictureIn" id="profilePictureIn">
            <img src="${fetchedData.user.picture}" alt=""></img>
          </div>

          <h3>${fetchedData.user.userName}</h3>
          <p class="userFetchedEmail" style="font-weight: 500;">${fetchedData.user.email}</p>
          <a href="socialMediaUserProfile.html" class="ManageAccountLink">Edit profile</a>
          <br><br>

          <div class="switchAccount" style=" padding: 30px 50px 58px 50px;">
                <p class="switchAccountLink"> 
                <img src="images/menu-icon/flag.png" title="" alt="">
                Find Profiles
                </p>
          </div>

          <div class="preNavLogin" style="border-top: 1px solid #cba10a;">
              <h5><a onClick="socialMediaLogoutUser()">Logout</a></h5>
          </div>
      </div>
      

  </body>
  </html>
  `

        const UserProfilePicture = document.getElementById("profilePicture");
        const UserProfile = document.getElementById("userProfile");
        const HideUserProfile = document.querySelectorAll("[id='hideUserProfile']");
        const myProfile = document.getElementById("myProfile");
        const myFooterCopyRight = document.getElementById ("myFooterCopyRight")

        addProfile.style.display = "block";
        addProfile.style.marginLeft = "50px";
        const preNavLogin = document.getElementById("preNavLogin");
        preNavLogin.style.display = "none"


        UserProfile.style.display = "none";

        UserProfilePicture.addEventListener("click", ()=>{
        if(UserProfile.style.display !== "none"){
            UserProfile.style.display = "none"
        }

        else {
            UserProfile.style.display = "block"
        }
        })


        for(var i = 0; i < HideUserProfile.length; i++) 
        HideUserProfile[i].addEventListener("click", ()=>{
        UserProfile.style.display = "none"
        })

        // myProfile.addEventListener("click", ()=>{
        // UserProfile.style.display = "none"
        // })

        // myFooterCopyRight.addEventListener("click", ()=>{
        // UserProfile.style.display = "none"
        // })
}


socialMediaLoggedInUser()