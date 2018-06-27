window.onload = function(){
        var wrapper = document.querySelector('.wrapper'),
                        layerOne = document.querySelector('.layer-1'),
                        layerTwo = document.querySelector('.layer-2');
                        layerThree = document.querySelector('.layer-3');
                        layerFour = document.querySelector('.layer-4');
                        layerFive = document.querySelector('.layer-5');


        wrapper.addEventListener('mousemove',function(e){
                var pageX = e.clientX,
                pageY = e.clientY;
        layerOne.style.webkitTransform = 'translateX(' + pageX/100 + '%)';
        layerOne.style.transform = 'translateX(' + pageX/100 + '%) ';
        layerTwo.style.webkitTransform = 'translateX(' + pageX/150 + '%)';
        layerTwo.style.transform = 'translateX(' + pageX/150 + '%)';
        layerThree.style.webkitTransform = 'translateX(' + pageX/200 + '%)';
        layerThree.style.transform = 'translateX(' + pageX/200 + '%)';
        layerFour.style.webkitTransform = 'translateX(' + pageX/-1000 + '%)';
        layerFour.style.transform = 'translateX(' + pageX/-1000 + '%)';
        layerFive.style.webkitTransform = 'translateY(' + pageX/-20 + '%)';
        layerFive.style.transform = 'translateY(' + pageX/-20 + '%)';                
        wrapper.style = 'background-position:'+ pageX/200 +'px center';
        });
}


/*
window.onload = function(){
        var wrapper = document.querySelector('.wrapper'),
                        layerOne = document.querySelector('.layer-1'),
                        layerTwo = document.querySelector('.layer-2');

        wrapper.addEventListener('mousemove',function(e){
                var pageX = e.clientX,
                                pageY = e.clientY;
                layerOne.style.webkitTransform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
        layerOne.style.transform = 'translateX(' + pageX/100 + '%) translateY(' + pageY/100 + '%)';
        layerTwo.style.webkitTransform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
        layerTwo.style.transform = 'translateX(' + pageX/150 + '%) translateY(' + pageY/250 + '%)';
                wrapper.style = 'background-position:'+ pageX/200 +'px center';
        });
}
*/