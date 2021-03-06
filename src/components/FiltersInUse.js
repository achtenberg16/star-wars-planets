import React, { useContext } from 'react';
import planetsContext from '../context/planetsContext';

export default function FiltersInUse() {
  const { filters: { filterByNumericValues },
    removeFilter } = useContext(planetsContext);
  return (
    <>
      <div>
        {filterByNumericValues.length > 0 && (
          filterByNumericValues.map(({ column, comparison, value }) => (
            <label
              data-testid="filter"
              key={ `${column} ${comparison} ${value}` }
              htmlFor={ column }
            >
              <button
                id={ column }
                type="button"
                onClick={ () => removeFilter(column) }
              >
                {`${column} ${comparison} ${value}`}
              </button>
            </label>
          )))}
      </div>
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => { removeFilter(); } }
      >
        Remover Todas as filtragens

      </button>
    </>
  );
}
