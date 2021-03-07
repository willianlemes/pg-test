function stringToTime(timeString) {
  const dataAtual = new Date();
  const [hora, min, seg] = timeString.split(":");
  const horario = new Date(
    dataAtual.getFullYear(),
    dataAtual.getMonth(),
    dataAtual.getDay(),
    hora,
    min,
    seg
  ).getTime();
  return horario;
}

module.exports = {
  stringToTime,
};
