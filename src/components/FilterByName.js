import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function FilterByName() {
  const { setNameForFilter, filters } = useContext(planetsContext);
  const { filterByName: { name } } = filters;
  return (
    <label
      htmlFor="nameInput"
    >
      Projeto Star Wars - Trybe
      <input
        data-testid="name-filter"
        id="nameInput"
        type="text"
        onChange={ setNameForFilter }
        value={ name }
      />
    </label>
  );
}
