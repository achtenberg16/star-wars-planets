import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';

const OPTIONS_COLLUMN = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

export default function Filters() {
  const [filterNumeric, setInfos] = useState({
    column: 'population',
    comparison: 'maior que',
    value: '0',
  });

  const { handleFilter, filters } = useContext(planetsContext);

  const { filterByName: { name }, filterByNumericValues } = filters;
  const optionsColumnFilters = OPTIONS_COLLUMN
    .filter((option) => !filterByNumericValues.some(({ column }) => column === option));
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
      <form>
        <select>
          {optionsColumnFilters.map((optionName) => (
            <option value={ optionName } key={ optionName }>
              {optionName}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}
