import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function Filters() {
  const { handleFilter, filters,
  } = useContext(planetsContext);
  const { filterByName: { name } } = filters;
  return (
    <div>
      <label htmlFor="nameInput">
        Filtrar por nome:
        <input
          data-testid="name-filter"
          id="nameInput"
          type="text"
          onChange={ handleFilter }
          value={ name }
        />
      </label>
    </div>
  );
}
