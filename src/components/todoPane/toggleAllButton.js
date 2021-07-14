import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import { Checkbox } from '@material-ui/core';

const ToggleAllButton = () => {
	const isChecked = TodoManager.getActiveCount(context.state.todos) === 0;
	const noTodos = TodoManager.getTodoCount(context.state.todos) === 0;

	return noTodos
		? null
		: <Checkbox
			// eslint-disable-next-line react/jsx-indent-props
			checked={ isChecked }
			// eslint-disable-next-line react/jsx-indent-props
			onChange={ () => context.actions.toggleTodos(!isChecked) }
			// eslint-disable-next-line react/jsx-indent-props
		// eslint-disable-next-line react/jsx-closing-bracket-location
		/>;
};

export default ToggleAllButton;
