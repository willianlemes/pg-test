const regDDDValido = new RegExp("[1-9]{2}", "g");
const testTelefone = new RegExp("9{1}[7-9]\\d{7}", "g");
const testDDDUFSaoPaulo = new RegExp("1[1-9]", "g");

module.exports = {
  regDDDValido,
  testTelefone,
  testDDDUFSaoPaulo,
};
