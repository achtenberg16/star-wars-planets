import React, { useContext, useState, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import { OPTIONS_COLLUMN, OPERATOR_OPTIONS, INITIAL_FILTER_NUMERIC } from '../DataConsts';

function Filters() {
  const [filterNumeric, setFilterNumeric] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );
  const [optionsColumn, setOptionsColumn] = useState(OPTIONS_COLLUMN);
  const [orderOptions, setOrderOptions] = useState({ column: 'name', sort: 'ASC' });

  const handleOrderOptions = ({ target: { name, value } }) => {
    setOrderOptions((prevState) => ({ ...prevState, [name]: value }));
  };

  const { handleFilter, filters,
    handleFilterNumeric, setOrder } = useContext(planetsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  useEffect(() => {
    const optionsColumnFilters = OPTIONS_COLLUMN
      .filter((option) => !filterByNumericValues.some(({ column }) => column === option));
    setOptionsColumn(optionsColumnFilters);
    setFilterNumeric((prevState) => ({ ...prevState, column: optionsColumnFilters[0] }));
  }, [filterByNumericValues]);

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setOrder(orderOptions);
  };

  const handleChange = ({ target }) => {
    setFilterNumeric({
      ...filterNumeric,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleFilterNumeric(filterNumeric);
    setFilterNumeric(INITIAL_FILTER_NUMERIC);
  };

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
      <form onSubmit={ handleSubmit }>
        <label htmlFor="columnInput">
          Coluna
          <select
            value={ filterNumeric.column }
            data-testid="column-filter"
            id="columnInput"
            name="column"
            onChange={ handleChange }
          >
            {optionsColumn.map((optionName) => (
              <option value={ optionName } key={ optionName }>
                {optionName}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="operatorInput">
          Operador
          <select
            id="operatorInput"
            name="comparison"
            onChange={ handleChange }
            data-testid="comparison-filter"
            value={ filterNumeric.comparison }
          >
            {OPERATOR_OPTIONS.map((OPERATOR_NAME) => (
              <option value={ OPERATOR_NAME } key={ OPERATOR_NAME }>
                {OPERATOR_NAME}
              </option>
            ))}
          </select>
        </label>

        <input
          type="number"
          name="value"
          data-testid="value-filter"
          value={ filterNumeric.value }
          onChange={ handleChange }
        />
        <button data-testid="button-filter" type="submit">Filtrar</button>
      </form>

      <form type="submit" onSubmit={ handleSubmitOrder }>
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
          type="submit"
          data-testid="column-sort-button"
        >
          Ordenar

        </button>

      </form>

    </div>
  );
}

export default Filters;
