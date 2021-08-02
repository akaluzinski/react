import React, { useState } from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const [yearFilter, setYearFilter] = useState('');
  
  const yearChangeHandler = event => {
    event.preventDefault();
    const yearFilterValue = event.target.value;
    setYearFilter(yearFilterValue);
    props.onExpensesFilterChange({
      yearFilter: Number(yearFilterValue)
    });
  }

  return (    
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select onChange={yearChangeHandler} value={yearFilter}>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;