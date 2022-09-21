//Fetch posts

async function fetchEventsPosts(){
        
    let response = await fetch("http://localhost:5000/getPostsByCategory/News")
    
    const allPosts = await response.json(); 
    const posts = allPosts.fetchedPost;
    console.log(posts);
   
    for(let i=0;i<posts.length;i++){
        let news = document.getElementById("Electronic");

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
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
<!-- Favicon -->
	<link href="../../images/header/fav.jpg" rel="shortcut icon" type="image/x-icon"/>

    <title>University Social Network | Home </title>

    <!-- Bootstrap core CSS-->
    <link href="../../vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
	    <link href="../../css/style.css" rel="stylesheet">
	    <link href="../../css/responsive.css" rel="stylesheet">
    <!-- Custom fonts for this template-->
    <link href="../../vendor/fontawesome-free/css/all.min.css" rel="stylesheet" type="text/css">

    <!-- Page level plugin CSS-->
     <link rel="stylesheet" href="../../css/portfolio.css" type="text/css">
     <link rel="stylesheet" href="../../css/dropdown.css" type="text/css">
    <link rel="stylesheet" href="../../css/owlslider.css" type="text/css">
    <!-- Custom styles for this template-->
    <link href="../../css/sb-admin.css" rel="stylesheet" type="text/css">
    <link href="../../css/font-awesome.css" rel="stylesheet" type="text/css">
    <link href="../../css/font-awesome.min.css" rel="stylesheet" type="text/css">
	 <link rel="stylesheet" href="../../assets/owlcarousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="../../assets/owlcarousel/assets/owl.theme.default.min.css">
  
    <style>
    div.boxOpportunity{
        width: 247px;
        height: 261px;
        float: left;
        margin-right: 30px;
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

    </style>
  </head>

  <body id="page-top">

    
        <div class="box boxOpportunity" id="${postId}" onclick="getSinglePost('${postId}')">
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
<script src="js/Integration/loggedInUser.js"></script>
<script src="js/Integration/index.js"></script>
<script src="js/Integration/facebookLogin.js"></script>
<script src="js/Integration/githubLogin.js"></script>
<script src="js/Integration/googleLogin.js"></script>
<script src="js/Integration/socialMediaLogout.js"></script>
<script src="js/Integration/socialMediaProfile.js"></script>
<script src="js/Integration/forgotPassword.js"></script>
<script src="js/Integration/resetPassword.js"></script>
<script src="js/Integration/userMediaProfile.js"></script>
<script src="js/Integration/fetchPosts.js"></script>
<script src="js/Integration/singlePost.js"></script>
  </body>


<!--   15:44:08 GMT -->
</html>

        
        `
        news.innerHTML += postTemplate;
    
    }
    
        }
    }

fetchEventsPosts();