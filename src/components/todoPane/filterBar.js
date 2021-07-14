import { Box } from '@material-ui/core';
import { React } from 'react';
import FilterButton from './filterButton';

const filters = ['all', 'active', 'completed'];

const FilterBar = () =>
	<Box> { filters.map(FilterButton) } </Box>;

export default FilterBar;
