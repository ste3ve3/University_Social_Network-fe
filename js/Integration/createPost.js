
// create a post

const opportunityForm = document.getElementById("opportunityForm");

const opportunitySubmitData = document.getElementById("opportunitySubmitData");

const opportunityMessage = document.getElementById("opportunityMessage");
opportunityMessage.style.display = "none";

opportunitySubmitData.addEventListener("click", (event) =>{
    event.preventDefault();
    opportunityMessage.style.display = "block";   
    opportunityMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

    opportunity();
});


function opportunity() {

    const opportunityTitle = document.getElementById("opportunityTitle");
    const opportunityBody = document.getElementById("opportunityBody");
    const opportunityAuthorName = document.getElementById("opportunityAuthorName");
    const opportunityPostPicture = document.getElementById("opportunityPostPicture")
    const opportunityAuthorPicture = document.getElementById("opportunityAuthorPicture")
    const opportunityCategory = document.getElementById("opportunityCategory")

    const formData = new FormData();
    formData.append("title", opportunityTitle.value);
    formData.append("body", opportunityBody.value);
    formData.append("authorName", opportunityAuthorName.value);
    formData.append("category", opportunityCategory.options[opportunityCategory.selectedIndex].text);
    formData.append("author", opportunityAuthorPicture.files[0]);
    formData.append("post", opportunityPostPicture.files[0]);

    

    const UserRequestOptions = {
        method: 'POST',
        body: formData,
        headers: {'auth-token': JSON.parse(sessionStorage.getItem('token'))},
     };
     
fetch('http://localhost:5000/createPost', UserRequestOptions,)
.then(response => response.json())
.then((opportunityFetchedData)=>{
    console.log(opportunityFetchedData)

    if (opportunityFetchedData.postSuccess){
        opportunityMessage.style.color = "green"
        opportunityMessage.innerHTML = opportunityFetchedData.postSuccess
        // setTimeout(()=>{opportunityForm.reset()}, 3000)
    }

    else if (opportunityFetchedData.validationError){
        opportunityMessage.style.color = "red"
        opportunityMessage.innerHTML = opportunityFetchedData.validationError
    }

    else {
        opportunityMessage.style.color = "red"
        opportunityMessage.innerHTML = opportunityFetchedData.message
    }
})
        
}