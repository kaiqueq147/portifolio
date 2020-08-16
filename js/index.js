//pc
const introPc = document.querySelector('header.desktop nav ul a#intro')
const sobrePc = document.querySelector('header.desktop nav ul a#sobre')
const skillsPc = document.querySelector('header.desktop nav ul a#skills')
const labPc = document.querySelector('header.desktop nav ul a#lab')
const contactPc = document.querySelector('header.desktop nav ul a#contact')

introPc.addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'
    })
})

sobrePc.addEventListener('click', function() {
    window.scroll({
        top: 900,
        behavior: 'smooth'

    })
})


skillsPc.addEventListener('click', function() {
    window.scroll({
        top: 1750,
        behavior: 'smooth'
    })
})


labPc.addEventListener('click', function() {
    window.scroll({
        top: 2300,
        behavior: 'smooth'
    })
})

contactPc.addEventListener('click', function() {
        window.scroll({
            top: 3927,
            behavior: 'smooth'
        })
    })
    //pc


//mobile
const sobreIntro = document.querySelector('header.mobile nav ul .menu a#intro')
const sobreMobile = document.querySelector('header.mobile nav ul .menu a#sobre')
const skillsMobile = document.querySelector('header.mobile nav ul .menu a#skills')
const labMobile = document.querySelector('header.mobile nav ul .menu a#lab')
const contactMobile = document.querySelector('header.mobile nav ul .menu a#contact')


sobreIntro.addEventListener('click', function() {
    window.scroll({
        top: 0,
        behavior: 'smooth'

    })
})


sobreMobile.addEventListener('click', function() {
    window.scroll({
        top: 1050,
        behavior: 'smooth'

    })
})


skillsMobile.addEventListener('click', function() {
    window.scroll({
        top: 2619,
        behavior: 'smooth'
    })
})

labMobile.addEventListener('click', function() {
    window.scroll({
        top: 3219,
        behavior: 'smooth'
    })
})

contactMobile.addEventListener('click', function() {
    window.scroll({
        top: 5109,
        behavior: 'smooth'
    })
})



//mobile


const lab = document.querySelector('section.contact')