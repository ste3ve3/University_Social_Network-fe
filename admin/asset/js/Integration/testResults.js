// Delete Results

let deleteResult= async(myKey) => {

    const deleteOptions = {
    
        method: 'DELETE',
        headers: {
        
         'auth-token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }

    let response = await fetch('http://localhost:5000/deleteResult/'+myKey, deleteOptions)
    const fetchDeletedPost = await response.json();
    console.log(fetchDeletedPost)
        if(fetchDeletedPost.deletedResult){ 
            location="testResults.html"
        }
    
}

// Send Invitation

let sendInvitation= async(myKey) => {
    invitationMessage.style.display = "block";   
    invitationMessage.innerHTML = `<img src="../images/Spinner.gif" alt="Loading..." width="50px" height="50px">`

    invitationMessage.style.color = "green";
    setTimeout(()=>{invitationMessage.innerHTML = "Invitation Sent Successfully!"}, 3000)
    setTimeout(()=>{location = "testResults.html"}, 5000)
    
    const deleteOptions = {
    
        method: 'GET',
        headers: {
        
         'auth-token': JSON.parse(sessionStorage.getItem('token'))
     
       },
    }

    let response = await fetch('http://localhost:5000/sendInvitation/'+myKey, deleteOptions)
    const fetchInvitationPost = await response.json();
    console.log(fetchInvitationPost)
        
        
    
}


// Get results


async function fetchResults(){
    const invitationMessage = document.getElementById("invitationMessage");
    invitationMessage.style.display = "none";
        
    let response = await fetch("http://localhost:5000/getAllResults")
    
    const allResults = await response.json(); 
    const results = allResults.testResults;
    console.log(results);
   
    for(let i=0;i<results.length;i++){
        let resultsContainer = document.getElementById("testResultsContainer");

        let resultsArray = results[i];

        let title = resultsArray.postTitle;
        let testResult   = resultsArray.testResult;
        let resultId = resultsArray._id
        let name = resultsArray.name;
        let email = resultsArray.email;
        
      if(1>0) {

        let postTemplate = `
    
        <div class="col-md-6" id="${resultId}">
            <div class="panel box-v1">
                <div class="panel-body text-center" style="padding-bottom: 20px; font-size: 15px;">
                On Post <span style="color: #0c66ae;">${title}</span>, ${name}
                (${email}) got &nbsp;<span style="text-decoration: underline; color: #0c66ae;">${testResult}/10</span> 
                </div>
                <div style="font-size: 20px; text-align: right; padding-bottom: 8px; padding-right: 20px;" id= '${resultId}' onclick="deleteResult('${resultId}')">
                <i class="fa fa-trash" aria-hidden="true"></i>
                </div>

                <div style="font-size: 16px; text-align: center; padding-bottom: 20px;  border-top: 5px solid #f0f3f4; " id= '${resultId}' onclick = "sendInvitation('${resultId}')">
               
                <button id="postSubmitData" class="add-btn" style="margin-top: 20px;
                border: none;
                background: #ff6b6b;
                padding: 5px 20px; color: white;"><span class="fa fa-envelope-o"></span> Send Invitation </button>
                </div>
            </div>
        </div>

        
        `
        resultsContainer.innerHTML += postTemplate;
    
    }
    
        }
        
    }

fetchResults();





