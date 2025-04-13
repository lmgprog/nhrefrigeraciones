document.addEventListener('DOMContentLoaded', function() {
    // Menú responsive
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar ul');
    
    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Cambiar header al hacer scroll
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Cerrar menú al hacer clic en un enlace
    const navLinks = document.querySelectorAll('.navbar ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        });
    });
    
    // Slider de marcas
    $('.brands-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    
    // Slider de testimonios
    $('.testimonials-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear'
    });
    
    // Filtro de galería
    const filterButtons = document.querySelectorAll('.filter-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Agregar clase active al botón clickeado
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            
            galleryItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category').includes(filterValue)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Smooth scrolling para enlaces
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formulario de contacto
    const contactForm = document.getElementById('presupuestoForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aquí iría la lógica para enviar el formulario
            // Por ahora solo mostramos un mensaje
            alert('Gracias por su consulta. Nos pondremos en contacto a la brevedad.');
            this.reset();
            
            // En un caso real, aquí haríamos una petición AJAX al servidor
            /*
            const formData = new FormData(this);
            
            fetch('enviar.php', {
                method: 'POST',
                body: formData
            })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    alert('Mensaje enviado con éxito');
                    this.reset();
                } else {
                    alert('Error al enviar el mensaje: ' + data.message);
                }
            })
            .catch(error => {
                alert('Error al enviar el formulario');
                console.error(error);
            });
            */
        });
    }
    
 // Inicializar lightbox para la galería (debe estar al final del DOMContentLoaded)
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false,
    'disableScrolling': true,
    'fadeDuration': 300,
    'positionFromTop': 100 // Esto ayuda a que no quede al fondo
});
    
    // Animaciones al hacer scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.feature-card, .service-card, .technician-card, .gallery-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Ejecutar al cargar la página
});