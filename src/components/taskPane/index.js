import TaskList from "./taskList";
import { Box } from '@material-ui/core';

const TaskPane = () =>
		<Box className="task-pane" height="100vh" overflow="auto">
			<h3>Task</h3>
			{ TaskList() }
		</Box>

export default TaskPane;
