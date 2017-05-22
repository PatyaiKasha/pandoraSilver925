$(document).ready(function() {
    console.log( "ready!" );
    $("li").click(function () {
        $("li").removeClass("active");
        $(this).addClass("active");
    })
});