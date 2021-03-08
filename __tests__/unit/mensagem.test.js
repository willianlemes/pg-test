const { validarMensagem } = require("../../src/helpers");

describe("Mensagem", () => {
  it("Validar mensagem com menos de 140 caracteres", () => {
    const mensagem = "aaaaaaaaaaaaaaa";
    const mensagemEValida = validarMensagem(mensagem);
    expect(mensagemEValida).toBeTruthy();
  });
  it("Validar mensagem com mais de 140 caracteres", () => {
    const mensagem =
      "sfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfd" +
      "sfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfds" +
      "fdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssf" +
      "dfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfdssfdfdsfdsfdsfdsfds";
    const mensagemEValida = validarMensagem(mensagem);
    expect(mensagemEValida).toBeFalsy();
  });
});
