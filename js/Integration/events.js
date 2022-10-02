
// create a post

const eventForm = document.getElementById("eventForm");

const eventSubmitData = document.getElementById("eventSubmitData");

const eventMessage = document.getElementById("eventMessage");
eventMessage.style.display = "none";

eventSubmitData.addEventListener("click", (event) =>{
    event.preventDefault();
    eventMessage.style.display = "block";   
    eventMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

    event();
});


function event() {

    const eventTitle = document.getElementById("eventTitle");
    const eventBody = document.getElementById("eventBody");
    const eventAuthorName = document.getElementById("eventAuthorName");
    const eventPostPicture = document.getElementById("eventPostPicture")
    const eventAuthorPicture = document.getElementById("eventAuthorPicture")

    const formData = new FormData();
    formData.append("title", eventTitle.value);
    formData.append("body", eventBody.value);
    formData.append("authorName", eventAuthorName.value);
    formData.append("author", eventAuthorPicture.files[0]);
    formData.append("post", eventPostPicture.files[0]);

    

    const UserRequestOptions = {
        method: 'POST',
        body: formData,
        headers: {'auth-token': JSON.parse(sessionStorage.getItem('token'))},
     };
     
fetch('https://university-social-network-be.herokuapp.com/createPost', UserRequestOptions,)
.then(response => response.json())
.then((eventFetchedData)=>{
    console.log(eventFetchedData)

    if (eventFetchedData.postSuccess){
        eventMessage.style.color = "green"
        eventMessage.innerHTML = eventFetchedData.postSuccess
        // setTimeout(()=>{eventForm.reset()}, 3000)
    }

    else if (eventFetchedData.validationError){
        eventMessage.style.color = "red"
        eventMessage.innerHTML = eventFetchedData.validationError
    }

    else {
        eventMessage.style.color = "red"
        eventMessage.innerHTML = eventFetchedData.message
    }
})
        


}