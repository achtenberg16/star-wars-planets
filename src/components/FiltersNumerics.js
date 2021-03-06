import React, { useContext, useState, useEffect } from 'react';
import planetsContext from '../context/planetsContext';
import { OPTIONS_COLLUMN, OPERATOR_OPTIONS, INITIAL_FILTER_NUMERIC } from '../DataConsts';

function FiltersNumerics() {
  const [filterNumeric, setFilterNumeric] = useState(
    { column: 'population', comparison: 'maior que', value: 0 },
  );
  const [optionsColumn, setOptionsColumn] = useState(OPTIONS_COLLUMN);

  const { filters,
    setFilterNumericInContex } = useContext(planetsContext);
  const { filterByNumericValues } = filters;

  useEffect(() => {
    const optionsColumnFilters = OPTIONS_COLLUMN
      .filter((option) => !filterByNumericValues.some(({ column }) => column === option));
    setOptionsColumn(optionsColumnFilters);
    setFilterNumeric((prevState) => ({ ...prevState, column: optionsColumnFilters[0] }));
  }, [filterByNumericValues]);

  const handleChange = ({ target }) => {
    setFilterNumeric({
      ...filterNumeric,
      [target.name]: target.value,
    });
  };

  const handleSubmitNumericFilters = (e) => {
    e.preventDefault();
    setFilterNumericInContex(filterNumeric);
    setFilterNumeric(INITIAL_FILTER_NUMERIC);
  };

  return (
    <div>

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

      <button
        data-testid="button-filter"
        type="button"
        onClick={ handleSubmitNumericFilters }
      >
        Filtrar

      </button>

    </div>
  );
}

export default FiltersNumerics;
