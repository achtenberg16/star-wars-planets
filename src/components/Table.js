import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

const TABLE_HEADERS = ['Name', 'Rotation Period',
  'Orbital Period', 'Diameter', 'Climate', 'Gravity',
  'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'Url'];

function Table() {
  const { data = [], filters } = useContext(planetsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  let resultsFiltered = data.filter((planet) => planet.name.includes(name));
  filterByNumericValues.forEach(({ column, value, comparison }) => {
    resultsFiltered = resultsFiltered.filter((planet) => {
      switch (comparison) {
      case 'maior que': {
        return +planet[column] > +value; }
      case 'menor que': {
        return +planet[column] < +value;
      }
      case 'igual a': {
        return +planet[column] === +value;
      }
      default: return true;
      }
    });
  });

  return (
    <table>
      <thead>
        <tr>
          {TABLE_HEADERS.map((header) => (
            <th key={ header }>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {(resultsFiltered.length > 0) && (resultsFiltered.map((planet) => {
          const { rotation_period: rotation,
            orbital_period: orbital, surface_water: surface } = planet;

          return (
            <tr key={ planet.name }>
              <td>{planet.name}</td>
              <td>{rotation}</td>
              <td>{orbital}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{surface}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          );
        }))}

      </tbody>
    </table>
  );
}

export default Table;
