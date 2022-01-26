const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName === undefined) {
    return {};
  }
  const primeiroNome = data.employees.find((elemAtual) => elemAtual.firstName === employeeName);
  const ultimoNome = data.employees.find((elemAtual) => elemAtual.lastName === employeeName);
  if (primeiroNome === undefined) {
    return ultimoNome;
  } if (ultimoNome === undefined) {
    return primeiroNome;
  }
}

module.exports = getEmployeeByName;
