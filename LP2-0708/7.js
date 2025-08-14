let valor = prompt("Digite o valor da compra: ");
valor = Number(valor);

let desconto = (valor*5)/100;
let total = valor - desconto;

console.log("Valor com desconto= ", + total);