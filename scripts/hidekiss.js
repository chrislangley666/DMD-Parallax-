$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 13687) {
            $("#themainVideo").hide();
        } else {
           (scrollPosition > 13688)
           $("#themainVideo").fadeIn();
        } 
        
    });
    
});