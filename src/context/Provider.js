import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';
import { ENDPOINT, INITIAL_FILTER_STATE, INITIAL_SORT_STATE } from '../DataConsts';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState(INITIAL_FILTER_STATE);
  const [order, setOrder] = useState(INITIAL_SORT_STATE);

  useEffect(() => {
    (async () => {
      const request = await fetch(ENDPOINT);
      const response = await request.json();
      setData(response.results);
    })();
  }, []);

  const setNameForFilter = ({ target: { value } }) => {
    setFilters({ ...filters, filterByName: { name: value } });
  };

  const setFilterNumericInContex = (optionsObject) => {
    setFilters({
      ...filters,
      filterByNumericValues: [...filters.filterByNumericValues, optionsObject],
    });
  };

  const removeFilter = (nameCollumn = 'clear filters') => {
    setFilters({
      ...filters,
      filterByNumericValues: nameCollumn === 'clear filters' ? []
        : (
          filters.filterByNumericValues.filter(
            ({ column }) => column !== nameCollumn,
          )
        ),
    });
  };

  const value = { data,
    filters,
    setNameForFilter,
    setFilterNumericInContex,
    removeFilter,
    setOrder,
    order,
  };
  return (
    <planetsContext.Provider value={ value }>
      {children}
    </planetsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.object,
}.isRequired;

export default Provider;
