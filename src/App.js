import { React, useEffect } from 'react';
import './App.css';
import TaskManager from './services/taskManager';
import TodoPane from './components/todoPane';
import context from './core/context';
import TaskPane from './components/taskPane';
import ticker from './services/ticker';
import { Box, Grid } from '@material-ui/core';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.state, []);

	return (
		<Box className={ `App ${ context.state.theme }` } minHeight="100%">
			<Grid container="true">
				<Grid item="true" xs={ 6 }>
					{ TodoPane() } </Grid>
				<Grid item="true" xs={ 6 }>
					{ TaskPane() }
				</Grid>
			</Grid>
		</Box>
	);
};

export default App;
