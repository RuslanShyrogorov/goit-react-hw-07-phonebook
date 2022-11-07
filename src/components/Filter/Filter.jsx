import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filterSlice';

import { FilterWrapper, FilterLable, FilterInput } from './Filter.styled';

export default function ContactsFilter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <FilterWrapper>
      <FilterLable htmlFor="filter">
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          id="filter"
          onChange={handleChange}
        />
      </FilterLable>
    </FilterWrapper>
  );
}
