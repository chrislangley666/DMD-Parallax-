$(document).ready(function() {
    
    $(document).scroll(function(e) {
        var scrollPosition = $("body").scrollTop();
        console.log(scrollPosition); 
       
        //if(scrollPosition < 13729) {
        if (scrollPosition < 9511){    
            $("#recording").hide();
        } else {
           //(scrollPosition > 13730)
           (scrollPosition > 9512)
            $("#recording").fadeIn();
        } 
        
    });
    
});
