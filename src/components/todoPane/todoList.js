import { Box } from '@material-ui/core';
import { React } from 'react';
import context from '../../core/context';
import TodoManager from '../../services/todoManager';
import Todo from './todo';

const TodoList = () => {
	const { todos, filter } = context.state;
	const filteredTodos = TodoManager.filterTodos(todos, filter);

	return (
		<Box> { filteredTodos.map(Todo) } </Box>
	);
};

export default TodoList;
