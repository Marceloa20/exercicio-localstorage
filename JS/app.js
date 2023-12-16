var botao = document.getElementById('botao')
var conteudo = document.getElementById('conteudo')
var login = document.getElementById('login')
var userName = document.getElementById('userName')

//eventos
login.addEventListener('click', () => {
    var usuario = prompt('Seu usuário:');
    localStorage.setItem('userName', usuario);
    userName.innerHTML = usuario;
    userName.style.marginLeft = '5px'
})

window.addEventListener('load', () => {
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode == 'ativado') {
        ativaDarkMode();
    } else {
        desativaDarkMode();
    }

    var usuario = localStorage.getItem('userName')
    userName.innerHTML = usuario;
    userName.style.marginLeft = '5px'
})

botao.addEventListener('click', () => {
    var darkMode = localStorage.getItem('darkMode');
    if (darkMode == 'ativado') {
        desativaDarkMode();
    } else {
        ativaDarkMode();
    }
})

//funçoes
function ativaDarkMode () {
    localStorage.setItem('darkMode', 'ativado')
    conteudo.classList.remove('white-mode');
    conteudo.classList.add('dark-mode');
}

function desativaDarkMode () {
    localStorage.setItem('darkMode', 'desativado')
    conteudo.classList.remove('dark-mode');
    conteudo.classList.add('white-mode');
}