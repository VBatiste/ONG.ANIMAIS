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
function retorno(){
    var endmenu = Number(prompt("1-retornar para menu, 2- encerrar"))
    if(endmenu === 1){
    operação= Number(prompt("insira a operação"))
    }
    if(endmenu === 2){
        console.log("Ate mais passar bem")
    }
}
animal = {
    nome : null
    ,especie : null
    ,Raca : null
    ,Genero :null
    ,peso : null
    ,Estado :null
    ,Chip : null
    ,idade: 0
} 
 registroTutores ={
    nome :null
    ,sexo :null
    ,idade:0
    ,endereço:null
    ,cpf :null
}
var listaDeTutores = []
var listaDeAnimais = []
    

console.log("////////// SISTEMA DE ADOÇÃO ////////////")
console.log("Porfavor insira a operação q deseja fazer")
console.log("1.cadastro de tutores")
console.log("2.cadastro de animais")
console.log("3.lista de animais")
console.log("4.lista de tutores")
console.log("5.animais para adoção")
console.log("6.editar tutores")
console.log("7.procurar animais")
console.log("8.procurar tutores")
var operação = Number(prompt("insira a operação"))
    switch (operação){
        case 1://cadastro de tutores
        registroTutores.nome = prompt("insira nome")
        registroTutores.sexo = prompt("insira sexo")
        registroTutores.idade = prompt("insira idade")
        registroTutores.endereço = prompt("insira endereço")
        registroTutores.cpf = prompt("insira cpf")
        listaDeTutores.push(registroTutores)
        console.log("tutor cadastrado com sucesso")
        case 2://cadastro de animais
            animal.nome = prompt("insira nome")
            animal.Raca= prompt("insira raça")
            animal.Genero= prompt("insira genero")
            animal.peso= prompt("insira peso")
            animal.Estado= prompt("insira estado")
            animal.Chip= prompt("insira chip")
            animal.idade= prompt("insira idade")
            listaDeAnimais.push(animal);
            console.log("animal cadastrado com sucesso")
            console.log("o cadastro do Animal "+ animal.nome +", chip: " + animal.Chip +" foi completo")
            console.log("existem "+ listaDeAnimais.length+" animais cadastrados")
           retorno()
        case 3://lista de animais]
            console.log("existem "+ listaDeAnimais.length +" animais cadastrados")
            console.log(listaDeAnimais)
            retorno()
            break;
        case 4://lista de tutores
            console.log("Existem "+ listaDeTutores.length +" tutores registrados")
            console.log(listaDeTutores)
            retorno()
            break;
        case 5://animais a adoção
        for (var i = 0 ; i < listaDeAnimais.length; i++)
            if(animal(i).Estado === vivo){
             console.log(listaDeAnimais)
            }
            retorno()
            break;
        case 6://editar tutores
            break;
        case 7://procurar animais
        acharAnimalChip()
        retorno()
            break;
        case 8://procurar tutores
        acharTutorCpf()
        retorno()
            break;
        default:
            console.log("operação inexitente: tente novamente")
            retorno()
            break;
}