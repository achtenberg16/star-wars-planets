import React from 'react';
import FiltersNumerics from './FiltersNumerics';
import FilterByName from './FilterByName';
import OrderOptions from './OrderOptions';
import FiltersInUse from './FiltersInUse';

function Filters() {
  return (
    <>
      <section>
        <FilterByName />
        <FiltersNumerics />
        <OrderOptions />
      </section>
      <FiltersInUse />
    </>
  );
}

export default Filters;
