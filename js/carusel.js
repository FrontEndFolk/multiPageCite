// pros slider a gallery
    var timer;
    var timer2;
    var timer3;

    function SliderLeft2(){
        $('.pros__slider-item').eq(0).toggleClass('pros__slider-item_active').toggleClass('pros__slider-item_last');
        $('.pros__slider-item').eq(1).toggleClass('pros__slider-item_last').toggleClass('pros__slider-item_first');
        $('.pros__slider-item').eq(2).toggleClass('pros__slider-item_first').toggleClass('pros__slider-item_active');
       // console.log(2);
        Swipe2();
    }
    function SliderLeft3(){
        $('.pros__slider-item').eq(0).toggleClass('pros__slider-item_last').toggleClass('pros__slider-item_first');
        $('.pros__slider-item').eq(1).toggleClass('pros__slider-item_first').toggleClass('pros__slider-item_active');
        $('.pros__slider-item').eq(2).toggleClass('pros__slider-item_active').toggleClass('pros__slider-item_last');
        //console.log(3);
        Swipe();
    }
    function SliderLeft(){
        $('.pros__slider-item').eq(0).toggleClass('pros__slider-item_active').toggleClass('pros__slider-item_first');
        $('.pros__slider-item').eq(1).toggleClass('pros__slider-item_last').toggleClass('pros__slider-item_active');
        $('.pros__slider-item').eq(2).toggleClass('pros__slider-item_first').toggleClass('pros__slider-item_last');
        $('.pros__slider').toggleClass('1');
        //console.log(1);
        Swipe3();
    }
    function Swipe(){
        timer = setTimeout(SliderLeft,5000);
    }
    function Swipe2(){
        timer2 = setTimeout(SliderLeft3,5000);
    }
    function Swipe3(){
        timer3 = setTimeout(SliderLeft2,5000);
    }

    if($(window).width() >=768){
    os.on('enter','.pros__slider', (element, event) => {

        Swipe();
    });
    os.on('leave','.pros__slider', (element, event) => {
        clearTimeout(timer);
        clearTimeout(timer2);
        clearTimeout(timer3);
    });
    }
