const {
    validarDDD,
    validarTelefone,
    validarTelefoneBlackList,
  } = require("./telefone"),
  { validarAgendamento } = require("./agendamento"),
  { validarMensagem } = require("./mensagem"),
  { getIdBroker } = require("./broker"),
  { stringToTime } = require("./utils");

module.exports = {
  validarDDD,
  validarTelefone,
  validarTelefoneBlackList,
  validarAgendamento,
  validarMensagem,
  getIdBroker,
  stringToTime,
};
