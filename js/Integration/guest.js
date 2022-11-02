
function guest(){
    const data = {
        firstName : "Guest",
        lastName : "User",
        email : "Guest",
        password : "12345",
        repeatPassword : "12345"
    }

    const sendData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: new Headers({'Content-Type': 'application/json; charset=UTF-8'})
    }

    fetch("http://localhost:5000/login/guestUser", sendData)
    .then(response => response.json())
    .then((fetchedData)=>{
        console.log(fetchedData)
  
        if (fetchedData.successMessage){
            sessionStorage.setItem("token", JSON.stringify(fetchedData.Access_Token))
            location = "index.html"
        }

    })

}