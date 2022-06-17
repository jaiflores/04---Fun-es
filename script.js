//1 - crie uma função que exiba uma mensagem no console

function mensagem(){
    console.log("O que estou fazendo aqui?!");
}

mensagem();

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function nome(nome){
    
    console.log(`Meu nome, ${nome}!`);
}

nome("Jaianny");


//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function about(nome, idade, estilo){
    console.log(`Meu nome é ${nome}, tenho ${idade} anos, e gosto de ${estilo}`)
}
about("Jaianny", 30, "música romantica")


//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console


function gosto(filme,musica){
    console.log(`Meu filme favorito é ${filme} e minha música favorita é ${musica}`)
    
}

gosto("todos do Harry Potter", "Mais uma vez")




// *Bônus:

//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função

function conta(){
    return 10;
}
let resultado = 3 * conta();
console.log(resultado);