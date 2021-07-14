import TaskList from "./taskList";
import { Box } from '@material-ui/core';

const TaskPane = () =>
		<Box className="pane task-pane">
			<h3>Task</h3>
			{ TaskList() }
		</Box>

export default TaskPane;
