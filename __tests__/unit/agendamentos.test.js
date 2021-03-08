const { Agenda } = require("../../src/models/Agenda");
const { stringToTime } = require("../../src/helpers");

describe("Agenda", () => {
  it("Criar um novo agendamento", () => {
    const agendamento = {
      idMensagem: "bff58d7b-8b4a-456a-b852-5a3e000c0e63",
      idBroker: 1,
      telefoneCompleto: "46950816645",
      horarioDoAgendamento: stringToTime("14:00:00"),
      mensagem: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
    };

    const agenda = new Agenda();
    agenda.add({ ...agendamento });
    expect(agenda.agendamentos).toContainEqual(agendamento);
  });
});
