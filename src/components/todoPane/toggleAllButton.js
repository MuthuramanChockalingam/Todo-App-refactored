import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { Box, Checkbox } from '@material-ui/core';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return noTodos
		?	null
		:	<Box component="span">
			<Checkbox
				checked={ isChecked }
				onChange={ () => context.actions.toggleTodos(!isChecked) }
			/></Box>;
};

export default ToggleAllButton;
