import TodoManager from '../services/todoManager';

const increaseCount = ({ state }) => ({
	count: state.count + 1,
});

const updateInput = (dummy, input) => ({
	input,
});

const updateColor = (dummy, color) => ({
	color,
});

const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, state.input),
});

const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const toggleTodos = ({ state }, isChecked) => ({
	todos: TodoManager.toggleTodos(state.todos, isChecked),
});

const clearButton = ({ state }) => ({
	todos: TodoManager.clearButton(state.todos),
});

const filterButton = (dummy, filter) => ({
	filter,
});

const actions = {
	addTodo,
	increaseCount,
	updateInput,
	updateColor,
	toggleTodo,
	removeTodo,
	toggleTodos,
	clearButton,
	filterButton,
};

export default actions;
