// MENU HAMBURGUER

const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');


toggle.addEventListener('click', (event) => {
    menu.classList.toggle('active');
    event.stopPropagation(); 
});

document.addEventListener('click', (event) => {

    if (!menu.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});


// ESCONDER / MOSTRAR 


const eyeIcon = document.querySelector('.fa-eye');
const valorSaldo = document.getElementById('valor-saldo');

const saldoReal = valorSaldo.innerText;
const saldoOculto = "R$ *******";

let oculto = false;

eyeIcon.addEventListener('click', () => {
    if (!oculto) {
        valorSaldo.innerText = saldoOculto;
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
    } else {
        valorSaldo.innerText = saldoReal;
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
    }
    oculto = !oculto;
});

