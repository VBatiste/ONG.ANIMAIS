function acharAnimalChip (){
    var buscarAnimal = prompt("insira chip do animal a procurar:");
    var animalFound = false
    for (var i = 0 ; i < listaDeAnimais.length; i++);
    if ( buscarAnimal === listaDeAnimais[i].Chip) {
        console.log("////animal encontrado////")
        console.log("nome: " + listaDeAnimais[i].nome )
        console.log("raça: " + listaDeAnimais[i].Raça )
        console.log("idade: " + listaDeAnimais[i].idade )
        console.log("chip: " +listaDeAnimais[i].Chip )
      animalFound = true;
    }
    if ( ! buscarAnimal === animal[i].Chip -1) {
         console.log("//animal não encontrado//")
    }
}
function acharTutorCpf (){
    var buscarTutor = prompt("insira cpf do tutor:");
    var tutorFound = false
    for (var i = 0 ; i < listaDeTutores.length; i++);
    if ( buscarTutor === listaDeTutores[i].cpf) {
        console.log("///////tutor encontrado////////")
        console.log("nome : " + listaDeTutores[i].nome )
        console.log("idade : " +listaDeTutores[i].idade )
        console.log("CPF : " + listaDeTutores[i].cpf )
      tutorFound = true;
    }
    if ( ! buscarTutor === listaDeTutores[i].cpf -1) {
         console.log("//tutor não encontrado//")
    }
}
function retorno(){
    var endmenu = Number(prompt("1-retornar para menu, 2- encerrar"))
    if(endmenu === 1){
        operação= Number(prompt("insira a operação"))
        switch (operação){
            case 1://cadastro de tutores
            registroTutores.nome = prompt("insira nome")
            registroTutores.sexo = prompt("insira sexo")
            registroTutores.idade = prompt("insira idade")
            registroTutores.endereço = prompt("insira endereço")
            registroTutores.cpf = prompt("insira cpf")
            addtutor()
            console.log("tutor cadastrado com sucesso")
            break;
            case 2://cadastro de animais
                animal.nome = prompt("insira nome")
                animal.Raca= prompt("insira raça")
                animal.Genero= prompt("insira genero")
                animal.peso= prompt("insira peso")
                animal.Estado= prompt("insira estado")
                animal.Chip= prompt("insira chip")
                animal.idade= prompt("insira idade")
                 addanimal();
                console.log("animal cadastrado com sucesso")
                console.log("o cadastro do Animal "+ animal.nome +", chip: " + animal.Chip +" foi completo")
                console.log("existem "+ listaDeAnimais.length+" animais cadastrados")
               retorno()
               break;
            case 3://lista de animais]
                console.log("existem "+ listaDeAnimais.length +" animais cadastrados")
                console.log(listaDeAnimais)
                retorno();
                break;
            case 4://lista de tutores
                console.log("Existem "+ listaDeTutores.length +" tutores registrados")
                console.log(listaDeTutores)
                retorno();
                break;
            case 5://animais a adoção
            for (var i = 0 ; i < listaDeAnimais.length; i++)
                if(animal[i].Estado === vivo){
                 console.log(listaDeAnimais)
                }
                retorno();
                break;
            case 6://editar tutores
    
                break;
            case 7://procurar animais
            acharAnimalChip ()
            retorno();
        break;
            case 8://procurar tutores
            acharTutorCpf ()
            retorno();
        break;
            default:
                console.log("operação inexitente: tente novamente")
                retorno()
                break;
    }
    }    

    if(endmenu === 2){
        console.log("Ate mais passar bem")
    }
}
function listarAnimais(){
    for (var i = 0 ; i < listaDeAnimais.length; i++);
    console.log("///////////////////////////////////")
    console.log("Nome: " +animal.nome)
    console.log("especie: "+animal.especie)
    console.log("Raça: " +animal.raça)
    console.log("Idade: "+animal.idade )
    console.log("Estado: " +animal.estado)
    console.log("Chip: "+animal.Chip)
   }
function listarTutores(){
    for (var i = 0 ; i < listaDeTutores.length; i++);
    console.log("///////////////////////////////////")
    console.log("Nome: " +tutor.nome)
    console.log("Idade: "+tutor.idade )
    console.log("Estado: " +tutor.endereco)
    console.log("Chip: "+tutor.cpf)
   }

animal={
    nome : null,
    especie : null,
    Raca : null,
    Genero :null,
    peso : 0,
    Estado :null,
    Chip : null,
    idade: 0} 

Tutor={
    nome :null,
    sexo :null,
    idade:0,
    endereco:null,
    cpf :null
}

var listaDeTutores = []

var listaDeAnimais = [
    { 
        nome : "teste",
        especie : "teste",
        Raca : "teste",
        Genero :"indef",
        peso :"1",
        Estado :"vivo",
        Chip : "14587966",
        idade: "1"
    } 
        
]

function addanimal (){
    listaDeAnimais.push(animal)
}
function addtutor (){
    listaDeTutores.push(Tutor)
}   

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
        addtutor()
        console.log("tutor cadastrado com sucesso")
        break;
        case 2://cadastro de animais
            animal.nome = prompt("insira nome")
            animal.Raca= prompt("insira raça")
            animal.Genero= prompt("insira genero")
            animal.peso= prompt("insira peso")
            animal.Estado= prompt("insira estado")
            animal.Chip= prompt("insira chip")
            animal.idade= prompt("insira idade")
             addanimal();
            console.log("animal cadastrado com sucesso")
            console.log("o cadastro do Animal "+ animal.nome +", chip: " + animal.Chip +" foi completo")
            console.log("existem "+ listaDeAnimais.length+" animais cadastrados")
           retorno()
           break;
        case 3://lista de animais]
            console.log("existem "+ listaDeAnimais.length +" animais cadastrados")
            listarAnimais();
            retorno();
            break;
        case 4://lista de tutores
            console.log("Existem "+ listaDeTutores.length +" tutores registrados")
            listarTutores();
            retorno();
            break;
        case 5://animais a adoção
        for (var i = 0 ; i < listaDeAnimais.length; i++)
            if(listaDeAnimais[i].Estado === vivo){
             console.log(listaDeAnimais)
            }
            retorno();
            break;
        case 6://editar tutores
        var buscarAnimal2 = prompt("insira chip do animal a procurar:");
        var animalFound = false
        for (var i = 0 ; i < listaDeTutores.length; i++)
            if(buscarAnimal2===listaDeTutores[i].length){
         listaDeTutores.slice(i,1)
         console.log("animal deletado")
         animalFound = true
        }
        if(! buscarAnimal === animal[i].Chip -1)
        console.log("//animal nao encontrado//")
        retorno();
            break;
        case 7://procurar animais
        acharAnimalChip ()
        retorno();
    break;
        case 8://procurar tutores
        acharTutorCpf ()
        retorno();
    break;
        default:
            console.log("operação inexitente: tente novamente")
            retorno()
            break;
}