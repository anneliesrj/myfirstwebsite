$(document).ready(function() {

    //first like button
    let likeButton = document.getElementById("like-button");
    let likeCount = document.getElementById("like-count");
  
    likeButton.addEventListener("click", function() {
      let count = parseInt(likeCount.innerHTML);
      likeCount.innerHTML = count + 1 + " Likes";
    });
  
    //second like button
    let likeButtonTwo = document.getElementById("like-button2");
    let likeCountTwo = document.getElementById("like-count2");
  
    likeButtonTwo.addEventListener("click", function() {
      let count = parseInt(likeCountTwo.innerHTML);
      likeCountTwo.innerHTML = count + 1 + " Likes";
    });
  
    //faq drop down menu
    $('.faq h4').on('click', function() {
        $(this).next().slideToggle();

    });


    //show and hide
    $("#bobbert").hide();
    $("#showBob").click(function(){
        $("#bobbert").show();
    });
    $("#hideBob").click(function(){
        $("#bobbert").hide();
    });

});