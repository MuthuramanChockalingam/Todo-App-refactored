import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import context from './core/context';
import TaskPane from './components/taskPane';
import ticker from './services/ticker';
import ToggleAllButton from './components/todoPane/toggleAllButton';
import TodoInput from './components/todoPane/todoInput';
import ActionButton from './components/todoPane/actionButton';
import { Grid } from '@material-ui/core';

// eslint-disable-next-line max-lines-per-function
const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.state, []);

	return (
		<div className={ `App ${ context.state.theme }` }>
			<Grid container="true">
				<Grid item="true" xs={ 6 } className="pane todo-pane">
					<h3>Todo</h3>
					<Grid
						container="true"
						justify="center"
						alignItems="flex-end"
					>
						<Grid item="true" xs={ 2 }>
							{ ToggleAllButton() }
						</Grid>
						{ TodoInput() } { ActionButton() }
					</Grid>
					{ TodoPane() } </Grid>
				<Grid item="true" xs={ 6 } className="pane task-pane">
					<h3>Task</h3>
					{ TaskPane() }
				</Grid>
			</Grid>
		</div>
	);
};

export default App;
