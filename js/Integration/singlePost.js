// Get Single Post

let getSinglePost= async(myKey) => {

    const getOptions = {
    
        method: 'GET',
        headers: {
        
         'auth-token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }



    let response = await fetch('https://university-social-network-be.herokuapp.com/getSinglePost/'+myKey, getOptions)
    const fetchSinglePost = await response.json();
    console.log(fetchSinglePost)

        if(fetchSinglePost.fetchedPost){ 
           location="singlePost.html"
           localStorage.setItem("postId", fetchSinglePost.fetchedPost._id)
        }
    
}


//View blog details

const postId = localStorage.getItem("postId")

async function getPost(){
const getOptions = {
    
    method: 'GET',
    headers: {
    
     'auth-token': JSON.parse(sessionStorage.getItem('token'))
 
   },
}



let response = await fetch('https://university-social-network-be.herokuapp.com/getSinglePost/'+postId, getOptions)
const fetchedPost = await response.json();
console.log(fetchedPost)

const singlePost = fetchedPost.fetchedPost;

const postTitle = document.getElementById("postTitle")
postTitle.innerHTML = singlePost.title;

const postDate = document.getElementById("postDate")
postDate.innerHTML = singlePost.date

const postImage = document.getElementById("postImage")
postImage.src = singlePost.imgLink;

const postBody = document.getElementById("postBody")
postBody.innerHTML = singlePost.body;

const postAuthorName = document.getElementById("postAuthorName")
postAuthorName.innerHTML = singlePost.authorName;

const authorImage = document.getElementById("authorImage")
authorImage.src = singlePost.authorImage;

const authorImage2 = document.getElementById("authorImage2")
authorImage2.src = singlePost.authorImage;

}

getPost()