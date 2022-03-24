import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filters from './components/Filters';
import { MainContainer } from './styles/StylesApp';

function App() {
  return (
    <Provider>
      <MainContainer>
        <Filters />
        <Table />
      </MainContainer>
    </Provider>
  );
}

export default App;
