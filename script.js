document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso!');
        contactForm.reset();
    });

    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        const showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Mostrar mais';
        showMoreBtn.classList.add('show-more-btn');
        item.appendChild(showMoreBtn);

        const description = item.querySelector('p');
        const fullText = description.textContent;
        const truncatedText = fullText.substring(0, 100) + '...';

        description.textContent = truncatedText;

        showMoreBtn.addEventListener('click', () => {
            if (showMoreBtn.textContent === 'Mostrar mais') {
                description.textContent = fullText;
                showMoreBtn.textContent = 'Mostrar menos';
            } else {
                description.textContent = truncatedText;
                showMoreBtn.textContent = 'Mostrar mais';
            }
        });
    });

    const header = document.querySelector('header');
    const sticky = header.offsetTop;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > sticky) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });

    const sections = document.querySelectorAll('section');
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});