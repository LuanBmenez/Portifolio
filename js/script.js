
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.addEventListener('click', () => {
 
    navLinks.classList.toggle('active');

    
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex'; 
    } else {
        navLinks.style.display = 'none'; 
    }
});