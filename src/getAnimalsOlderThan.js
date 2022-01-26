const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalSelecionado = data.species.filter((eleAtual) => eleAtual.name === animal);
  const animalIdadeMinima = animalSelecionado[0].residents.every((eleAtual) => eleAtual.age >= 7);
  return animalIdadeMinima;
}

module.exports = getAnimalsOlderThan;
