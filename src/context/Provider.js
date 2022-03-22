import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import planetsContext from './planetsContext';

function Provider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';
      const request = await fetch(ENDPOINT);
      const response = await request.json();
      setData(response);
    })();
  }, []);

  const value = { data };
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
