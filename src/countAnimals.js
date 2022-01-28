const data = require('../data/zoo_data');

const objAnimais = data.species;

/* Inicios de Funções */

/* Função para criar o objeto que tem como Kay o nome do animal e tem como value a quantidade  */
const criarObjeto = (listaDeAnimais, numeroDeAnimaisPorNome) => {
  const objetoRetornado = {};
  for (let i = 0; i < listaDeAnimais.length; i += 1) {
    const animalAtual = listaDeAnimais[i];
    objetoRetornado[animalAtual] = numeroDeAnimaisPorNome[i];
  }
  return objetoRetornado;
};
// Pegar o numero dos animais
const pegarNumeroDeAnimais = () => {
  const listaDeAnimais = objAnimais.map((item) => item.name);
  const numeroDeAnimaisPorNome = objAnimais.map((item) => item.residents.length);
  return criarObjeto(listaDeAnimais, numeroDeAnimaisPorNome);
};
/* Item-5.2 */
// Retorna a quantidade de animais.
const objetoAnimalEspecifico = (animalPorEspecie) => { // Usado no segundo if
  const animaisTipo = objAnimais.filter((item) => item.name === animalPorEspecie);
  const animaisTotais = animaisTipo[0].residents.length;
  return animaisTotais;
};
/* Item-5.3 */
// Retorna a quantidade de animais por sexo
const numerosDeAnimaisPorSexo = (animalPorEspecie, animalPorSexo) => {
  const animaisTipo = objAnimais.filter((item) => item.name === animalPorEspecie);
  const animalSexo = animaisTipo[0].residents.filter((item) => item.sex === animalPorSexo);
  const animaisTotais = animalSexo.length;
  return animaisTotais;
};

/* Item-5.4 Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do sexo feminino. */
// Filtra da lista de animais somente o sexo desejado.

/* Fim das Funções secundarias */

/* inicio de função principal */
function countAnimals(animal) {
  // seu código aqui
  if (typeof animal === 'object' && Object.keys(animal).length === 1) {
    const animalSpecie = animal.specie;
    return objetoAnimalEspecifico(animalSpecie);
  } if (typeof animal === 'object' && Object.keys(animal).length === 2) {
    const animalSpecie = animal.specie;
    const animalSex = animal.sex;
    return numerosDeAnimaisPorSexo(animalSpecie, animalSex);
  }
  return pegarNumeroDeAnimais();
}

module.exports = countAnimals;
/*
countAnimals({ specie: 'giraffes', sex: 'female' });
countAnimals({specie: 'penguins'});
countAnimals();
*/
