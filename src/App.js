import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './components/Table';
import Filters from './components/Filters';
import FiltersInUse from './components/FiltersInUse';

function App() {
  return (
    <Provider>
      <Filters />
      <FiltersInUse />
      <Table />
    </Provider>
  );
}

export default App;
