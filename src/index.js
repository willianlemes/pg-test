const fs = require("fs");
const {
  validarDDD,
  validarTelefone,
  validarTelefoneBlackList,
  validarAgendamento,
  validarMensagem,
  getIdBroker,
  stringToTime,
} = require("./helpers");
const regDDDValido = new RegExp("[1-9]{2}", "g");
const testTelefone = new RegExp("9{1}[7-9]\\d{7}", "g");
const testDDDUFSaoPaulo = new RegExp("1[1-9]", "g");

fs.readFile("./regex.txt", "utf-8", async function (err, data) {
  if (err) throw err;

  const linhas = data.split("\r\n");
  const mensagensLiberadas = [];

  for (const linha of linhas) {
    const [
      idMensagem,
      ddd,
      telefone,
      operadora,
      agendamento,
      mensagem,
    ] = linha.split(";");

    const telefoneCompleto = ddd + telefone;

    if (!validarDDD(ddd)) continue;

    if (!validarTelefone(telefone)) continue;

    if (!(await validarTelefoneBlackList(telefoneCompleto))) continue;

    const horarioDoAgendamento = stringToTime(agendamento);

    if (!validarAgendamento(horarioDoAgendamento)) continue;

    const idBroker = getIdBroker(operadora);

    //Identificar agendamentos pro mesmo endereço
    msgDeMesmoDestino = mensagensLiberadas.find(({ fone, agendamento }) => {
      return fone === telefoneCompleto && agendamento >= horarioDoAgendamento;
    });

    if (msgDeMesmoDestino) {
      mensagensLiberadas.slice(
        mensagensLiberadas.indexOf(msgDeMesmoDestino),
        1
      );
    }

    mensagensLiberadas.push({
      idMensagem,
      fone: telefoneCompleto,
      operadora,
      agendamento: horarioDoAgendamento,
      mensagem,
    });

    console.log(`${idMensagem};${idBroker}`);
  }
});
