/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { Checkbox } from '@material-ui/core';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return noTodos
		?	null
		:	<Checkbox
				checked={ isChecked }
				onChange={ () => context.actions.toggleTodos(!isChecked) }
		  />;
};

export default ToggleAllButton;
