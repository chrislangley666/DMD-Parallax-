$(document).ready(function() {
    
//retrieve scroll point, mainly for triggering stuff at a specific point. Called everytime the user scrolls the page, in any way, shape or form. Can be seen on the inspect. 
    $(document).scroll(function(e){
            var scrollPosition  =$("body").scrollTop(); //
            console.log(scrollPosition );
        
            
            //if scroll position is greater than 600, then hide image.
            if(scrollPosition   > 600) { 
                $("#theImage").hide();
                
            }
        //if scroll position is less than 200, then hide image.
            if(scrollPosition  < 200) { 
                $("#theImage").show();
                
            }
    });

});


