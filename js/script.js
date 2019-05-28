$(document).ready(()=>{
// side btn
    $('.side-btn').on('click', function(){
        $('.side-nav-links').stop().slideToggle(3000)
        $('.side-btn').toggleClass('change')
    })
  
// nav btn
    $('.nav-btn').click(function(){
        $('.side-nav').toggleClass('margin')
        $('.nav-btn').toggleClass('change')
        $('main').toggleClass('max-width')
        
    })

    // owlCarousel
    $('.songs-center').owlCarousel({
        loop:true,
        margin:10,
        smartSpeed:2000,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })


})