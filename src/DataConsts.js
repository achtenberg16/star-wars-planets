export const TABLE_HEADERS = ['Name', 'Rotation Period',
  'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'Url'];

export const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const INITIAL_FILTER_STATE = {
  filterByName: {
    name: '',
  },
  filterByNumericValues: [],
};

export const INITIAL_SORT_STATE = { column: 'name', sort: 'ASC' };

export const OPTIONS_COLLUMN = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export const OPERATOR_OPTIONS = ['maior que', 'menor que', 'igual a'];

export const INITIAL_FILTER_NUMERIC = {
  column: '',
  comparison: 'maior que',
  value: 0,
};
