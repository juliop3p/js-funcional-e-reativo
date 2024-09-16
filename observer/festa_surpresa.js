const readLine = require("readline");

function obterResposta(pergunta) {
  const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(pergunta, (resposta) => {
      resolve(resposta);
      rl.close();
    });
  });
}

function namorada() {
  console.log("N: Apagar as luzes...");
  console.log("N: Pedir silêncio...");
  console.log("N: Surpresa!!!");
}

function sindico() {
  console.log("S: Monitorando o barulho");
}

async function porteiro(interessados) {
  while (true) {
    const resp = await obterResposta("O namorado chegou? (s/N/q) ");

    if (resp.toLowerCase() === "s") {
      (interessados || []).forEach((interessado) => {
        interessado();
      });
    } else if (resp.toLowerCase() === "q") {
      break;
    }
  }
}

/*
    Chamada da Função -> Registra os dois observadores!
    Os observadores são: namorada e sindico
    O subject é o porteiro!
*/

porteiro([namorada, sindico]);
