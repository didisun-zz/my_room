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
      $('.lamp-on').attr("id","lampon");
      });
    });

    $(function() {
    $('.lamp-on').click(function () {
      $(this).css("z-index", "1");
      $(this).css("opacity", "0");
      $('.lamp-off').css("opacity", "1");
      $('.lamp-off').css("z-index", "3");
      $('.lamp-on').attr("id","lampoff");
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
setTimeout(function(){
}, 2000);    $('.tv').addClass('chanel1').removeClass('chanel5');
    }
  else if($('.tv').hasClass('chanel1')){
    setTimeout(function(){$('.subtitle').text("the news are so deperessing");}, 500);
    $('.tv').addClass('chanel2').removeClass('chanel1');
  }
  else if($('.tv').hasClass('chanel2')){
    setTimeout(function(){$('.subtitle').text("the world is so deperessing");}, 500);
    $('.tv').addClass('chanel3').removeClass('chanel2');
  }
  else if($('.tv').hasClass('chanel3')){
        setTimeout(function(){$('.subtitle').text("uhh! I love giraffes!");},500),

    $('.tv').addClass('chanel4').removeClass('chanel3');
      // $.when('#lampon').done(function()
      if ($('#lampon'))
        { $('#h_about').attr("href", "about.html");
          $('.girl').attr("href", "about.html");
          $('.girl').attr("class", "girl_happy");     
          sessionStorage.setItem('about-Unlocked', true); 
          $('#h_about').attr("href", "about.html");
          $('.h_about').addClass('open').removeClass('close');
/// Make hover work
            $('.h_about').hover(function() {
             $('.h_about').addClass('open-hover');
            $('.girl_happy').css('background-image', "url('img/girl2.gif')");

          },
          function() {
             $('.h_about').removeClass('open-hover');
              $('.girl_happy').css('background-image', "url('img/girl1.png')");
          });

           $('.girl_happy').hover(function() {
             $('.h_about').addClass('open-hover');
            },
          function() {
             $('.h_about').removeClass('open-hover');
          });

        }          
  }
  else if($('.tv').hasClass('chanel4')){
            setTimeout(function(){$('.subtitle').text(" ");},500),

    $('.tv').addClass('chanel5').removeClass('chanel4');
  }

});
      /// make hover to link work and stay

  if (sessionStorage.getItem('about-Unlocked')) {

      $('.h_about').attr("href", "about.html");
      $('.girl').attr("href", "about.html");
      $('.h_about').addClass('open').removeClass('close');
      $('.girl').attr("class", "girl_happy");
      $('.girl_happy').hover(function() {
         $('.h_about').addClass('open-hover');
      },
      function() {
         $('.h_about').removeClass('open-hover');
      });


      $('.h_about').hover(function() {
     $('.girl_happy').css('background-image', "url('img/girl2.gif')");
       $('.h_about').addClass('open-hover');
    },
    function() {
     $('.girl_happy').css('background-image', "url('img/girl1.png')");
       $('.h_about').removeClass('open-hover');
    });
  }


// Hanger

$( function() {
    $( ".draggable" ).draggable({ revert: true });
  // $( ".draggable" ).draggable({stack: ".draggable", distance: 0, containment: ".hanger"});
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
    
$(function(){
    $('button').on("click", function () {
    $('#change_me').addClass("make_me_blue");
    setTimeout(RemoveClass, 1000);
    });
    function RemoveClass() {
    $('#change_me').removeClass("make_me_blue");
    }
    });

 /* sound on over  */
var bird = $('#parrot'),
    bird_gif = '../img/parrot3.gif';
var beepOne = $("#kra")[0];
$("#parrot")
  .click(function() {
    beepOne.play();
    $('#parrot').attr("class","parrot-gif");
    setTimeout(RemoveClass, 1000);
      });
      
    function RemoveClass() {
    $('#parrot').attr("class","parrot-img");
    }; 

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


$('.girl_happy').hover(
  function(){
    $('.subtitle').text("hey there, now I'm in much better mood");
}, function() {
    $('.subtitle').text("  ");
});

$('.dreamcatcher').hover(function(){
    $('.subtitle').text("don't touch that! it's bad luck!");
}, function() {
    $('.subtitle').text("  ");
});


$('.wall-hang').hover(function(){
    $('.subtitle').text("I got it in india, It symbols unity and love");
}, function() {
    $('.subtitle').text("  ");
});

$('.skull').hover(function(){
    $('.subtitle').text("Neanderthal original skull. from Urban Outfitters");
}, function() {
    $('.subtitle').text("  ");
});

$('.phone-img').hover(function(){
    $('.subtitle').text("The phone don't stop ringing");
}, function() {
    $('.subtitle').text("  ");
});


$('.lamp-on').hover(function(){
    $('.subtitle').text("I love my himalaya salt lamp."+"\n"+"so spiritual");
}, function() {
    $('.subtitle').text("  ");
});

$('.book').hover(function(){
    $('.subtitle').text("what this book doing there? i don't remember touching it");
}, function() {
    $('.subtitle').text("  ");
});

$('.hanger').hover(function(){
    $('.subtitle').text("you welcome to try out my clothes. I hate them anyway");
}, function() {
    $('.subtitle').text("  ");
});


$('.laptop-img').hover(function(){
    $('.subtitle').text("this is where the magic happens.");
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

if (sessionStorage.getItem('illu-Unlocked')){
  $('.board-img').hover(function(){
      $('.subtitle').text("much better. you can have a look now");
  }, function() {
      $('.subtitle').text("  ");
});
}
else
{
  $('.board-img').hover(function(){
      $('.subtitle').text("here are my illustrations. buts it's all a mess");
  }, function() {
      $('.subtitle').text("  ");
  });
}



// board-img

$("#parrot").on("click", function () {
  if($(".board-img").hasClass('board-img1')){
    $(".board-img").addClass('board-img2').removeClass('board-img1');
  }
  else if($(".board-img").hasClass('board-img2')){
    $(".board-img").addClass('board-img3').removeClass('board-img2');
  }
  else if($(".board-img").hasClass('board-img3')){
    $(".board-img").addClass('board-img5').removeClass('board-img3');

    }
  //else if($(".board-img").hasClass('board-img4')){
  //  $(".board-img").addClass('board-img5').removeClass('board-img4');
  //}


  if($(".board-img").hasClass('board-img5')){
  sessionStorage.setItem('illu-Unlocked', true);
  $('#h_illu').attr("href", "illustration.html");
  $('#illu-link').attr('href','illustration.html');
  $('.h_illu').addClass('open').removeClass('close');
  

    $('.h_illu').hover(function() {
       $('#parrot').attr("class","parrot-gif");
       $('.h_illu').addClass('open-hover');
    },
    function() {
       $('#parrot').attr("class","parrot-img");
       $('.h_illu').removeClass('open-hover');
    });

     $('.board-img').hover(function() {
       $('.h_illu').addClass('open-hover');
      },
    function() {
       $('.h_illu').removeClass('open-hover');
    });

  $('.board-img').hover(function(){
  $('.subtitle').text("much better. you can have a look now");
  }, function() {
  $('.subtitle').text("  ");
});


  }
});



if (sessionStorage.getItem('illu-Unlocked')) {
  $('#illu-link').attr("href", "illustration.html");
   $('#h_illu').attr("href", "illustration.html");
   $(".board-img").addClass('board-img5').removeClass('board-img1');
   beepOne.play();
     $('.board-img').hover(function() {
       $('.h_illu').addClass('open-hover');
      },
    function() {
       $('.h_illu').removeClass('open-hover');
    });
}



// menu trigger hover of elements - EXIT
   $('.h_exit').hover(function() {
     $('#exit-door').css('background-image', "url('img/door2.svg')");
     $('.h_exit').addClass('open-hover');
}, function() {
     $('#exit-door').css('background-image', "url('img/door1.svg')");
     $('.h_exit').removeClass('open-hover');
});

   $('#exit-door').hover(function() {
     $('#exit-door').css('background-image', "url('img/door2.svg')");
     $('.h_exit').addClass('open-hover');
}, function() {
     $('#exit-door').css('background-image', "url('img/door1.svg')");
     $('.h_exit').removeClass('open-hover');
});

// menu trigger hover of elements - design

$(document).ready(function() {

if (sessionStorage.getItem('computerUnlocked')) {


    $('#h_design').attr("href", "design.html");
    $('.h_design').addClass('open').removeClass('close');
     
    
    $('.h_design').hover(function() {
       $('.laptop-img').css('background-image', "url('img/computer2.gif')");
       $('.h_design').addClass('open-hover');
  },

  function(){
    $('.laptop-img').css('background-image', "url('img/computer1.png')");
    $('.h_design').removeClass('open-hover');
  });

     $('#mac').hover(function() {
       $('.h_design').addClass('open-hover');
$('.laptop-img').css('background-image', "url('img/computer2.gif')");
  }, function() {
       $('.h_design').removeClass('open-hover');
       $('.laptop-img').css('background-image', "url('img/computer1.png')");
  });
}
      });

// menu trigger hover of elements - contact

$(document).ready(function() {

if (sessionStorage.getItem('phoneUnlocked')) {

      $('#h_contact').attr("href", "contact.html");
     $('.h_contact').addClass('open').removeClass('close');
     
    
      $('.h_contact').hover(function() {
       $('.phone-img').css('background-image', "url('img/phone.gif')");
       $('.h_contact').addClass('open-hover');
  }, function() {
       $('.phone-img').css('background-image', "url('img/phone.png')");
       $('.h_contact').removeClass('open-hover');
  });

     $('.phone-img').hover(function() {
       $('.h_contact').addClass('open-hover');
$('.phone-img').css('background-image', "url('img/phone.gif')");
  }, function() {
       $('.h_contact').removeClass('open-hover');
       $('.phone-img').css('background-image', "url('img/phone.png')");
  });
}
      });


// menu trigger hover of elements - illustration
$(document).ready(function() {

  if (sessionStorage.getItem('illu-Unlocked')) {

    $('#h_illu').attr("href", "illustration.html");
    $('.h_illu').addClass('open').removeClass('close');
    $('.h_illu').hover(function() {
       $('#parrot').attr("class","parrot-gif");
       $('.h_illu').addClass('open-hover');
    },
    function() {
       $('#parrot').attr("class","parrot-img");
       $('.h_illu').removeClass('open-hover');
    });

     $('.board-img').hover(function() {
       $('.h_illu').addClass('open-hover');
      },
    function() {
       $('.h_illu').removeClass('open-hover');
    });
  }
});

// menu trigger hover of elements - illustration

$(document).ready(function() {

  if (sessionStorage.getItem('illu-Unlocked')) {

    $('.h_illu').addClass('open').removeClass('close');
    $('.h_illu').hover(function() {
       $('#parrot').attr("class","parrot-gif");
       $('.h_illu').addClass('open-hover');
    },
    function() {
       $('#parrot').attr("class","parrot-img");
       $('.h_illu').removeClass('open-hover');
    });

     $('.board-img').hover(function() {
       $('.h_illu').addClass('open-hover');
      },
    function() {
       $('.h_illu').removeClass('open-hover');
    });
  }
});


// help button

$(function() {
    $('#key').click(function () {
        if (sessionStorage.getItem('key-on')) {

        $("#key-img").attr("src","img/key1.png");
        
        sessionStorage.removeItem('about-Unlocked', true);
        $('.h_about').removeClass('open'); 
        $('#h_about').attr("href", "#");
        
        sessionStorage.removeItem('illu-Unlocked', true);
        $('.h_illu').removeClass('open');
        $('#h_illu').attr("href", "#");
        
        sessionStorage.removeItem('computerUnlocked', true); 
        $('.h_design').removeClass('open');
        $('#h_design').attr("href", "#");
        
        sessionStorage.removeItem('phoneUnlocked', true);
        $('.h_contact').removeClass('open');
        $('#h_contact').attr("href", "#");
        
        sessionStorage.removeItem('key-on', true);
        sessionStorage.setItem('key-off', true);
        console.log("REMOVE click");


       $('.h_about').hover(function() {
       $('.h_about').removeClass('open-hover');
        });
        
         $('.h_illu').hover(function() {
       $('.h_illu').removeClass('open-hover');
        });

          $('.h_design').hover(function() {
       $('.h_design').removeClass('open-hover');
        });

           $('.h_contact').hover(function() {
       $('.h_contact').removeClass('open-hover');
        });



        }

        else {

                $("#key-img").attr("src","img/key2.png");

        
        sessionStorage.setItem('about-Unlocked', true);
        $('.h_about').addClass('open');
        $('#h_about').attr("href", "about.html");
        $('.h_about').addClass('open').removeClass('close'); 
        
        sessionStorage.setItem('illu-Unlocked', true); 
        $('.h_illu').addClass('open'); 
        $('#h_illu').attr("href", "illustration.html");
        $('.h_illu').addClass('open').removeClass('close'); 

        
        sessionStorage.setItem('computerUnlocked', true);
        $('.h_design').addClass('open');
        $('#h_design').attr("href", "design.html");
        $('.h_design').addClass('open').removeClass('close'); 

        
        sessionStorage.setItem('phoneUnlocked', true);
        $('.h_contact').addClass('open');
        $('#h_contact').attr("href", "contact.html");
        $('.h_contact').addClass('open').removeClass('close'); 

        
        sessionStorage.removeItem('key-off', true);
        sessionStorage.setItem('key-on', true);

        console.log("click");

       $('.h_about').hover(function() {
       $('.h_about').addClass('open-hover');
        },
        function() {
       $('.h_about').removeClass('open-hover');
        });
        
         $('.h_illu').hover(function() {
       $('.h_illu').addClass('open-hover');
        },
        function() {
       $('.h_illu').removeClass('open-hover');
        });

          $('.h_design').hover(function() {
       $('.h_design').addClass('open-hover');
        },
        function() {
       $('.h_design').removeClass('open-hover');
        });

           $('.h_contact').hover(function() {
       $('.h_contact').addClass('open-hover');
        },
        function() {
       $('.h_contact').removeClass('open-hover');
        });
      
        }



      });
    });

if (sessionStorage.getItem('about-Unlocked')) 
{        $('#h_about').attr("href", "about.html"); 
}

// hover on explain

$('#key').hover(function(){
    $('.menu-name').text("[You can skip the game and reveal the menu, and vice versa]");
}, function() {
    $('.menu-name').text("  ");
});

   
    



