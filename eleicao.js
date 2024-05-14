let votosCarlos = 0;
let votosMarcos = 0;
let votosLaura = 0;
let votosMarcela = 0;
let votosNuloBranco = 0;

while (true) {
    let voto = prompt("Escolha seu candidato (Carlos, Marcos, Laura, Marcela) ou digite 'nulo' para voto nulo/branco:")

    if (voto === null) {
        break;
    }

    switch (voto.toLowerCase()) {
        case "carlos":
            votosCarlos++;
            console.log("Seu voto para Carlos foi registrado com sucesso!");
            break;
        case "marcos":
            votosMarcos++;
            console.log("Seu voto para Marcos foi registrado com sucesso!");
            break;
        case "laura":
            votosLaura++;
            console.log("Seu voto para Laura foi registrado com sucesso!");
            break;
        case "marcela":
            votosMarcela++;
            console.log("Seu voto para Marcela foi registrado com sucesso!");
            break;
        case "nulo":
            votosNuloBranco++;
            console.log("Seu voto nulo/branco foi registrado com sucesso!");
            break;
        default:
            console.log("Opção de voto inválida!");
    }

    let continuar = prompt("Deseja votar novamente? (sim/não)");

    if (continuar != "sim") {
        break;
    }
}

console.log("Resultados da Eleição:\n" +
    "Carlos: " + votosCarlos + " votos\n" +
    "Marcos: " + votosMarcos + " votos\n" +
    "Laura: " + votosLaura + " votos\n" +
    "Marcela: " + votosMarcela + " votos\n" +
    "Nulo/Branco: " + votosNuloBranco + " votos");