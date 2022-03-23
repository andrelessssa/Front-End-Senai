// Caso a peça tenha um nome com quantidade inferior a 3 caracteres,
// informe uma mensagem de erro.

let nomePeca = 'Vos'
if (nomePeca.length > 2){   // foi observado que colocando 3 ele inclui 3 caracteres 
    console.log('Nome da peça esta adequado')
}else if(nomePeca.length == 0){
    console.log('Nome da peça está vazio')

}else{
    console.log('Nome da peça precisa ter no mínimo 3 caracteres.')

}

