function validarMensagem(mensagem) {
  mensagem = mensagem.replace(" ", "");
  return mensagem.length <= 140;
}

module.exports = {
  validarMensagem,
};
