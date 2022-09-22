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

if(!checkFetchedData.faculty){
    const uptitudeTest = document.getElementById("uptitudeTest");  
    uptitudeTest.style.display = "none" 
}

if(checkFetchedData.faculty === "Faculty of Business"){
    const uptitudeTestLink = document.getElementById("uptitudeTestLink");  
    uptitudeTestLink.href = "uptitudeTestBusiness.html"

    let responseIT = await fetch("http://localhost:5000/getPostsByFaculty/IT")
  const allPosts = await responseIT.json();
  const facultyITPosts = allPosts.fetchedPost;
    console.log(facultyITPosts)
    facultyITPosts.style.display = "none"
}

if(checkFetchedData.faculty === "Faculty of IT"){
    const uptitudeTestLink = document.getElementById("uptitudeTestLink");  
    uptitudeTestLink.href = "uptitudeTestIT.html"

    let response = await fetch("http://localhost:5000/getPostsByFaculty/Business")
    
    const allPosts = await response.json(); 
    const facultyPosts = allPosts.fetchedPost;
    console.log(facultyPosts)
    facultyPosts.style.display = "none"
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




//Continue to blog

async function continueToBlog(){
    //current user
    const getData = {
        method: "GET",
        headers: {"auth_token": JSON.parse(sessionStorage.getItem("token"))}
    }

  let response = await fetch("http://localhost:5000/login/loggedInUser", getData)
  const checkFetchedData = await response.json()

//current post
const postId = localStorage.getItem("postId")
let postResponse = await fetch('http://localhost:5000/getSinglePost/'+postId, getData)
const fetchedPost = await postResponse.json();
const singlePost = fetchedPost.fetchedPost;
     

//result container
const result = document.getElementById('resultScore');
console.log(result)

    const data = {
        name: checkFetchedData.firstName +" "+ checkFetchedData.lastName,
        email: checkFetchedData.email,
        testResult: result.innerHTML,
        postTitle: singlePost.title,
    }

    const sendData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

fetch("http://localhost:5000/saveTestResult", sendData)
.then(response => response.json())
.then((fetchedData)=>{
    console.log(fetchedData)  
})

location = "singlePost.html"

}

//show or hide uptitude test

function uptitudeTest(){
  
  const uptitudeTestLink = document.getElementById("uptitudeTestLink");


}


