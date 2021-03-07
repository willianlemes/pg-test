function validarAgendamento(agendamento) {
  const horarioDeBloqueio = stringToTime("19:59:59");
  return horarioDoAgendamento <= horarioDeBloqueio;
}

module.exports = {
  validarAgendamento,
};
