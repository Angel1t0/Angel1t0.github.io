const homeContent = document.getElementById('home-content');
const homeImage = document.getElementById('home-image');
const aboutContent = document.getElementById('about-content');
const aboutImage = document.getElementById('about-image');
const projectTitle = document.getElementById('project-title');
const projectItem1 = document.getElementById('item1');
const projectItem2 = document.getElementById('item2');
const contactContent = document.getElementById('contact-content');
const contactForm = document.getElementById('contact-form');
const footerContent = document.getElementById('footer-content');

const activateContent = (inputs) => {
    inputs.forEach(input => {
        if (input.isIntersecting) {
            input.target.classList.add('active');
        } else {
            input.target.classList.remove('active');
        }
    });
};

const scrollObserver = new IntersectionObserver(activateContent, {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
});

const elementsToObserve = [
  homeContent, homeImage, aboutContent, aboutImage, projectTitle,
  projectItem1, projectItem2,
  contactContent, contactForm, footerContent
];

const activateObserver = () => {
  elementsToObserve.forEach(element => {
    scrollObserver.observe(element);
  });
};

const deactivateObserver = () => {
  elementsToObserve.forEach(element => {
    scrollObserver.unobserve(element);
  });
};

// Función para verificar el tamaño de la ventana
const checkWindowSize = () => {
    if (window.innerWidth > 899) {
      activateObserver();
    } else {
      deactivateObserver();
    }
  };
  

// Verificar el tamaño de la ventana al cargar la página
checkWindowSize();

// Agregar un controlador de eventos para el evento resize
window.addEventListener('resize', checkWindowSize);