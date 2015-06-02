$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 13887) {
            $("#recording").hide();
        } else {
           (scrollPosition > 13888)
           $("#recording").fadeIn();
        } 
        
    });
    
});