$(document).ready(function() {
    
//retrieve scroll point, mainly for triggering stuff at a specific point. Called everytime the user scrolls the page, in any way, shape or form. Can be seen on the inspect.
    /*
    Function that gets called every time the page is scrolled in either direction. 
    We've set up a variable to store the scroll position. You can use conditional 
    statements to fire off events based on that number. Here we're showing an image 
    if were over 250 and hiding it again if the number is lower than that. 
    */
    $(document).scroll(function(e){
            var scrollPosition  =$("body").scrollTop(); //
            console.log(scrollPosition );
        
        
        //if scroll position is greater than 3180, then move image up.
                if(scrollPosition   > 3180) { 
                    $("#text").animate({top:"50px"}, "slow");
                }
            //if scroll position is less than 3190, then move image down.
                if(scrollPosition  < 3190) { 
                    $("#text").animate({top:"150px"}, "slow");

                }
                if(scrollPosition > 9067) {
                    $("#dates").fadeIn();
                }
    });

    /*
    This hides the image that is shown later on scroll. Might be better to set 
    up a css class for this and set the display: none; property. This might 
    avoid seeing the content briefly before our script file loads and hides it. 
    */
    $("#dates").hide();    
    
    /*
    Function that gets called every time the page is scrolled in either direction. 
    We've set up a variable to store the scroll position. You can use conditional 
    statements to fire off events based on that number. Here we're showing an image 
    if were over 250 and hiding it again if the number is lower than that. 
    */       
        
    $(".page").hide();

        $(".click").mouseenter(function(){
            $(".page").fadeIn('fast');
        });

        $(".page").mouseleave(function(){
            $(this).fadeOut('fast');
        });
});