import React from 'react';
import FiltersNumerics from './FiltersNumerics';
import FilterByName from './FilterByName';
import OrderOptions from './OrderOptions';
import FiltersInUse from './FiltersInUse';

function Filters() {
  return (
    <>
      <section>
        <div>
          <FilterByName />
        </div>
        <FiltersNumerics />
        <OrderOptions />
      </section>
      <FiltersInUse />
    </>
  );
}

export default Filters;
