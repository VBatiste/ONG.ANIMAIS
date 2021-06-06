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
    nome =null
    ,sexo =null
    ,idade=0
    ,endereço=null
    ,cpf =null
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
            break;
        case 2://cadastro de animais
            animal.nome = prompt("insira nome")
            animal.Raca= prompt("insira idade")
            animal.Genero= prompt("insira genero")
            animal.peso= prompt("insira peso")
            animal.Estado= prompt("insira estado")
            animal.Chip= prompt("insira chip")
            animal.idade= prompt("insira idade")
            listaDeAnimais.push(animal);
            console.log("animal cadastrado com sucesso")
            break;
        
        case 3://lista de animais
            break;
        case 4://lista de tutores
            break;
        case 5://animais a adoção
            break;
        case 6://editar tutores
            break;
        case 7://procurar animais
            break;
        case 8://procurar tutores
            break;
        default:
            console.log("operação inexitente: tente novamente")
            break;
}