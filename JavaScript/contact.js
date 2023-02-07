$(document).ready(function() {

//contact form
let submit = document.getElementById("submit");

submit.addEventListener('click', function(event){
    event.preventDefault()

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    alert("Thanks for your message, I'll be in touch soon!")
})
//was not sure if it had to work where it would send this to my email. I have watched video's about this, but it looked complicated and wasn't sure if they were good... 

//chained effects
$('.container')                    
    .hide()  
    .slideDown(500, 'swing')  
    .css('opacity', 0)  
    .animate({opacity: 1}, {queue: false, duration: 1000});

$('footer')                    
    .hide()  
    .slideDown(500, 'swing')  
    .css('opacity', 0)  
    .animate({opacity: 1}, {queue: false, duration: 2000});


});