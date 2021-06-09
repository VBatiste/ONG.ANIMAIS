/*var addAnimal = listaDeAnimais.push(Animal)
listaDeAnimais = [];
var animal = {
    nome = null
    ,especie = null
    ,Raça = null
    ,Genero =null
    ,peso =0
    ,Estado =null
    ,Chip = null
}
animal.nome = prompt("ensira nome do animal")
animal.Raça= prompt("ensira especie do animal")
animal.Genero= prompt("ensira genero do animal")
animal.peso= prompt("ensira peso do animal")
animal.Estado= prompt("ensira estado do animal")
animal.Chip= prompt("ensira numeração de chip do animal")
//if animal ja estiver seu chip cadastrado
    //(console.log("animal invalido: chip ja registrado"))
//else{
    listaDeAnimais.push(Animal)
    console.log("animal cadastrado com sucesso")
//}
 
var registroTutores ={
    nome =null
    ,sexo =null
    ,idade=0
    ,indereço=null
    ,cpf =null
}





var animal = {
    nome = null
    ,especie = null
    ,Raça = null
    ,Genero =null
    ,peso =0
    ,Estado =null
    ,Chip = null
} 
animal.nome = prompt(nome)
animal.Raça= prompt(Raça)
animal.Genero= prompt(Genero)
animal.peso= prompt(Peso)
animal.Estado= prompt(Estado)
animal.Chip= prompt(Chip)

listaDeAnimais.push(animal);\ */

function acharAnimalChip (){
    var buscarAnimal = prompt("insira chip do animal a procurar:")
    var animalFound = false
    for (var i = 0 ; i < listaDeAnimais.length; i++)
    if ( buscarAnimal === animal[i].Chip) {
        console.log("animal encontrado")
        console.log("nome: " + animal[i].nome )
        console.log("raça: " + animal[i].Raça )
        console.log("idade: " + animal[i].idade )
        console.log("chip: " + animal[i].Chip )
      animalFound = true
    }
    if ( ! buscarAnimal === animal[i].Chip -1) {
         console.log("animal não encontrado")
    }
}
function acharTutorCpf (){
    var buscarTutor = prompt("insira cpf do tutor:")
    var tutorFound = false
    for (var i = 0 ; i < listaDeTutores.length; i++)
    if ( buscarTutor === registroTutores[i].cpf) {
        console.log("tutor encontrado")
        console.log("nome : " + registroTutores[i].nome )
        console.log("idade : " + registroTutores[i].idade )
        console.log("CPF : " + registroTutores[i].cpf )
      tutorFound = true
    }
    if ( ! buscarTutor === registroTutores[i].cpf -1) {
         console.log("tutor não encontrado")
    }
}

 var lista = []
 var objeto = {
     nome : null,
     idade : null
 }
 objeto.nome = prompt("nome")
 objeto.idade = prompt("idade")
 lista.push(objeto)
 console.log("objeto ta na lista supostamente")