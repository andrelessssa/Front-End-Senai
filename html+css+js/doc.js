

var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
console.log(dataAtual);


const para = document.querySelector('p');

para.addEventListener('click', atualizarNome);
function atualizarNome(){
    var nome = prompt('Insira um novo Nome: ');
    para.textContent = 'Nome :'+ nome; 
}
