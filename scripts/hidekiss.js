$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 14299) {
            $("#recording2").hide();
        } else {
           (scrollPosition > 14300)
           $("#recording2").fadeIn();
        } 
        
    });
    
});