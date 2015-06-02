$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 14287) {
            $("#themainVideo").hide();
        } else {
           (scrollPosition > 14288)
           $("#themainVideo").fadeIn();
        } 
        
    });
    
});