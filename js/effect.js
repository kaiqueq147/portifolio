function typeWriter(element) {
    const textArray = element.innerHTML.split('')
    element.innerHTML = ''
    textArray.forEach((letra, index) => {
        setTimeout(() => element.innerHTML += letra, 75 * index)
    })
}

const spec = document.querySelector('.section-intro .info span')

typeWriter(spec)