$(document).ready(function() {
    
//retrieve scroll point, mainly for triggering stuff at a specific point. Called everytime the user scrolls the page, in any way, shape or form. Can be seen on the inspect. 
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

    });
});
    
// For dates

   $("circle").click(function() { //Grab the boxes and when clicked, run the function.
        console.log("ready");
        $(this).toggleClass("selected"); //'this' refers to what the user has interacted with. You can reference anthing. more than one.
                              
    });
    




