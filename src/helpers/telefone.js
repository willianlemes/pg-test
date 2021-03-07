const axios = require("axios").default;

function validarDDD(ddd) {
  if (ddd.length !== 2) return false; //DDD não possui dois dígitos
  const dddValido = regDDDValido.test(ddd);
  if (!dddValido) return false; //DDD não possui formato válido
  if (testDDDUFSaoPaulo.test(ddd)) return false; //DDD é do estado de São Paulo
  return true;
}

function validarTelefone(telefone) {
  if (telefone.length !== 9) return false; //Telefone não possui nove dígitos
  if (!testTelefone.test(telefone)) return false; //Telefone não possui um formato válido
  return true;
}

async function validarTelefoneBlackList(telefoneCompleto) {
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
