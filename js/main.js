$(document).ready(function(){

    $('.header__dropdown-link,.header__dropdown-item').click(function(){
        $('.header__dropdown-list').toggleClass('active');
        $('.header__dropdown-link').toggleClass('red');
    });

 $('.header__burger').click(function(){
     $('.header__burger,.header__menu-body').toggleClass('active');
     $('body').toggleClass('lock');
   });
    $('.header__link,.header__dropdown-item').click(function(){
    $('.header__burger,.header__menu-body').removeClass('active');
     $('body').removeClass('lock');
 });

// inner
    $('.inner__slider').slick({
        dots:true,
        arrows:true,
        appendDots: '.inner__dots-replaced',
        responsive:[
            {
                breakpoint: 670,
                settings:{
                    arrows:false,
                }
            },
        ]
    });
//customers slider
    $('.customers__slider').slick({
        dots:true,
        appendArrows:'.customers__arrows-replaced',
        appendDots: '.customers__dots-replaced',
        slidesToShow:6,
        infinite:true,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:4,
                    dots:true,
                }
            },
            {
                breakpoint: 768,
                settings:{
                    slidesToShow:3,
                    dots:false,
                }
            },
            {
                breakpoint: 400,
                settings:{
                    slidesToShow:2,
                    dots:false,
                }
            },
            {
                breakpoint: 300,
                settings:{
                    slidesToShow:1,
                    dots:false,
                }
            },
        ]
    });
// rel proj slider
    $('.related-proj__slider').slick({
        dots:true,
        appendArrows:'.related-proj__arrows-replaced',
        appendDots: '.related-proj__dots-replaced',
        slidesToShow:4,
        infinite:true,
        responsive:[
            {
                breakpoint: 992,
                settings:{
                    slidesToShow:2,
                    dots:true,
                }
            },
            {
                breakpoint: 400,
                settings:{
                    slidesToShow:1,
                    dots:false,
                }
            },
        ]
    });
    // single project slider
    $('.project__slider').slick({
        dots:true,
        appendArrows:'.project__arrow_replaced',
        responsive:[
            {
                breakpoint:768,
                settings:{
                    arrows:false,
                }
            }
        ]
    });
        // aside
    $('.aside-hider').click(function(){
        $('.aside').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.aside__cat-item').click(function(){
        $('.aside').removeClass('active');
        $('.aside-hider').removeClass('active');
        $('body').removeClass('lock');
    });

    // item slider
    $('.blog__slider').slick({
        arrows:true,
        dots:true,
    });
});

    $('.filter-bar__cat').click(function(){
        var cat = $(this).attr("data-cat");
        var blogL2 = document.querySelectorAll('.papa2 > div');
        for(let i=0; i < 5;i++){
            if($('.filter-bar__cat').eq(i).attr('data-cat') == cat) {
                $('.filter-bar__cat').eq(i).toggleClass('active');
            } else{$('.filter-bar__cat').eq(i).removeClass('active');}
        }
        if(cat == 'all'){
            for(let i=0; i<blogL2.length;i++){
                $(".project").eq(i).css('display','flex');
            }
            return 1;
        }
        for(let i=0; i<blogL2.length;i++){
            if($(".project").eq(i).attr('data-cat') == cat){
                $(".project").eq(i).css('display','flex');
                $('.project').eq(i).parent().css('display','block');
            } else{
                $(".project").eq(i).parent().css('display','none');
                $('.project').eq(i).parent().css('display','none');
            }
        }
    });

    $('.aside__cat-item').click(function(){
        var cat = $(this).attr("data-cat");
        var blogL = document.querySelectorAll('.papa > div');
        for(let i=0; i < 6;i++){
            if($('.aside__cat-item').eq(i).attr('data-cat') == cat) {
                $('.aside__cat-item').eq(i).toggleClass('active');
            } else{$('.aside__cat-item').eq(i).removeClass('active');}
        }
        if(cat == 'all'){
            for(let i=0; i<blogL.length;i++){
                $(".item").eq(i).css('display','flex');
            }
            return 1;
        }
        for(let i=0; i<blogL.length;i++){
            if($(".item").eq(i).attr('data-cat') == cat){
                $(".item").eq(i).css('display','flex');
            } else{
                $(".item").eq(i).css('display','none');
            }
        }
    });


    $('.filter-bar__cat[data-cat="all"]').click(function(){
        for(let i=0; i<=3;i++){
            $('.portfolio-1c__project').eq(i).css('display','flex');
            $('.portfolio-1c__project').eq(i).parent().css('display','block');
        }
    });


$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header__dropdown-list"); // тут указываем ID элемента
        var div2 =$('.header__dropdown-link');
        if (!div.is(e.target) && !div2.is(e.target)) { // и не по его дочерним элементам
            div.removeClass('active'); // скрываем его
        }
});

$(document).mouseup(function (e){ // событие клика по веб-документу
        var div = $(".header__dropdown-link"); // тут указываем ID элемента
        if (!div.is(e.target)) { // и не по его дочерним элементам
            div.removeClass('red'); // скрываем его
        }
});




