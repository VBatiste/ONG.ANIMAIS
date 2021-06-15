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
      alert("animal encontrado")
    }
    if ( ! buscarAnimal === animal[i].Chip -1) {
         console.log("//Ficha Inexistente//")
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
      tutorFound = true ;
    }
    if ( ! buscarTutor === listaDeTutores[i].cpf -1) {
         console.log("//Ficha Inexistente//")
    }
}

function retorno(){
    var endmenu = Number(prompt("1- retornar para menu, 2- encerrar programa"))
    if(endmenu === 1){
            var operação = Number(prompt("insira a operação"))
        switch (operação){
        case 1://cadastro de tutores
            Tutor.nome = prompt("insira nome")
            Tutor.sexo = prompt("insira sexo")
            Tutor.idade = Number(prompt("insira idade"))
            Tutor.endereço = prompt("insira endereço")
            Tutor.cpf = prompt("insira cpf")
                addtutor()
                console.log("tutor cadastrado com sucesso")
                console.log("existem "+ listaDeTutores.length+" tutores cadastrados")
            retorno()
            break;
            
            case 2 ://cadastro de animais
                animal.nome = prompt("insira nome")
                animal.Raca= prompt("insira raça")
                animal.Genero= prompt("insira genero")
                animal.peso= prompt("insira peso")
                animal.Estado= prompt("insira estado")
                animal.Chip= prompt("insira chip")
                animal.idade= Number(prompt("insira idade"))
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
                var editartutor = prompt("insira cpf do tutor a procurar:");
                var tutorsempet = false
                var tutorFound = false
                for (var i = 0 ; i < listaDeTutores.length; i++)
                if( listaDeTutores[i].pets===0){
                tutorsempet= true
                }
                    if( tutorsempet= true,buscarAnimal===listaDeTutores[i].length){
                listaDeTutores.splice(i,1)
                console.log("tutor deletado")
                tutorFound = true
                }
                if(! buscarAnimal === animal[i].Chip -1){
                console.log("//animal nao encontrado//")
                }
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
            
            case 9:
                var editaranimal = prompt("insira cpf do tutor a procurar:");
                var animalLocated = false
                for (var i = 0 ; i < listaDeTutores.length; i++)
                    if(buscarAnimal===listaDeTutores[i].length){
                listaDeAnimais.splice(i,1)
                animalLocated= true
                console.log("animal deletado")
                }
                if(! buscarAnimal === animal[i].Chip -1)
                console.log("//animal nao encontrado//")
                retorno();
                break;

                case 10:
                adoção();
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
    console.log("Nome: " +listaDeAnimais[i].nome)
    console.log("especie: "+listaDeAnimais[i].especie)
    console.log("Raça: " +listaDeAnimais[i].raça)
    console.log("Idade: "+listaDeAnimais[i].idade )
    console.log("Estado: " +listaDeAnimais[i].estado)
    console.log("Chip: "+listaDeAnimais[i].Chip)
    console.log("adotado :"+listaDeAnimais[i].dono)
}

 function listarTutores(){
    for (var i = 0 ; i < listaDeTutores.length; i++);
    console.log("///////////////////////////////////")
    console.log("Nome: " +listaDeTutores[i].nome)
    console.log("Idade: "+listaDeTutores[i].idade )
    console.log("Endereço: " +listaDeTutores[i].endereco)
    console.log("Cpf: "+listaDeTutores[i].cpf)
   }
 
 
 animal={
    nome : null,
    especie : null,
    Raca : null,
    Genero :null,
    peso : 0,
    Estado :null,
    Chip : null,
    idade: 0 ,
    dono : null
} 
 
Tutor={
    nome :null,
    sexo :null,
    idade:0,
    endereco:null,
    cpf :null ,
    pets:[]
}
var listaDeTutores = []

var listaDeAnimais = []

function addanimal (){
    listaDeAnimais.push(animal)
}

function addtutor (){
    listaDeTutores.push(Tutor)
} 

function adoção(){
    var acharAnimal = prompt("insira chip do animal a procurar:");
    for(i=1;i<listaDeAnimais;i++)
    var animalsemdono = false
    var animalencontrado = false
    if(animal.Chip =! pets[i].Chip ){
        animalsemdono = true
    }
    if(animalsemdono = true,acharAnimal === animal.Chip){
        pets.push(animal)
        animalencontrado=true
        alert("animal adotado")  
    }


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
console.log("9.editar animais")
console.log("10.adoção")
var operação = Number(prompt("insira a operação"))
    switch (operação){
    case 1://cadastro de tutores
        Tutor.nome = prompt("insira nome")
        Tutor.sexo = prompt("insira sexo")
        Tutor.idade = Number(prompt("insira idade"))
        Tutor.endereço = prompt("insira endereço")
        Tutor.cpf = prompt("insira cpf")
            addtutor()
            console.log("tutor cadastrado com sucesso")
            console.log("existem "+ listaDeTutores.length+" tutores cadastrados")
        retorno()
        break;
        
        case 2 ://cadastro de animais
            animal.nome = prompt("insira nome")
            animal.Raca= prompt("insira raça")
            animal.Genero= prompt("insira genero")
            animal.peso= prompt("insira peso")
            animal.Estado= prompt("insira estado")
            animal.Chip= prompt("insira chip")
            animal.idade= Number(prompt("insira idade"))
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
            var editartutor = prompt("insira cpf do tutor a procurar:");
            var tutorsempet = false
            var tutorFound = false
            for (var i = 0 ; i < listaDeTutores.length; i++)
            if( listaDeTutores[i].pets===0){
            tutorsempet= true
            }
                if( tutorsempet= true,buscarAnimal===listaDeTutores[i].length){
            listaDeTutores.splice(i,1)
            console.log("tutor deletado")
            tutorFound = true
            }
            if(! buscarAnimal === animal[i].Chip -1){
            console.log("//animal nao encontrado//")
            }
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
        
        case 9:
            var editaranimal = prompt("insira chip do animal a procurar:");
            var animalLocated = false
            for (var i = 0 ; i < listaDeTutores.length; i++)
                if(buscarAnimal===listaDeAnimais[i].length){
            listaDeAnimais.splice(i,1)
            animalLocated= true
            console.log("animal deletado")
            }
            if(! buscarAnimal === animal[i].Chip -1)
            console.log("//animal nao encontrado//")
            retorno();
            break;

            case 10:
            adoção();
            retorno();
            break;


        default:
            console.log("operação inexitente: tente novamente")
            retorno()
            break;
}