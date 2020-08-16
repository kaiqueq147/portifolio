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

    function scrollEffect() {

        scrollSection.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top
            const windowHalf = window.innerHeight * 0.6
            const isVisible = (sectionTop - windowHalf) < 0
            if (isVisible)
                section.classList.add('ativo')
            else
                section.classList.remove('ativo')
        })
    }
    scrollEffect()
    window.addEventListener('scroll', scrollEffect)
}