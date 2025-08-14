let distan= prompt("Digite a distancia da viagem em Km: ");
distan=Number(distan);

let velm= prompt("Digite a velociade média durante a viagem: ");
velm=Number(velm);

let combust= prompt("Digite o valor do combustível: ");
combust=Number(combust);

let cons= prompt("Digite o consumo do carro: ");
cons=Number(cons);

let tempog = distan/velm;

let consut = distan / cons;

let custo = combust * cons;

console.log("Tempo da viagem em horas: ", +tempog);

console.log("Quantidade de litros consumidos: ", +consut);

console.log("Custo estimato da viagem: ", + custo);
