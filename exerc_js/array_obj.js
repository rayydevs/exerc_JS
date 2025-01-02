/*  -Crie um array chamado frutas contendo "maçã", "banana" e "uva".
    -Adicione uma nova fruta ao final da lista.
    -Crie um objeto chamado carrinho com a propriedade itens, e atribua o array frutas a ela.
    -Exiba o nome da segunda fruta usando o objeto carrinho.  */



let frutas = ["maçã","banana","uva"]; //array frutas
frutas.push("goiaba"); //"push" adiciona a fruta no final da lista

let carrinho = { //objeto carrinho 
    itens: frutas //propriedade
}
console.log(carrinho.itens[1]); //exibe banana
