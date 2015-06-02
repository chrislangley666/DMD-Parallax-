$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 14399) {
            $("#recording").hide();
        } else {
           (scrollPosition > 14400)
           $("#recording").fadeIn();
        } 
        
    });
    
});