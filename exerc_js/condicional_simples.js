// programa onde pergunte a nota do aluno e confira se esta aprovado ou reprovado 

let nota= prompt ("Qual foi sua nota?");
nota = parseFloat(nota); // parseFloat ou parseInt converte a string para número, prompt retorna uma string

    if(nota >= 6){
        console.log("Você está aprovado!")
    }else{
        console.log("Você está reprovado!")
    }