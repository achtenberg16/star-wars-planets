import { useState, useEffect, useContext } from 'react';
import planetsContext from '../context/planetsContext';

function usePlanenetsFilter() {
  const [planetsFiltered, setPlanetsFiltered] = useState([]);

  const { data = [], filters,
    order: { column: columnSort, sort } } = useContext(planetsContext);
  const { filterByName: { name }, filterByNumericValues } = filters;

  useEffect(() => {
    console.log('rodou useeffect');
    let planetsAfterFilter = data.filter((planet) => planet.name.includes(name));
    filterByNumericValues.forEach(({ column, value, comparison }) => {
      planetsAfterFilter = planetsAfterFilter.filter((planet) => {
        switch (comparison) {
        case 'maior que': {
          return +planet[column] > +value; }
        case 'menor que': {
          return +planet[column] < +value;
        }
        case 'igual a': {
          return +planet[column] === +value;
        }
        default: return true;
        }
      });
    });

    planetsAfterFilter.sort((a, b) => {
      if (columnSort === 'name') return a.name.localeCompare(b.name);
      if (a[columnSort] === 'unknown') return 1;
      if (b[columnSort] === 'unknown') return +'-1';
      if (sort === 'ASC') return a[columnSort] - b[columnSort];
      return b[columnSort] - a[columnSort];
    });

    setPlanetsFiltered(planetsAfterFilter);
  }, [columnSort, data, filterByNumericValues, name, sort]);

  return (
    [planetsFiltered]
  );
}

export default usePlanenetsFilter;
