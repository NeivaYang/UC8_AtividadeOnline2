let dataevento;
let dataHoje;
let idadeparticipante = 18;
let qtdparticipantes = 99;
let nomeparticipantes = ["bruno", "joão", "Zé"];
let eventos = ["x", "y", "z"];
let listagem;

dataHoje = new Date()

dataevento = new Date(2022, 08, 28)

if(dataevento > dataHoje)
{
    console.log("data válida")
    console.log(new Intl.DateTimeFormat("pt-BR", {day: "numeric", month:"long", year: "numeric"}).format(dataevento));
}
else{
    console.log("Data Inválida")
}
if(idadeparticipante >= 18){
    console.log("cadastro permitido")
}
else{
    console.log("cadastro permitido apenas para maiores de idade")
}
if(qtdparticipantes < 100){
    console.log("ainda há vagas")
}
else{
    console.log("esgotado")
}
console.log("eventos cadastrados:")
console.log(eventos);