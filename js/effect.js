function typeWriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letra, index) => {
        setTimeout(() => element.innerHTML += letra, 75 * index)
    })
}

const spec = document.querySelector('.section-intro .info span')

typeWriter(spec)
initScrollEffect()

function initScrollEffect() {
    const scrollSection = document.querySelectorAll('.js-scroll')
    const inputCheck = document.querySelectorAll('.input-check')
    const radio = document.querySelectorAll('input[type=radio]')

    console.log(inputCheck)


    function scrollEffect() {

        scrollSection.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top
            const windowHalf = window.innerHeight * 0.6
            const isVisible = (sectionTop - windowHalf) < 0

            if (isVisible) {
                section.classList.add('ativo')
            } else {
                section.classList.remove('ativo')

            }
        })
    }

    function radioCheck() {
        inputCheck.forEach((section, index) => {
            const sectionTop = section.getBoundingClientRect().top
            const windowHalf = window.innerHeight * 0.6
            const isVisible = (sectionTop - windowHalf) < 0
            if (isVisible) {
                radio[index].checked = true;
            }
        })
    }


    scrollEffect()

    window.addEventListener('scroll', scrollEffect, )
    window.addEventListener('scroll', radioCheck, )
}