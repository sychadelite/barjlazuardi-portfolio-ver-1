import Vue from 'vue'
import $ from 'jquery'

export default () => {
    if (process.client) {
        /* ==================== SCROLL SECTIONS ACTIVE LINK ==================== */
        const sections = document.querySelectorAll('section[id]')

        function scrollActive() {
            var scrollY = window.pageYOffset

            sections.forEach((current) => {
                var sectionHeight = current.offsetHeight
                var sectionTop = current.offsetTop - 50
                var sectionId = current.getAttribute('id')

                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    // document.querySelector('a[href*=' + sectionId + ']').classList.add('active')
                    document.querySelector('.menu-items-desktop .nav-item.' + sectionId).classList.add('active')
                    document.querySelector('.menu-items-mobile .nav-item.' + sectionId).classList.add('active')
                } else {
                    // document.querySelector('a[href*=' + sectionId + ']').classList.remove('active')
                    document.querySelector('.menu-items-desktop .nav-item.' + sectionId).classList.remove('active')
                    document.querySelector('.menu-items-mobile .nav-item.' + sectionId).classList.remove('active')
                }
            })
        }
        window.addEventListener('scroll', scrollActive)

        /* ===== SMOOTH SCROLL ANCHOR LINK ===== */
        var $root = $('html, body')
        $('a[href^="#"]').click(function() {
            var href = $.attr(this, 'href')

            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href
            })

            return false
        })

        // /* ===== SCROLL REVEAL ANIMATION ===== */
        // const sr = ScrollReveal({
        //     origin: 'top',
        //     distance: '60px',
        //     duration: 2000,
        //     delay: 200,
        // //     reset: true
        // });

        // sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{});
        // sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400});
        // sr.reveal('.home__social-icon',{ interval: 200});
        // sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
    }
}