$(document).ready(function() {
    console.log( "ready!" );
    $("li").click(function () {
        $("li").removeClass("active");
        $(this).addClass("active");
    });
// });

// $(document).ready(function() {
    var images = ['work-1.jpg', 'work-2.jpg', 'work-3.jpg', 'work-4.jpg', 'work-5.jpg'];
    var currImg = 0;

    $('.imgBanner').css('background-image', 'url(img/' + images[currImg] + ')');

    for (var i = 0; i < images.length; i++) {
        $('.dots').append('<div data-img="' + i + '" class="dot">');
    }

    $('.dot:first').addClass('active-dot');

    $('.dot').click(function() {
        $('.dot').removeClass('active-dot');
        $(this).addClass('active-dot');
        currImg = $(this).attr('data-img');
        $('.imgBanner').css('background-image', 'url(img/' + images[currImg] + ')');
    })

});

