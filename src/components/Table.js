import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

function Table() {
  const { data: { results } } = useContext(planetsContext);

  const TABLE_HEADERS = ['Name', 'Rotation Period',
    'Orbital Period', 'Diameter', 'Climate', 'Gravity',
    'Terrain', 'Surface Water', 'Population', 'Films', 'Created', 'Edited', 'Url'];
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

        {results?.length && (results.map((planet) => {
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
