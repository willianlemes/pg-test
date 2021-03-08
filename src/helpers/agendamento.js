const { stringToTime } = require("./utils");

function validarAgendamento(horarioDoAgendamento) {
  const horarioDeBloqueio = stringToTime("19:59:59");
  return horarioDoAgendamento <= horarioDeBloqueio;
}

module.exports = {
  validarAgendamento,
};
