const data = require('../data/zoo_data');

const animal = data.species;
const funcionario = data.employees;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const selectPrimeiorAnimal = (idRecebido) => {
    const objFuncionario = funcionario.find(
      (element) => element.id === idRecebido,
    ).responsibleFor[0];
    return objFuncionario;
  };
  const idDoAnimal = selectPrimeiorAnimal(id);
  const verificaAnimal = (idAnimal) => {
    const nomeAnimal = animal.find((element2) => element2.id === idAnimal);
    const residents = nomeAnimal.residents.reduce(
      (element3, current) => ((element3.age > current.age) ? element3 : current),
    );
    const array = [residents.name, residents.sex, residents.age];
    return array;
  };
  return verificaAnimal(idDoAnimal);
}
// console.log(getOldestFromFirstSpecies(id));
module.exports = getOldestFromFirstSpecies;
