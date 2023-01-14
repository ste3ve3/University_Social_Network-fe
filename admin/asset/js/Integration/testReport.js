function createPDF() {
    var sTable = document.getElementById('tab').innerHTML;
  
    var style = "<style>";
    style = style + "table {width: 100%;font: 17px Calibri;}";
    style = style + "table, th, td {border: solid 1px #DDD; border-collapse: collapse;";
    style = style + "padding: 2px 3px;text-align: center;}";
    style = style + "</style>";
  
    // CREATE A WINDOW OBJECT.
    var win = window.open('', '', 'height=700,width=700');
  
    win.document.write('<html><head>');
    win.document.write('<title>Profile</title>');   // <title> FOR PDF HEADER.
    win.document.write(style);          // ADD STYLE INSIDE THE HEAD TAG.
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(sTable);         // THE TABLE CONTENTS INSIDE THE BODY TAG.
    win.document.write('</body></html>');
  
    win.document.close(); 	// CLOSE THE CURRENT WINDOW.
  
    win.print();    // PRINT THE CONTENTS.
  }




// Get registered users

async function fetchAcceptedCandidates(){
        
    let response = await fetch("http://localhost:5000/getAllResults")
    
    const allCandidates = await response.json(); 
    const candidates = allCandidates.testResults;
    console.log(candidates);
   
    for(let i=0;i<candidates.length;i++){
        let usersContainer = document.getElementById("testReport");
        
 
        let usersArray = candidates[i];

        let name = usersArray.name;
        let postTitle = usersArray.postTitle;
        let faculty = usersArray.faculty
        let userId = usersArray._id
        let email = usersArray.email;
        let testResult = usersArray.testResult;
        let Status = usersArray.Status;
        
      if(1>0) {

        let userTemplate = `
    
            <tr id="${userId}">
                <td>${name}</td>
                <td>${email}</td>
                <td>${faculty}</td>
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