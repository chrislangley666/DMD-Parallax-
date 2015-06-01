$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 15999) {
            $("heart").hide();
        } else {
           (scrollPosition > 16257)
           $("#heart").fadeIn();
        } 
        
    });
    
});