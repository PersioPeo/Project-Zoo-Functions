const data = require('../data/zoo_data');

const objfuncionario = data.employees;

function isManager(id) {
  // seu código aqui
  const gerencia = [];
  for (let i = 0; i < objfuncionario.length; i += 1) {
    const elemAtual = objfuncionario[i];
    gerencia.push(...elemAtual.managers);
  }
  return gerencia.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId)) {
    const colaboradoresDaGenrecia = objfuncionario.filter(
      (elemAtual) => elemAtual.managers.includes(managerId),
    );
    const funcionariosNomeCompleto = colaboradoresDaGenrecia.map(
      (elemAtual) => `${elemAtual.firstName} ${elemAtual.lastName}`,
    );
    return funcionariosNomeCompleto;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
