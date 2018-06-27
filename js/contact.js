if (sessionStorage.getItem('phoneUnlocked')) {
  $('.lock').remove();
}



(function() {
  var IPHONE, iPhoneController;

  iPhoneController = (function() {
    function iPhoneController() {}

    iPhoneController.prototype.init = function() {
      this.setTime();
      this.loading();
      this.pin();
      this.controls();
      this.colors();
    };

    iPhoneController.prototype.loading = function() {
      return setTimeout(function() {
        return $('.loading').fadeOut(200, function() {});
      }, 100);
    };

    iPhoneController.prototype.controls = function() {

      $('.alert a').on('click', function(e) {
        e.preventDefault();
        return IPHONE.alert('hide');
      });
      return $('.power').on('click', function(e) {
        e.preventDefault();
        $('.overlay').fadeOut();
        return $('.lock').fadeIn();
      });
    };

    iPhoneController.prototype.alert = function(action) {
      if (action === 'show') {
        return $('.overlay').fadeIn(200, function() {
          return $('.alert').addClass('pop');
        });
      } else {
        return $('.overlay').fadeOut(200, function() {
          return $('.alert').removeClass('pop');
        });
      }
    };

    iPhoneController.prototype.colors = function() {
      return $('#switch a').on('click', function(e) {
        var color;
        e.preventDefault();
        color = $(this).data('color');
        return $('#iphone-6').removeClass().addClass(color);
      });
    };

    iPhoneController.prototype.setTime = function() {
      var hours, minutes, now;
      now = new Date();
      hours = now.getHours() > 9 ? now.getHours() : '0' + now.getHours();
      minutes = now.getMinutes() > 9 ? now.getMinutes() : '0' + now.getMinutes();
      return $('.time').text(hours + ':' + minutes);
    };



    iPhoneController.prototype.pin = function() {
      var checkPin, count, input;
      input = '';
      count = 0;
      $('.keyboard div').on('click', function(e) {
        var number, value;
        e.preventDefault();
        number = $(this);
        value = number.find('em').text();
        input += value;
        $('.keyboard div').removeClass('click');
        number.addClass('click').delay(200).queue(function() {
          return $(this).removeClass('click');
        });
        $('.pills').removeClass('error').find('span').eq(count).addClass('fill');
        count++;
        if (count === 4) {
          return checkPin(input);
        }
      });
      return checkPin = function(check) {
        var pin;
        pin = '2131';
        count = 0;
        input = '';
        $('.pills').find('span').removeClass('fill');
        if (check === pin) {
          sessionStorage.setItem('phoneUnlocked', true);
          return $('.lock').fadeOut(200);
        } else {
          return $('.pills').addClass('error');
        }
      };
    };

    return iPhoneController;

  })();

  IPHONE = new iPhoneController;

  IPHONE.init();

}).call(this);


// snake

$('.snake-game').on('click', function(e) {
  e.preventDefault();
  $('.snake').fadeIn();
  });
$('.email-icon').on('click', function(e) {
  e.preventDefault();
  $('.email').fadeIn();
  });

$('.paint-icon').on('click', function(e) {
  e.preventDefault();
  $('.paint').fadeIn();
  });

  $('.app a, .home a').on('click', function(e) {
    e.preventDefault();
    $('.snake').fadeOut();
    $('.overlay').fadeOut();
    $('.email').fadeOut();
    $('.paint').fadeOut();
  });


// Paint

/* REF CODE: http://www.williammalone.com/articles/create-html5-canvas-javascript-drawing-app/ */
/* Colors from http://flatuicolorpicker.com */
/* Symbols from https://fortawesome.github.io/Font-Awesome/ */
var kit_dict = {
    'tools': [
        ['paint','fa-paint-brush'],
        ['background','fa-picture-o'],
        ['save','fa-floppy-o'],
        ['delete','fa-trash-o']
    ],
    'paints': ["#fb7fe0","#4ECDC4","#A2DED0","#87D37C","#90C695","#26A65B","#03C9A9","#68C3A3","#65C6BB","#1BBC9B","#1BA39C","#66CC99","#36D7B7","#C8F7C5","#86E2D5","#2ECC71","#16a085","#3FC380","#019875","#03A678","#4DAF7C","#2ABB9B","#1E824C","#049372","#26C281","#446CB3","#E4F1FE","#4183D7","#59ABE3","#81CFE0","#52B3D9","#C5EFF7","#22A7F0","#3498DB","#2C3E50","#19B5FE","#336E7B","#22313F","#6BB9F0","#1E8BC3","#3A539B","#34495E","#67809F","#2574A9","#1F3A93","#89C4F4","#4B77BE","#5C97BF","#EC644B","#D24D57","#F22613","#D91E18","#96281B","#EF4836","#D64541","#C0392B","#CF000F","#E74C3C","#DB0A5B","#F64747","#F1A9A0","#D2527F","#E08283","#F62459","#E26A6A","#DCC6E0","#663399","#674172","#AEA8D3","#913D88","#9A12B3","#BF55EC","#BE90D4","#8E44AD","#9B59B6","#e9d460","#FDE3A7","#F89406","#EB9532","#E87E04","#F4B350","#F2784B","#EB974E","#F5AB35","#D35400","#F39C12","#F9690E","#F9BF3B","#F27935","#E67E22","#ececec","#6C7A89","#D2D7D3","#EEEEEE","#BDC3C7","#ECF0F1","#95A5A6","#DADFE1","#ABB7B7","#F2F1EF","#BFBFBF","#EC644B","#D24D57","#F22613","#D91E18","#96281B","#EF4836","#D64541","#C0392B","#CF000F","#E74C3C","#DB0A5B","#F64747","#F1A9A0","#D2527F","#E08283","#F62459","#E26A6A","#DCC6E0","#663399","#674172","#AEA8D3","#913D88","#9A12B3","#BF55EC","#BE90D4","#8E44AD","#9B59B6","#446CB3","#E4F1FE","#4183D7","#59ABE3","#81CFE0","#52B3D9","#C5EFF7","#22A7F0","#3498DB","#2C3E50","#19B5FE","#336E7B","#22313F","#6BB9F0","#1E8BC3","#3A539B","#34495E","#67809F","#2574A9","#1F3A93","#89C4F4","#4B77BE","#5C97BF","#4ECDC4","#A2DED0","#87D37C","#90C695","#26A65B","#03C9A9","#68C3A3","#65C6BB","#1BBC9B","#1BA39C","#66CC99","#36D7B7","#C8F7C5","#86E2D5","#2ECC71","#16a085","#3FC380","#019875","#03A678","#4DAF7C","#2ABB9B","#fb7fe0","#1E824C","#049372","#26C281","#e9d460","#FDE3A7","#F89406","#EB9532","#E87E04","#F4B350","#F2784B","#EB974E","#F5AB35","#D35400","#F39C12","#F9690E","#F9BF3B","#F27935","#E67E22","#ececec","#6C7A89","#D2D7D3","#EEEEEE","#BDC3C7","#ECF0F1","#95A5A6","#DADFE1","#ABB7B7","#F2F1EF","#BFBFBF"]
};
var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickColor = new Array();
var clickSize = new Array();
var paint;
var toolSelected = 'paint'

// Settings
var strokeColorSetting = "#fb7fe0";
var strokeSizeSetting = 5;

// Elements
var canvas = document.getElementById("canvas");
var control = document.getElementById("control");
var context = canvas.getContext("2d");
var brushDisplay = document.getElementById('brush');
var colorDisplay = document.getElementById('color');
var paintList = document.getElementsByClassName("tool-thin");
var toolList = document.getElementsByClassName("tool");
var paintKit = document.getElementById('paints');
var toolKit = document.getElementById('tools');

// Document function
function initializeDocument(){
    canvas.width = document.body.clientWidth;
    canvas.height = document.body.clientHeight - control.clientHeight;
    for (var i = 0; i < kit_dict['paints'].length; i++){
        paintKit.innerHTML += "<div class='tool-thin' style='background:" + kit_dict['paints'][i] + "!important' " + "color='"+ kit_dict['paints'][i] +"'" +"></div>\n";
    }
    for (var i = 0; i < kit_dict['tools'].length; i++){
        toolKit.innerHTML += "<div class='tool' id='" + kit_dict['tools'][i][0] + "'>\n<i class='fa "+ kit_dict['tools'][i][1] +"'></i>\n<h2>" + kit_dict['tools'][i][0] + "</h2></div>\n";
    }
    brushDisplay.setAttribute("style", "border-width: " + brushDisplay.value + "px");
    var paintButton = document.getElementById("paint");
    paintList[0].classList.add("selected");
    paintButton.classList.add("selected");
}

function get_mouse_position(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
};

// Drawing functions
function addClick(x, y, dragging){
    clickX.push(x);
    clickY.push(y);
    clickDrag.push(dragging);
    clickColor.push(strokeColorSetting);
    clickSize.push(strokeSizeSetting);
}

function resetCanvas(){
    clickX = new Array();
    clickY = new Array();
    clickDrag = new Array();
    clickColor = new Array();
    clickSize = new Array();
    canvas.style.background = "none";
}

function clearCanvas(context){
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
}

function redraw(context){
    clearCanvas(context);
    context.lineJoin = "round";
    for (var i = 0; i < clickX.length; i++){
        context.lineWidth = clickSize[i];
        context.beginPath();
        if(clickDrag[i] && i){
            context.moveTo(clickX[i-1], clickY[i-1]);
        }
        else{
            context.moveTo(clickX[i]-1, clickY[i]);
        }
        context.lineTo(clickX[i], clickY[i]);
        context.closePath();
        context.strokeStyle = clickColor[i];
        context.stroke();
    }
}

// main:
initializeDocument();

// Drawing board event functions
function handleStart(event){
    if (toolSelected == 'paint'){
        mouse_position = get_mouse_position(canvas, event);
        var mouseX = mouse_position.x;
        var mouseY = mouse_position.y;
        paint = true;
        addClick(mouse_position.x, mouse_position.y);
        redraw(context);
    }
    else if (toolSelected == 'background'){
        canvas.style.background = strokeColorSetting;
    }
}

function handleMove(event){
    event.preventDefault();
    if (paint && toolSelected == 'paint'){
        mouse_position = (event.type != "touchmove") ? get_mouse_position(canvas, event) : get_mouse_position(canvas, event.touches[0]);
        addClick(mouse_position.x, mouse_position.y, true)
        redraw(context);
    }
}

function handleEnd(event){
    if (toolSelected == 'paint'){
        paint = false;
    }
}

// Drawing board events
canvas.addEventListener('mousedown', handleStart, false);
canvas.addEventListener('mousemove', handleMove, false);
canvas.addEventListener('mouseup', handleEnd, false);
canvas.addEventListener('mouseleave', handleEnd, false);
canvas.addEventListener("touchstart", handleStart, false);
canvas.addEventListener("touchend", handleEnd, false);
canvas.addEventListener("touchcancel", handleEnd, false);
canvas.addEventListener("touchmove", handleMove, false);

var clearButton = document.getElementById('delete');
clearButton.addEventListener('click', function(event){
    clearCanvas(context);
    resetCanvas(context);
}, false);




//save canvas
$("#save").click(function() {
  var html = " ";
  html += "<img src='" + canvas.toDataURL() + "' alt='from canvas'/>";
  var pageStyle = "<style>body{margin:0; padding: 0;}</style>";
  var tab = window.open();
  tab.document.write(html + pageStyle);
});

for (var i = 0; i < paintList.length; i++) {
    paintList[i].addEventListener('click', function(event){
        for (var i = 0; i < paintList.length; i++) {
            paintList[i].classList.remove("selected");
        }
        strokeColorSetting = this.getAttribute("color");
        control.setAttribute("style","border-color: " + strokeColorSetting + "!important");
        colorDisplay.value = strokeColorSetting;
        colorDisplay.setAttribute("style", "border-color: " + strokeColorSetting + "!important" );
        this.classList.add("selected");
    }, false);
}

brushDisplay.addEventListener('change', function(event){
    strokeSizeSetting = this.value
    this.setAttribute("style", "border-width: " + strokeSizeSetting + "px!important" );
}, false);

colorDisplay.addEventListener('change', function(event){
    for (var i = 0; i < paintList.length; i++) {
        paintList[i].classList.remove("selected");
    }
    strokeColorSetting = this.value;
    control.setAttribute("style","border-color: " + strokeColorSetting + "!important");
    this.setAttribute("style", "border-color: " + strokeColorSetting + "!important" );
}, false);

for (var i = 0; i < toolList.length; i++) {
    toolList[i].addEventListener('click', function(event){
        for (var i = 0; i < toolList.length; i++) {
            toolList[i].classList.remove("selected");
        }
        toolSelected = this.getAttribute("id");
        this.classList.add("selected");
    }, false);
}



// Snake
  (function(){
      /////////////////////////////////////////////////////////////

      // Canvas & Context
      var canvas;
      var ctx;

      // Snake
      var snake;
      var snake_dir;
  	  var snake_next_dir;
      var snake_speed;

      // Food
      var food = {x: 0, y: 0};

      // Score
      var score;

      // Wall
      var wall;

      // HTML Elements
      var screen_snake;
      var screen_menu;
      var screen_setting;
      var screen_gameover;
      var button_newgame_menu;
      var button_newgame_setting;
      var button_newgame_gameover;
      var button_setting_menu;
      var button_setting_gameover;
      var ele_score;
      var speed_setting;
      var wall_setting;

      /////////////////////////////////////////////////////////////

      var activeDot = function(x, y){
          ctx.fillStyle = "#FFFFFF";
          ctx.fillRect(x * 10, y * 10, 10, 10);
      }


      /////////////////////////////////////////////////////////////

      var changeDir = function(key){

          if(key == 38 && snake_dir != 2){
              snake_next_dir = 0;
          }else{

          if (key == 39 && snake_dir != 3){
              snake_next_dir = 1;
          }else{

          if (key == 40 && snake_dir != 0){
              snake_next_dir = 2;
          }else{

          if(key == 37 && snake_dir != 1){
              snake_next_dir = 3;
          } } } }

      }

      /////////////////////////////////////////////////////////////

      var addFood = function(){
          food.x = Math.floor(Math.random() * ((canvas.width / 10) - 1));
          food.y = Math.floor(Math.random() * ((canvas.height / 10) - 1));
          for(var i = 0; i < snake.length; i++){
              if(checkBlock(food.x, food.y, snake[i].x, snake[i].y)){
                  addFood();
              }
          }
      }

      /////////////////////////////////////////////////////////////

      var checkBlock = function(x, y, _x, _y){
          return (x == _x && y == _y) ? true : false;
      }

      /////////////////////////////////////////////////////////////

      var altScore = function(score_val){
          ele_score.innerHTML = String(score_val);
      }

      /////////////////////////////////////////////////////////////

      var mainLoop = function(){

              var _x = snake[0].x;
              var _y = snake[0].y;
  			snake_dir = snake_next_dir;

              // 0 - Up, 1 - Right, 2 - Down, 3 - Left
              switch(snake_dir){
                  case 0: _y--; break;
                  case 1: _x++; break;
                  case 2: _y++; break;
                  case 3: _x--; break;
              }

              snake.pop();
              snake.unshift({x: _x, y: _y});


          // --------------------

          // Wall

              if(wall == 1){
              // On
                  if (snake[0].x < 0 || snake[0].x == canvas.width / 10 || snake[0].y < 0 || snake[0].y == canvas.height / 10){
                      showScreen(3);
                      return;
                  }
              }else{
              // Off
                  for(var i = 0, x = snake.length; i < x; i++){
                      if(snake[i].x < 0){
                          snake[i].x = snake[i].x + (canvas.width / 10);
                      }
                      if(snake[i].x == canvas.width / 10){
                          snake[i].x = snake[i].x - (canvas.width / 10);
                      }
                      if(snake[i].y < 0){
                          snake[i].y = snake[i].y + (canvas.height / 10);
                      }
                      if(snake[i].y == canvas.height / 10){
                          snake[i].y = snake[i].y - (canvas.height / 10);
                      }
                  }
              }

          // --------------------

          // Autophagy death
              for(var i = 1; i < snake.length; i++){
                  if (snake[0].x == snake[i].x && snake[0].y == snake[i].y){
                      showScreen(3);
                      return;
                  }
              }

          // --------------------

        // Eat Food
              if(checkBlock(snake[0].x, snake[0].y, food.x, food.y)){
                  snake[snake.length] = {x: snake[0].x, y: snake[0].y};
                  score += 1;
                  altScore(score);
                  addFood();
                  activeDot(food.x, food.y);
              }

          // --------------------

              ctx.beginPath();
              ctx.fillStyle = "#000000";
              ctx.fillRect(0, 0, canvas.width, canvas.height);

          // --------------------

              for(var i = 0; i < snake.length; i++){
                  activeDot(snake[i].x, snake[i].y);
              }

          // --------------------

              activeDot(food.x, food.y);

  		// Debug
  		//document.getElementById("debug").innerHTML = snake_dir + " " + snake_next_dir + " " + snake[0].x + " " + snake[0].y;

              setTimeout(mainLoop, snake_speed);
      }

      /////////////////////////////////////////////////////////////

      var newGame = function(){

          showScreen(0);
          screen_snake.focus();

          snake = [];
          for(var i = 4; i >= 0; i--){
              snake.push({x: i, y: 15});
          }

          snake_next_dir = 1;

          score = 0;
          altScore(score);

          addFood();

          canvas.onkeydown = function(evt) {
              evt = evt || window.event;
              changeDir(evt.keyCode);
          }
          mainLoop();

      }

      /////////////////////////////////////////////////////////////

      // Change the snake speed...
      // 150 = slow
      // 100 = normal
      // 50 = fast
      var setSnakeSpeed = function(speed_value){
          snake_speed = speed_value;
      }

      /////////////////////////////////////////////////////////////
      var setWall = function(wall_value){
          wall = wall_value;
          if(wall == 0){screen_snake.style.borderColor = "#606060";}
          if(wall == 1){screen_snake.style.borderColor = "#FFFFFF";}
      }

      /////////////////////////////////////////////////////////////

      // 0 for the game
      // 1 for the main menu
      // 2 for the settings screen
      // 3 for the game over screen
      var showScreen = function(screen_opt){
          switch(screen_opt){

              case 0:  screen_snake.style.display = "block";
                       screen_menu.style.display = "none";
                       screen_setting.style.display = "none";
                       screen_gameover.style.display = "none";
                       break;

              case 1:  screen_snake.style.display = "none";
                       screen_menu.style.display = "block";
                       screen_setting.style.display = "none";
                       screen_gameover.style.display = "none";
                       break;

              case 2:  screen_snake.style.display = "none";
                       screen_menu.style.display = "none";
                       screen_setting.style.display = "block";
                       screen_gameover.style.display = "none";
                       break;

              case 3: screen_snake.style.display = "none";
                      screen_menu.style.display = "none";
                      screen_setting.style.display = "none";
                      screen_gameover.style.display = "block";
                      break;
          }
      }

      /////////////////////////////////////////////////////////////

      window.onload = function(){

          canvas = document.getElementById("snake");
          ctx = canvas.getContext("2d");

              // Screens
              screen_snake = document.getElementById("snake");
              screen_menu = document.getElementById("menu");
              screen_gameover = document.getElementById("gameover");
              screen_setting = document.getElementById("setting");

              // Buttons
              button_newgame_menu = document.getElementById("newgame_menu");
              button_newgame_setting = document.getElementById("newgame_setting");
              button_newgame_gameover = document.getElementById("newgame_gameover");
              button_setting_menu = document.getElementById("setting_menu");
              button_setting_gameover = document.getElementById("setting_gameover");

              // etc
              ele_score = document.getElementById("score_value");
              speed_setting = document.getElementsByName("speed");
              wall_setting = document.getElementsByName("wall");

          // --------------------

          button_newgame_menu.onclick = function(){newGame();};
          button_newgame_gameover.onclick = function(){newGame();};
          button_newgame_setting.onclick = function(){newGame();};
          button_setting_menu.onclick = function(){showScreen(2);};
          button_setting_gameover.onclick = function(){showScreen(2)};

          setSnakeSpeed(150);
          setWall(1);

          showScreen("menu");

          // --------------------
          // Settings

              // speed
              for(var i = 0; i < speed_setting.length; i++){
                  speed_setting[i].addEventListener("click", function(){
                      for(var i = 0; i < speed_setting.length; i++){
                          if(speed_setting[i].checked){
                              setSnakeSpeed(speed_setting[i].value);
                          }
                      }
                  });
              }

              // wall
              for(var i = 0; i < wall_setting.length; i++){
                  wall_setting[i].addEventListener("click", function(){
                      for(var i = 0; i < wall_setting.length; i++){
                          if(wall_setting[i].checked){
                              setWall(wall_setting[i].value);
                          }
                      }
                  });
              }

          document.onkeydown = function(evt){
              if(screen_gameover.style.display == "block"){
                  evt = evt || window.event;
                  if(evt.keyCode == 32){
                      newGame();
                  }
              }
          }
      }

  })();
