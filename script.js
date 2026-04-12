const burger = document.getElementById('burger');
const menu = document.getElementById('menu');
const html = document.documentElement;

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('open');
    
    if (menu.classList.contains('open')) {
        document.body.classList.add('no-scroll');
        html.classList.add('no-scroll');
    } else {
        document.body.classList.remove('no-scroll');
        html.classList.remove('no-scroll');
    }
});

document.querySelectorAll('.header-menu a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        menu.classList.remove('open');
        document.body.classList.remove('no-scroll');
        html.classList.remove('no-scroll');
    });
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(15, 23, 42, 0.95)'; // Чуть прозрачный фон
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)'; // Тень
    } else {
        header.style.backgroundColor = 'var(--primary-dark)';
        header.style.boxShadow = 'none';
    }
});