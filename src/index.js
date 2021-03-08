const fs = require("fs");
const { Agenda } = require("./models/Agenda");

const {
  validarDDD,
  validarTelefone,
  validarTelefoneBlackList,
  validarAgendamento,
  validarMensagem,
  getIdBroker,
  stringToTime,
} = require("./helpers");

//Alterar o endereço para o destino do arquivo que será carregado
fs.readFile("./regex.txt", "utf-8", async function (err, data) {
  if (err) throw err;

  //Transformando cada linha do arquivo em lista
  const linhas = data.split("\r\n");
  let idBroker = "";
  const agenda = new Agenda();

  for (const linha of linhas) {
    //transformando cada valor separado por ; em um elemento de uma lista
    //Utilizo desestruturação do array
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

    try {
      await validarTelefoneBlackList(telefoneCompleto);
      continue;
    } catch (error) {}

    const horarioDoAgendamento = stringToTime(agendamento);

    if (!validarAgendamento(horarioDoAgendamento)) continue;

    idBroker = getIdBroker(operadora);

    agenda.add({
      idMensagem,
      idBroker,
      telefoneCompleto,
      horarioDoAgendamento,
      mensagem,
    });
  }

  for (const mensagem of agenda.agendamentos) {
    console.log(`${mensagem.idMensagem};${idBroker}`);
  }
});
