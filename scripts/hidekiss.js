$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        if(scrollPosition < 9711) {
            $("#themainVideo").hide();
        } else {
           (scrollPosition > 9712)
        }
        
    });
    
});
