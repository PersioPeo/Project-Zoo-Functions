const data = require('../data/zoo_data');

const geraListaDeNomesComSexo = (element, sex) => {
  if (sex === undefined) {
    return element.name;
  }
  if (element.sex === sex) {
    return element.name;
  }
};
const organiza = (nomes, sort) => {
  if (sort === true) {
    return nomes.sort();
  }
  return nomes;
};
const listaDeNomes = () => {
  const animalPorArea = { NE: [], NW: [], SE: [], SW: [] };
  data.species.forEach((elemento) => {
    animalPorArea[elemento.location].push(elemento.name);
  });
  return animalPorArea;
};

function getAnimalMap(options) {
  const animalPorArea = { NE: [], NW: [], SE: [], SW: [] };
  if (!options || !options.includeNames) {
    return listaDeNomes();
  }
  data.species.forEach((elemento) => {
    let arrayDeNomes = [];
    elemento.residents.forEach((element) => {
      const nomeParaVerificar = geraListaDeNomesComSexo(element, options.sex);
      if (nomeParaVerificar !== undefined) {
        arrayDeNomes.push(geraListaDeNomesComSexo(element, options.sex));
      }
    });
    arrayDeNomes = organiza(arrayDeNomes, options.sorted);
    const tipoENome = { [elemento.name]: arrayDeNomes };
    animalPorArea[elemento.location].push(tipoENome);
  });
  return animalPorArea;
}

module.exports = getAnimalMap;
