import TodoList from './todoList';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ThemeSelect from './themeSelect';

const TodoPane = () => {

	return (
		<div>
			{ TodoList() }
			{ ClearButton() }
			{ FilterBar() }
			{ ThemeSelect() }
		</div>
	);
};

export default TodoPane;
