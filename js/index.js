
// explain for start game

$('.door1').hover(function(){
    $('.explain').append("<p>Welcome to my room, which is also my online portfolio.<br>You can use your mouse, and simply click, to reveal and enter the different pages.<br>If you don't want to play- simply click<i><b> <span>enable menu</span></b></i> to skip the game and open the links.</p>");
     $('.explain').addClass('explain-hover');
}, function() {
    $('.explain').text("  ");
    $('.explain').removeClass('explain-hover');
});

$('.door2').hover(function(){
    $('.explain').text("If you choose this door, you choose not to play the game and go straight to the portfolio.");
    $('.explain').addClass('explain-hover');
}, function() {
    $('.explain').text("  ");
    $('.explain').removeClass('explain-hover');
});




