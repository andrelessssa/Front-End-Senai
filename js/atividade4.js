// Se a data do evento for posterior à data atual, 
// permitir o evento; 
// senão, alertar que o cadastro não será permitido 
// por data inválida.
// Se o participante for maior de 18 anos, 
// permitir o cadastro; senão, 
// alertar que o cadastro não é permitido pela idade.
// Listar participantes e palestrantes por evento.
// Enquanto a quantidade de participantes for inferior a 100,
// permitir cadastro; senão, 
// alertar que o cadastro não será permitido por ter excedido
// o limite.



var data = new Date();
var dia = String(data.getDate()).padStart(2, '0');
var mes = String(data.getMonth() + 1).padStart(2, '0');
var ano = data.getFullYear();
dataAtual = dia + '/' + mes + '/' + ano;
console.log(dataAtual);
var diaEvento = 23

if (diaEvento <= (dia ) ) {
    console.log('Data Inválida')
}else{
    console.log('Data permitida')
}


var idade = 20


if (idade > 18){
    console.log('Cadastro permitido ')

}else{
    console.log('Cadastro nao permitido pela idadde.')
}

var participante = ['Andre ','ana', 'maria']

if (participante.length < 2){
    console.log('Cadastro nao permitido, Limite de participantes excedido.  ')
}else{
    console.log('Nome Cadastrado Com Sucesso. ')
}