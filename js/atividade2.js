// Caso a lista de peças seja superior a 10 imprima uma msg informando 
// a capacidade suficiante.

var listaDepecas = ['Amortecedor', 'Motor', 'Filtro'];


if (listaDepecas.length < 10){
    console.log('Ainda tem Espaço'); 
}else{
    console.log('Nao tem mais espaço')
}