// Pede os dados do vinho ao usuário
var nome = prompt("Qual é o nome do vinho?");

var tipo = prompt("Qual é o tipo do vinho? Tinto, Branco ou Rosé?");

var safra = prompt("Qual é o ano da safra?");

var quantidade = prompt("Quantas unidades há em estoque?");

// Avisa que o cadastro foi concluído
alert("Cadastro realizado! Veja os detalhes no console.");

alert("A seguir, veja os detalhes do vinho no console.");

// Mostra os dados cadastrados no console (F12)
console.log("=== VINHO CADASTRADO ===");

console.log("Nome: " + nome);

console.log("Tipo: " + tipo);

console.log("Safra: " + safra);

console.log("Quantidade em estoque: " + quantidade);

