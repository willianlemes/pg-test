function getIdBroker(operadora) {
  operadora = operadora.toUpperCase();
  switch (operadora) {
    case "VIVO":
    case "TIM":
      return 1;
    case "CLARO":
    case "OI":
      return 2;
    case "NEXTEL":
      return 3;
  }
}

module.exports = {
  getIdBroker,
};
