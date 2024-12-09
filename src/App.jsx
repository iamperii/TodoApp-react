import { useState } from 'react';
import './App.css';
import ToDoCreate from './Components/ToDoCreate/ToDoCreate';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
	const [todos, setTodos] = useState([]);

	const createTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};
	console.log(todos);

	return (
		<>
			<ToDoCreate onCreateTodo={createTodo} />
			<ToDoList />
		</>
	);
}

export default App;
