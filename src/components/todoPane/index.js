import TodoList from './todoList';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ThemeSelect from './themeSelect';
import { Box } from '@material-ui/core';
import Header from './header';

const TodoPane = () => {

	return (
		<Box className="todo-pane" height="100vh" overflow="auto">
			{ Header() }
			{ TodoList() }
			{ ClearButton() }
			{ FilterBar() }
			{ ThemeSelect() }
		</Box>
	);
};

export default TodoPane;
