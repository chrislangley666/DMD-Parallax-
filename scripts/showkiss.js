$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 10714) {
            $("#recording").hide();
        } else {
           (scrollPosition > 10715)
           $("#recording").fadeIn();
        } 
        
    });
    
});