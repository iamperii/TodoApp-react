import { useState } from 'react';
import './App.css';
import ToDoCreate from './Components/ToDoCreate/ToDoCreate';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
	const [todos, setTodos] = useState([]);

	const createTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	return (
		<>
			<ToDoCreate onCreateTodo={createTodo} />
			<ToDoList todos={todos} />
		</>
	);
}

export default App;
