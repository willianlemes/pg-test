const axios = require("axios").default;

function validarDDD(ddd) {
  //Utilizando regex para validar o formato do DDD
  //A regra usada é que o DDD tem que ser 2 digitos de 1 a 9
  //Não consegui encontrar se existe mais critérios para estabelecer que um DDD é válido.
  const testDDD = new RegExp("^[1-9]{2}$", "g");
  if (!testDDD.test(ddd)) return false; //DDD não possui formato válido

  //Validando se o DDD está em um intervalo de 11 a 19 (DDDs existentes no estado de São Paulo)
  const testDDDUFSaoPaulo = new RegExp("^1[1-9]$", "g");
  if (testDDDUFSaoPaulo.test(ddd)) return false; //DDD é do estado de São Paulo

  return true;
}

function validarTelefone(telefone) {
  //1. Primeiro dígito tem que ser 9
  //2. Segundo dígito tem que ser maior que 6 (intervalo de 7 a 9)
  //3. Tem que possuir 9 dígitos
  const testTelefone = new RegExp("^9[7-9]\\d{7}$", "g");
  if (!testTelefone.test(telefone)) return false; //Telefone não possui um formato válido

  return true;
}

async function validarTelefoneBlackList(telefoneCompleto) {
  //Utilizei a lib axios para fazer a chamada do endpoint blacklist
  try {
    await axios.get(
      `https://front-test-pg.herokuapp.com/blacklist/${telefoneCompleto}`
    );
    return false;
  } catch (error) {
    return true;
  }
}

module.exports = {
  validarDDD,
  validarTelefone,
  validarTelefoneBlackList,
};
