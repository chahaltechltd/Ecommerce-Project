const bar = document.querySelector('.bar');

const nav = document.querySelector('.navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggle the 'active' class
    });
}
