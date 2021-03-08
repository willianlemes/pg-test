const { validarDDD } = require("../../src/helpers");

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
});
