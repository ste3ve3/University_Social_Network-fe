document.querySelector(".login-btn").click(function(){
    document.querySelector(this).classList.toggle("toggled");
    document.querySelector(".login-panel").classList.toggle("open");
  });
  
  CKEDITOR.replace("post_text", {
    language: "en",
    uiColor: "#dddddd",
    height: 500,
    resize_dir: 'vertical'
  });