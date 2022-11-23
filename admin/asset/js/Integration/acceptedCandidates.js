// Get registered users

async function fetchAcceptedCandidates(){
        
    let response = await fetch("http://localhost:5000/getAllAcceptedCandidates")
    
    const allCandidates = await response.json(); 
    const candidates = allCandidates.acceptedCandidates;
    console.log(candidates);
   
    for(let i=0;i<candidates.length;i++){
        let usersContainer = document.getElementById("usersContainer");
        
 
        let usersArray = candidates[i];

        let name = usersArray.name;
        let postTitle = usersArray.postTitle;
        let userId = usersArray._id
        let email = usersArray.email;
        let testResult = usersArray.testResult;
        let Status = usersArray.Status;
        
      if(1>0) {

        let userTemplate = `
    
            <tr id="${userId}">
                <td>${name}</td>
                <td>${email}</td>
                <td>${postTitle}</td>
                <td>${testResult}</td>
                <td>${Status}</td>
            </tr>

        
        `
        
       
        
        
        usersContainer.innerHTML += userTemplate;
    
    }
    
        }
        
    }

fetchAcceptedCandidates();