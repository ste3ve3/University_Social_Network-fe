async function registeredUsers(){
    const getData = {
        method: "GET",
        headers: {"auth_token": JSON.parse(sessionStorage.getItem("token"))}
    }

  let response = await fetch("http://localhost:5000/register/getRegisteredUsers", getData)
  const fetchedData = await response.json()
   
    const users = fetchedData.RegisteredUsers;
    console.log(users);
    for(let i=0;i<users.length;i++){

        let usersArray = users[i];
        console.log(usersArray);
        const nameAbbreviation = usersArray.firstName.charAt(0) +""+usersArray.lastName.charAt(0);
        let image
        if(!usersArray.imageLink){
            image = nameAbbreviation 
        }
        else{
            image = `<img src="http://localhost:5000/images/${usersArray.imageLink}" alt="" id="imagePicture">`
        }

        const name = usersArray.firstName +" "+usersArray.lastName;
        let faculty
        if(!usersArray.faculty){
          faculty = "Not a student" 
        }
        else{
          faculty = usersArray.faculty
        }

  const addUsers = document.getElementById("addUsers");

  if(1>0) {

  const usersTemplate = `
  <div class="col-md-3 col-xs-12 col-sm-6 p-left" >
        <div class="mainbox" style="text-align: center; height: 300px">
            <div class="imgbox" 
            style="
            background: black;
            color: white;
            width: 240px;
            height: 166px;
            line-height: 165px;
            font-weight: bold;
            font-size: 70px;
            cursor: pointer;
            text-align: center;
            "
            >
             
             ${image} 
              
            </div>
            <div class="lefttext" >
            ${name}
            </div>
            <div class="leftBottomtext" id="leftBottomtext" style="dispay: block;">
            ${faculty}
            </div>
            <div class="righttext">
                <a href="chat.html">Chat</a>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
  `
  addUsers.innerHTML += usersTemplate;
  }
  

    } 



}

registeredUsers()

