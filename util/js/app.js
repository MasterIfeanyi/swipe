// portfolio
$('#tech-carousel').owlCarousel({
    loop:true,
    margin:48,
    dots:false,
    nav: false,
    items: 1,
    smartSpeed: 1000,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items: 2
        }
    }
})


// autoplayHoverPause, pause auto play on hover 



// Reviews
$('#why-carousel').owlCarousel({
    loop:true,
    margin:28,
    dots: false,
    nav: false,
    smartSpeed: 1000,
    autoplay:false,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3.5
        }
    }
})


// autoplayHoverPause, pause auto play on hover 


AOS.init({
// Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 200, // values from 0 to 3000, with step 50ms
  duration: 900, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        nav.classList.add("bg-white", "slow")
        nav.classList.remove("py-3", "slow")
    } else {
        nav.classList.remove("bg-white", "slow")
        nav.classList.add("py-4", "slow")
    }
})