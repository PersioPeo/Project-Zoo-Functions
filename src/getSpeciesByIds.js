const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) {
    return [];
  } if (ids.length === 1) {
    const resultDoFiltroSoUm = data.species.filter((valorAtual) => valorAtual.id === ids[0]);
    return resultDoFiltroSoUm;
  } if (ids.length > 1) {
    const resultDoFiltroMaisDeUm = data.species.filter(
      (valorAtual) => valorAtual.id === ids[0] || valorAtual.id === ids[1],
    );
    return resultDoFiltroMaisDeUm;
  }
}
module.exports = getSpeciesByIds;
