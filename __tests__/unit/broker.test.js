const { getIdBroker } = require("../../src/helpers");

describe("Broker", () => {
  it.each([
    ["TIM", 1],
    ["VIVO", 1],
    ["CLARO", 2],
    ["OI", 2],
    ["NEXTEL", 3],
  ])("Validar Id Broker da %s ", (operadora, esperado) => {
    const idBroker = getIdBroker(operadora);
    expect(idBroker).toBe(esperado);
  });
});
