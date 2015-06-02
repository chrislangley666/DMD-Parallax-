$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 10696) {
            $("#themainVideo").hide();
        } else {
           (scrollPosition > 10697)
           $("#themainVideo").fadeIn();
        } 
        
    });
    
});