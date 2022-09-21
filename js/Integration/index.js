//Show and hide Add Post
const addListing = document.getElementById("addListing");
addListing.style.display = "none";

async function checkLoggedInUser(){
    const getData = {
        method: "GET",
        headers: {"auth_token": JSON.parse(sessionStorage.getItem("token"))}
    }

  let response = await fetch("http://localhost:5000/login/loggedInUser", getData)
  const checkFetchedData = await response.json()
  console.log(checkFetchedData)


if(checkFetchedData.role === "admin"){
    addListing.style.display = "block";
}

}

checkLoggedInUser()



//Protect index.html

const Indextoken = sessionStorage.getItem("token")
if(!Indextoken){
    location = "mainPage.html"
}


// async function socialIndexLoggedInUser(){



//     const getData = {
//         method: "GET",
//         headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
//     }

//   let response = await fetch("http://localhost:5000/socialMediaLoggedInUser", getData)
//   const fetchedData = await response.json()
//   console.log(fetchedData)

//   if (fetchedData.message){
//     location = "mainPage.html"

//   }
// }

// socialIndexLoggedInUser()