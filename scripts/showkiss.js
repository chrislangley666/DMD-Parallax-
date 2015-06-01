$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 14116) {
            $("#recording").hide();
        } else {
           (scrollPosition > 14117)
           $("#recording").fadeIn();
        } 
        
    });
    
});