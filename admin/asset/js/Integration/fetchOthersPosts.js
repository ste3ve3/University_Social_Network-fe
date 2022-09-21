//Fetch posts

async function fetchEventsPosts(){
        
    let response = await fetch("http://localhost:5000/getPostsByCategory/Others")
    
    const allPosts = await response.json(); 
    const posts = allPosts.fetchedPost;
    console.log(posts);
   
    for(let i=0;i<posts.length;i++){
        let others = document.getElementById("adminOthers");

        let postsArray = posts[i];

        //date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;

        let title = postsArray.title;
        let postImage   = postsArray.imgLink;
        let date = today;
        let myKey = postsArray._id
        let authorName = postsArray.authorName;
        let authorImage = postsArray.authorImage;
        
      if(1>0) {
    
    let postId =await postsArray._id ;

        let postTemplate = `
        <!DOCTYPE html>
        <html lang="en">
        
          
        <!--   15:40:28 GMT -->
        <head>
            
            <meta charset="utf-8">
            <meta name="description" content="Miminium Admin Template v.1">
            <meta name="author" content="Isna Nur Azis">
            <meta name="keyword" content="">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>University Social Network | Dashboard</title>
         
            <!-- start: Css -->
            <link rel="stylesheet" type="text/css" href="asset/css/bootstrap.min.css">
        
              <!-- plugins -->
              <link rel="stylesheet" type="text/css" href="asset/css/plugins/font-awesome.min.css"/>
              <link rel="stylesheet" type="text/css" href="asset/css/plugins/simple-line-icons.css"/>
              <link rel="stylesheet" type="text/css" href="asset/css/plugins/animate.min.css"/>
              <link rel="stylesheet" type="text/css" href="asset/css/plugins/fullcalendar.min.css"/>
            <link href="asset/css/style.css" rel="stylesheet">
            <!-- end: Css -->
        
            <link rel="shortcut icon" href="../images/header/fav.jpg">
            <!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->
            <!--[if lt IE 9]>
              <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
              <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
            <![endif]-->
        
            <style>
            div.boxOpportunity{
                width: 247px;
                height: 310px;
                float: left;
                margin: 0px 30px 30px 0px;
                background: white;
                color: #212529;
                position: relative;
            }
        
            div.box-img img{
              width: 247px;  
              height: 183px;  
            }
        
            div.box-radius img{
               width: 50px;
               height: 50px;
               border-radius: 50%; 
            }
        
            .box-heading1 {
                position: absolute;
                top: 160px;
                left: 10px;
                font-size: 16px;
                line-height: 0;
                color: #ffffff;
                font-weight: 600;
                margin-top: -30px;
            }
        
            .box-heading2 {
                font-size: 14px;
                color: #fff;
                padding-top: 24px;
                font-weight: 600;
            }
        
            .box-heading3 {
                margin-left: 75px;
                margin-top: 30px;
                margin-bottom: 30px;
                font-weight: 600;
                font-size: 14px;
                color: #34333c;
            }
        
            .box-radius {
                border-radius: 50%;
                height: 50;
                width: 50px;
                height: 50px;
                background-color: #e5e5e5;
                float: left;
                margin-top: 12px;
                margin-left: 10px;
            }
        
            .box-radius2 {
                height: 50;
                background-color: red;
                border-color: red;
                color: white;
                padding: 5px;
                float: left;
                margin-left: 10px;
            }
        
            .box-headingButton {
                background-color: #0c66ae;
                border-color: #0c66ae;
                color: white;
                padding: 5px;
                margin-left: 75px;
                margin-bottom: 30px;
                font-weight: 600;
                font-size: 14px;
            }
        
            </style>
          </head>
        
          <body id="page-top">
        
            
                <div class="box boxOpportunity">
                    <div class="box-img">
                        <img src="${postImage}" class="img" alt="" title="" >
                        
                    </div>
                    <div class="box-heading1">
                        ${title}
                        <div class="box-heading2">
                        <i class="fa fa-calendar" aria-hidden="true"></i> &nbsp;  ${date}
                        </div>
                    </div>
                    
                    <div class="box-radius">
                        <img src="${authorImage}" class="img" alt="" title="" >
                        
                    </div>
                    <div class="box-heading3">
                        By ${authorName} <i class="fa pull-right fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div class="">
                    <button  class="box-radius2 deletePost" id= '${myKey}' onclick="deletePost('${myKey}')"> Delete Post </button>
                    </div>
                    <div class="">
                    <button  class="box-headingButton updatePost" id= '${myKey}' onclick="getSinglePost('${myKey}')"> Edit Post </button> 
                    </div>
                </div>
        
        
        <!-- Bootstrap core JavaScript-->
        <script src="../../vendor/jquery/jquery.min.js"></script>
        <script src="../../vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
        <!-- Core plugin JavaScript-->
        <script src="../../vendor/jquery-easing/jquery.easing.min.js"></script>
        <!-- Page level plugin JavaScript-->
        <script src="../../vendor/chart.js/Chart.min.js"></script>
        <script src="../../vendor/datatables/jquery.dataTables.js"></script>
        <script src="../../vendor/datatables/dataTables.bootstrap4.js"></script>
        <!-- Custom scripts for all pages-->
        <script src="../../js/sb-admin.min.js"></script>
         <script src="../../js/portfolio.js"></script>
         <script src="../../js/you-listing.js"></script>
         <script src="../../js/menurght.js"></script>
         <script src="../../js/crausal1.js"></script>
         <script src="../../js/dropdown.js"></script>
             <!-- Demo scripts for this page-->
           <script src="../../js/slick.min.js"></script>.
         <!-- Assect scripts for this page-->
        <script src="../../assets/vendors/jquery.min.js"></script>
        <script src="../../assets/owlcarousel/owl.carousel.js"></script>
         <script src="../../assets/vendors/highlight.js"></script>
        <script src="../../assets/js/app.js"></script>
        
        <!-- Integratin scripts -->
        <script src="asset/js/Integration/loggedInUser.js"></script>
        <script src="asset/js/Integration/index.js"></script>
        <script src="asset/js/Integration/facebookLogin.js"></script>
        <script src="asset/js/Integration/githubLogin.js"></script>
        <script src="asset/js/Integration/googleLogin.js"></script>
        <script src="asset/js/Integration/socialMediaLogout.js"></script>
        <script src="asset/js/Integration/socialMediaProfile.js"></script>
        <script src="asset/js/Integration/forgotPassword.js"></script>
        <script src="asset/js/Integration/resetPassword.js"></script>
        <script src="asset/js/Integration/userMediaProfile.js"></script>
        <script src="asset/js/Integration/fetchPosts.js"></script>
        <script src="asset/js/Integration/update.js"></script>
          </body>
        
        
        <!--   15:44:08 GMT -->
        </html>
        
        
        `
        others.innerHTML += postTemplate;
    
    }
    
        }
    }

fetchEventsPosts();