const data = require('../data/zoo_data');

const objPreco = data.prices;

/*
1 - recebe os preços.
2- Verificar a qtd de crianças, adulto, e demais.
3- Calcular o Total.
*/
/* funções secundarias */
const valorCobrado = (listaDeObjPorIdade, preco) => {
  const precoPorCriancas = listaDeObjPorIdade.child * preco.child;
  const precoPorAdulto = listaDeObjPorIdade.adult * preco.adult;
  const precoPorSenior = listaDeObjPorIdade.senior * preco.senior;
  const total = (precoPorCriancas + precoPorAdulto + precoPorSenior);
  return total;
};

/* Fim das Funções secundarias */
function countEntrants(entrants) {
  // seu código aqui
  const child = entrants.filter((item) => item.age < 18).length;
  const adult = entrants.filter((item) => item.age >= 18 && item.age < 50).length;
  const senior = entrants.filter((item) => item.age >= 50).length;
  return { child,
    adult,
    senior,
  };
}

function calculateEntry(entrants) {
  //
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const a = countEntrants(entrants);
  return valorCobrado(a, objPreco);
}

module.exports = { calculateEntry, countEntrants };
