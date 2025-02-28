    function mobile() {
        const menuIcon = document.getElementById('menu-icon'); 
        const navLinks = document.querySelector('.nav-links');
    
        menuIcon.onclick = () => { 
            navLinks.classList.toggle('active');
        }
    }
    
  
    document.addEventListener('DOMContentLoaded', mobile);

function enviarmensagem(){
    const mensagem = document.getElementById('mensagem').value;
    const numeroWhatsApp = '+5574999108336';
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

    window.open(url, '_blank');
}
function abrirCurriculo() {
   
    const caminhoPdf = 'images/Curriculo.pdf';


    window.open(caminhoPdf, '_blank');
}