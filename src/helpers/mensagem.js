//Não sei se realmente deveria, mas estou removendo os
//espaços antes de contar os caracteres da mensagem
function validarMensagem(mensagem) {
  mensagem = mensagem.replace(" ", "");
  return mensagem.length <= 140;
}

module.exports = {
  validarMensagem,
};
