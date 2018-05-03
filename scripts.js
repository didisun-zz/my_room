/// New scripts - Ana ///
////////////////////////


// Curtain movement

    $('.curtain').click(function(){
        if($(this).attr("trigger")==="0"){
            $(this).animate({"left":"11em"},1200);
            $(this).attr("trigger","1");
            $('#goldcat').css('opacity','1');
        }
        else{
            $(this).animate({"left":"1em"},1200);
            $(this).attr("trigger","0");
        }
    });

// Turn On Lamp

    $(function() {
    $('.lamp-off').click(function () {
      $(this).css("z-index", "1");
      $(this).css("opacity", "0");
      $('.lamp-on').css("opacity", "1");
      $('.lamp-on').css("z-index", "3");
      });
    });

    $(function() {
    $('.lamp-on').click(function () {
      $(this).css("z-index", "1");
      $(this).css("opacity", "0");
      $('.lamp-off').css("opacity", "1");
      $('.lamp-off').css("z-index", "3");
      });
    });


// Change Channel on TV
/*
    var myChanels = ["url('../img/chanel1.gif')", "url('../img/chanel2.gif')", "url('../img/chanel3.gif')", "url('../img/chanel4.gif')", "url('.../img/tv-black.svg')"];
    $('.remote').click(function () {
      chanel = myChanels.shift();
      myChanels.push(chanel);
      $('.tv').css("background-image", chanel);
    });


     var myChanels = ['chanel1', 'chanel2', 'chanel3', 'chanel4', 'chanel5'];
    $('.remote').click(function () {
      chanel = myChanels.shift();
      myChanels.push(chanel);
      $('.tv').addClass(chanel);
    });
*/

    $(".remote").on("click", function () {
  if($('.tv').hasClass('chanel5')){
    $('.tv').addClass('chanel1').removeClass('chanel5');
  }
  else if($('.tv').hasClass('chanel1')){
    $('.tv').addClass('chanel2').removeClass('chanel1');
    // if ($('.lamp-on'))   { $('.girl'). }               /// to change the class
  }
  else if($('.tv').hasClass('chanel2')){
    $('.tv').addClass('chanel3').removeClass('chanel2');
  }
  else if($('.tv').hasClass('chanel3')){
    $('.tv').addClass('chanel4').removeClass('chanel3');
  }
  else if($('.tv').hasClass('chanel4')){
    $('.tv').addClass('chanel5').removeClass('chanel4');
  }

});


// Hanger

$( function() {
    $( ".draggable" ).draggable({stack: ".draggable", distance: 0, containment: ".hanger"});
  } );



// Pop Up

$('.image-popup-no-margins').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

$('.image-popup-no-margins2').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

// board-img

$(".board-img1").on("click", function () {
  if($(this).hasClass('board-img1')){
    $(this).addClass('board-img2').removeClass('board-img1');
  }
  else if($(this).hasClass('board-img2')){
    $(this).addClass('board-img3').removeClass('board-img2');
  }
  else if($(this).hasClass('board-img3')){
    $(this).addClass('board-img4').removeClass('board-img3');
  }
  else if($(this).hasClass('board-img4')){
    $(this).addClass('board-img5').removeClass('board-img4');
  }
  else if($(this).hasClass('board-img5')){
    window.location = $('#illu-link').attr('href','illustration.html');
  }
});

/*
$(function){
    $('#board-img-id').onClick(function(){
        if($(this).hasClass('board-img1'))
        {
            alert($(this).class) ;
            $(this).addClass('board-img2').removeClass('board-img1');
        }
        if($(this).hasClass('board-img2'))
        {
            alert($(this).class) ;
            $(this).addClass('board-img3').removeClass('board-img2');
        }
    });
}
*/
 /* sound on over  */

var beepOne = $("#kra")[0];
$("#parrot")
  .mouseenter(function() {
    beepOne.play();
  }); 

var beep2 = $("#mewo")[0];
$(".blackcat")
  .mouseenter(function() {
    beep2.play();
  }); 

var beep3 = $("#curtain_move")[0];
$(".curtain")
  .click(function() {
    beep3.play();
  }); 
  
/* text on over */

$('.girl').hover(function(){
    $('.subtitle').text("please leave me alone, i'm not in the mood");
}, function() {
    $('.subtitle').text("  ");
});

$('.dreamcatcher').hover(function(){
    $('.subtitle').text("don't touch that! it's bad luck!");
}, function() {
    $('.subtitle').text("  ");
});

$('.lamp-on').hover(function(){
    $('.subtitle').text("I LOVE my himalaya salt lamp."+"\n"+"so spiritual");
}, function() {
    $('.subtitle').text("  ");
});

$('.book').hover(function(){
    $('.subtitle').text("what this book doing there? i don't remember touching it");
}, function() {
    $('.subtitle').text("  ");
});

$('.hanger').hover(function(){
    $('.subtitle').text("i hate all my clothessss");
}, function() {
    $('.subtitle').text("  ");
});


$('.laptop-img').hover(function(){
    $('.subtitle').text("this is where the magic happandes. but where i hidden the password again -_-");
}, function() {
    $('.subtitle').text("  ");
});

$('.hamsa').hover(function(){
    $('.subtitle').text("i feel like someone's watching me");
}, function() {
    $('.subtitle').text("  ");
});

$('#goldcat').hover(function(){
    $('.subtitle').text("ehh.. what's there on the cat?");
}, function() {
    $('.subtitle').text("  ");
});



