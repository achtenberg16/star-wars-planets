import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
  });

  useEffect(() => {
    (async () => {
      const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(ENDPOINT);
      const response = await request.json();
      setData(response.results);
    })();
  }, []);

  const handleFilter = ({ target: { value } }) => {
    console.log(value);
    setFilters({
      ...filters,
      filterByName: { name: value },
    });
  };

  const value = { data, filters, handleFilter };
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
