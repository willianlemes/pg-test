const { validarDDD, validarTelefoneBlackList } = require("../../src/helpers");
jest.mock("axios");
const axios = require("axios").default;

describe("Telefone", () => {
  it("Validar um DDD válido", () => {
    const ddd = "46";
    const dddEValido = validarDDD(ddd);
    expect(dddEValido).toBeTruthy();
    expect(dddEValido).not.toBeUndefined();
  });
  it("Validar um DDD com formato inválido", () => {
    const ddd = "00";
    const dddEValido = validarDDD(ddd);
    expect(dddEValido).toBeFalsy();
  });
  it("Validar DDD com menos de 2 dígitos", () => {
    const ddd = "1";
    const dddEValido = validarDDD(ddd);
    expect(dddEValido).toBeFalsy();
  });
  it("Validar DDD com mais de 2 dígitos", () => {
    const ddd = "1222";
    const dddEValido = validarDDD(ddd);
    expect(dddEValido).toBeFalsy();
  });
  it.each([[11], [12], [13], [14], [15], [16], [17], [18], [19]])(
    "Validar DDD %i do estado de São Paulo",
    (ddd) => {
      const dddEValido = validarDDD(ddd.toString());
      expect(dddEValido).toBeFalsy();
    }
  );
  //Aqui foi necessário fazer um mock por conta da chamada da função validarTelefoneBlackList,
  //para não fazer a requisição para API toda vez que for executado os testes
  it("Validar Telefone na BlackList", async () => {
    const telefone = "46950816645";
    const valorEsperado = {
      phone: telefone,
      active: true,
    };

    axios.get = jest.fn().mockResolvedValue({
      data: valorEsperado,
    });

    const response = await validarTelefoneBlackList(telefone);
    expect(response.data).toStrictEqual(valorEsperado);
  });
});
