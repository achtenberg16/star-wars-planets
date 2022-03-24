import React from 'react';
import { TABLE_HEADERS } from '../DataConsts';
import usePlanenetsFilter from '../hooks/usePlanenetsFilter';
import { TableStyled, TheadStyled } from '../styles/StylesTable';

function Table() {
  const [planetsFiltered] = usePlanenetsFilter();

  const createElementsHtml = (values, conditionTestId, testId) => (
    values.map((value, index) => (
      <td
        key={ `${value}${index}` }
        data-testid={ conditionTestId === index ? testId : null }
      >
        {value}
      </td>
    )));

  return (
    <TableStyled>

      <TheadStyled>
        <tr>
          {
            TABLE_HEADERS.map((header) => (
              <th key={ header }>{header}</th>
            ))
          }
        </tr>
      </TheadStyled>

      <tbody>
        {
          (planetsFiltered.length > 0) && (planetsFiltered.map((planetActual) => {
            delete planetActual.residents;
            const values = Object.values(planetActual);
            return (
              <tr key={ `${planetActual.name}${planetActual.diameter}` }>
                {createElementsHtml(values, 0, 'planet-name')}
              </tr>
            );
          }))
        }
      </tbody>

    </TableStyled>
  );
}

export default Table;
