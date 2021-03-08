class Agenda {
  //get usado nos arquivos de testes para comparar os valores da lista
  get agendamentos() {
    return this._agendamentos;
  }

  constructor() {
    this._agendamentos = [];
  }

  _getMsgDeMesmoDestino(telefone) {
    //se tiver algum agendamento na lista com o mesmo número de telefone que foi passado por parametro,
    //será retornado o elemento da lista
    return this._agendamentos.find(
      (mensagem) => mensagem.telefoneCompleto === telefone
    );
  }

  _removerAgendamento(agendamento) {
    //basicamente remove o agendamento que é passado por parametro da lista  de agendamentos
    this._agendamentos.splice(this._agendamentos.indexOf(agendamento), 1);
  }

  _naoDeveIncluirNovoAgendamento(
    horarioDoNovoAgendamento,
    mensagemParaMesmoDestino
  ) {
    //Verifica se o hovo horário de agendamento é maior do que o horário já agendado
    //se retornar true, indica que o novo agendamento não poderá ser incluído na lista
    return horarioDoNovoAgendamento > mensagemParaMesmoDestino.agendamento;
  }

  add({
    idMensagem,
    idBroker,
    telefoneCompleto,
    horarioDoAgendamento,
    mensagem,
  }) {
    //Busco por mensagem para o mesmo destino (destino = telefone)
    const mensagemParaMesmoDestino = this._getMsgDeMesmoDestino(
      telefoneCompleto
    );

    //Verifico se encontrou alguma mensagem para o mesmo destino
    if (mensagemParaMesmoDestino) {
      //Se o horário do novo agendamento for maior que o horário que já está agendado,
      //não deve incluir a nova mensagem na lista
      if (
        this._naoDeveIncluirNovoAgendamento(
          horarioDoAgendamento,
          mensagemParaMesmoDestino
        )
      )
        return;

      //Se chegar até aqui, indica que o novo horário de agendamento é menor que o horário que já está agendado, então
      //é removida a mensagem com horário de agendamento maior
      //para que em seguida seja incluída a mensagem com horário menor
      this._removerAgendamento(msgDeMesmoDestino);
    }

    //Inclusão da nova mensagem na lista, considerando os critérios acima
    this._agendamentos.push({
      idMensagem,
      idBroker,
      telefoneCompleto,
      horarioDoAgendamento,
      mensagem,
    });
  }
}

module.exports = { Agenda };
