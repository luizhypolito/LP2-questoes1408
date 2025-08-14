let sal = prompt("Digite o valor do seu salário: ");
sal = Number(sal);

let aumento = (sal*8)/100;

let total = sal + aumento;

console.log("Valor do novo salário = ", + total);