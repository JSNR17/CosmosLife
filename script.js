document.addEventListener('DOMContentLoaded', function() {
 
    const header = document.querySelector('header');
    const menuBtn = document.querySelector('.alternar-menu');
    const nav = document.querySelector('.enlaces-nav');
    

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('activo');
        nav.classList.toggle('activo');
    });
    

    const navLinks = document.querySelectorAll('.enlaces-nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuBtn.classList.remove('activo');
            nav.classList.remove('activo');
        });
    });
    
  
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });


    const carrusel = document.querySelector('.contenedor-carrusel');
    const testimonios = document.querySelectorAll('.testimonio');
    const indicadores = document.querySelectorAll('.indicador');
    const btnAnterior = document.querySelector('.boton-carrusel.anterior');
    const btnSiguiente = document.querySelector('.boton-carrusel.siguiente');
    
    let currentIndex = 0;
    const totalSlides = testimonios.length;
    let intervalId;
    
    function actualizarCarrusel() {
        const offset = currentIndex * -100;
        carrusel.style.transform = `translateX(${offset}%)`;
        
       
        indicadores.forEach((indicador, index) => {
            indicador.classList.toggle('activo', index === currentIndex);
        });
    }
    
    function siguienteSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        actualizarCarrusel();
    }
    
    function anteriorSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        actualizarCarrusel();
    }
    
    function iniciarCarruselAutomatico() {
        intervalId = setInterval(siguienteSlide, 5000); // 5 segundos
    }
    
    function detenerCarruselAutomatico() {
        clearInterval(intervalId);
    }
    
    
    btnSiguiente.addEventListener('click', () => {
        detenerCarruselAutomatico();
        siguienteSlide();
        iniciarCarruselAutomatico();
    });
    
    btnAnterior.addEventListener('click', () => {
        detenerCarruselAutomatico();
        anteriorSlide();
        iniciarCarruselAutomatico();
    });
    

    indicadores.forEach((indicador, index) => {
        indicador.addEventListener('click', () => {
            detenerCarruselAutomatico();
            currentIndex = index;
            actualizarCarrusel();
            iniciarCarruselAutomatico();
        });
    });
    

    iniciarCarruselAutomatico();
    
  
    actualizarCarrusel();
}); 