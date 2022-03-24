import React, { useContext, useState } from 'react';
import planetsContext from '../context/planetsContext';
import { OPTIONS_COLLUMN } from '../DataConsts';

export default function OrderOptions() {
  const [orderOptions, setOrderOptions] = useState({ column: 'population', sort: 'ASC' });

  const handleOrderOptions = ({ target: { name, value } }) => {
    setOrderOptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const { setOrder } = useContext(planetsContext);

  const submitOrder = (e) => {
    e.preventDefault();
    setOrder(orderOptions);
  };
  return (
    <>
      <label htmlFor="collumnSort">
        Ordenar
        <select
          data-testid="column-sort"
          value={ orderOptions.column }
          name="column"
          onChange={ handleOrderOptions }
          id="collumnSort"
        >
          {
            OPTIONS_COLLUMN.map((optionName) => (
              <option value={ optionName } key={ optionName }>
                {optionName}
              </option>
            ))
          }
        </select>
      </label>

      <label htmlFor="sortAsc">
        Ascendente
        <input
          defaultChecked
          type="radio"
          value="ASC"
          name="sort"
          id="sortAsc"
          onChange={ handleOrderOptions }
          data-testid="column-sort-input-asc"
        />
      </label>

      <label htmlFor="sortDsc">
        Desscendente
        <input
          type="radio"
          value="DESC"
          name="sort"
          data-testid="column-sort-input-desc"
          id="sortDsc"
          onChange={ handleOrderOptions }
        />
      </label>

      <button
        data-testid="column-sort-button"
        type="button"
        onClick={ submitOrder }
      >
        Ordenar

      </button>
    </>
  );
}
