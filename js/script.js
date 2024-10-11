function mobile(){


const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');


menuIcon.addEventListener('click', () => {
 
    navLinks.classList.toggle('active');

    
    if (navLinks.classList.contains('active')) {
        navLinks.style.display = 'flex'; 
    } else {
        navLinks.style.display = 'none'; 
    }
})
};

function enviarmensagem(){
    const mensagem = document.getElementById('mensagem').value;
    const numeroWhatsApp = '+5574999108336';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}