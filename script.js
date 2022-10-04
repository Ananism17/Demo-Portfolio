$(document).ready(function(){
    
    //Change navbar background function

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up').addClass("show");
        }
        else{
            $('.scroll-up').removeClass("show");
        }
    })

    //Scroll up function

    $('.scroll-up').click(function(){
        $('html').animate({scrollTop: 0});
    });




    //Toggle hamburger button

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    })



    //Typing animation function

    let typed = new Typed(".typing", {
        strings: ['JavaScript', 'HTML', 'CSS', 'Web Development'],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });





    //carousel function
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            }
            // 1000:{
            //     items: 3,
            //     nav: false
            // }
        }
    });

});

