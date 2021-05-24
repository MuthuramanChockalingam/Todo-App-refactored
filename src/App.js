import { React } from 'react';
import './App.css';
import context from './core/context';
import TodoInput from './components/todoInput';
import AddTodo from './components/addTodo';
import AddList from './components/todoList';

const App = () => {
	// eslint-disable-next-line no-console
	console.log(context.state);
	return (
		<div style={ { background: context.state.color } } className="App">
			<div> { TodoInput() } </div>
			<div> { AddTodo() } </div>
			<div> { AddList() } </div>
			<div>Refresh ID: { context.state.refreshID }</div>
		</div>
	);
};

export default App;
