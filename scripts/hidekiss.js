$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 16256) {
            $("#kiss").hide();
        } else {
           (scrollPosition > 16257)
           $("#kiss").fadeIn();
        } 
        
    });
    
});