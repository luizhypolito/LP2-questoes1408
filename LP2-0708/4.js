let n1 = prompt("Digite a primeira nota: ");
n1 = Number(n1);

let p1 = prompt("Digite o peso dela: ");
p1 = Number(p1);

let n2 = prompt("Digite a segunda nota: ");
n2 = Number(n2);

let p2 = prompt("Digite o peso dela: ");
p2 = Number(p2);

let n3 = prompt("Digite a terceira nota: ");
n3 = Number(n3);

let p3 = prompt("Digite o peso dela: ");
p3 = Number(p3);

let pesot = p1+ p2 + p3;

let media = ((n1* p1) + (n2 + p2) + ( p3* n3))/pesot;

console.log("A média é igual à: ", + media);