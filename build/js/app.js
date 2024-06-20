document.addEventListener('DOMContentLoaded', function() {
    navFija()
    crearGaleria()
    resaltarEnlace()
    scrollNav()
})

function navFija() {
    const header = document.querySelector('.header')
    const videoHeader = document.querySelector('.video-header')


    document.addEventListener('scroll', function() {
        if (videoHeader.getBoundingClientRect().bottom < 1) {
            header.classList.add('nav-fixed')
        } else {
            header.classList.remove('nav-fixed')
        }

    })
}

function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes')
    for (let i = 1; i <= 16; i++) {
        const imagen = document.createElement('IMG')
        imagen.src = `src/img/gallery/full/${i}.jpg`

        imagen.onclick = function() {
            monstrarImagen(i);
        }

        galeria.appendChild(imagen)
    }
}

function monstrarImagen(i) {
    const imagen = document.createElement('IMG')
    imagen.src = `src/img/gallery/full/${i}.jpg`

    const modal = document.createElement('DIV')
    modal.classList.add('bg-img')
    modal.onclick = cerrarModal

    const btnCerrarModal = document.createElement('BUTTON')
    btnCerrarModal.textContent = 'X'
    btnCerrarModal.classList.add('btn-modal')
    btnCerrarModal.onclick = cerrarModal

    modal.appendChild(imagen)
    modal.appendChild(btnCerrarModal)

    const body = document.querySelector('body')
    body.classList.add('overflow-hidden')
    body.appendChild(modal)
}

function cerrarModal() {
    const modal = document.querySelector('.bg-img')
    modal.classList.add('fade-out')
    setTimeout(() => {
        modal.remove()
        const body = document.querySelector('body')
        body.classList.remove('overflow-hidden')
    }, 300);

}

function resaltarEnlace() {
    document.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section')
        const navLinks = document.querySelectorAll('.nav-bar li a')
        let actual = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop
            const sectionAltura = section.clientHeight

            if (window.scrollY >= (sectionTop - sectionAltura / 3)) {
                actual = section.id
            }
        })
        navLinks.forEach(link => {
            link.classList.remove('activado')
            if (link.getAttribute('href') === '#' + actual) {
                link.classList.add('activado')
            }
        })
    })
}

function scrollNav() {
    const navLinks = document.querySelectorAll('.nav-bar li a')
    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault()
            const sectionScroll = e.target.getAttribute('href')
            const section = document.querySelector(sectionScroll)
            section.scrollIntoView({ behavior: 'smooth' })
        })
    })
}