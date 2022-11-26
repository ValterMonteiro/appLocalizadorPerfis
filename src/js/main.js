import './nav.js'

const formConsultaPerfil = document.querySelector('#consultaPerfil');
const inputNome = formConsultaPerfil.nome;
const divDados = document.querySelector('#dados');

formConsultaPerfil.addEventListener('submit', function(event){

 
event.preventDefault();
//ativaLoader(true);
consultaPerfil(inputNome.value);

});

async function consultaPerfil(nome){

 //Passando o enderço da api -> https://api.github.com/users/maqueise
 let response = await fetch(`https://api.github.com/users/${nome}`);

 let dadosPerfil = await response.json();

 divDados.innerHTML = `
 <img src="${dadosPerfil.avatar_url}" alt="">
 <p>${dadosPerfil.name}</p>
 <a href="${dadosPerfil.html_url}">Perfil no Github</a>
 `
 
 //ativaLoader(false)
};

function ativaLoader(ativo) {
    if (ativo) {
      divDados.setAttribute('aria-busy', 'true')
      divDados.textContent = 'Aguarde! localizando perfil … '
    } else {
      divDados.removeAttribute('aria-busy')
      divDados.textContent = 'Consultar'
    }
  }