$( document ).ready(function() { 

    $(".circle").click(function() {
        removeSelectedClass(); //Calls class function when the above is clicked (.box).click.
        $(this).toggleClass("selected"); 
        var imageName = $(this).attr("src")
        $("#mainImage").attr("src", imageName);
    });

    function removeSelectedClass() {
        $(".circle").removeClass(".selected");  //Selected class is removed on all boxes when one is selected.
    }
 
});