import { useState } from 'react';
import './App.css';
import ToDoCreate from './Components/ToDoCreate/ToDoCreate';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
	const [todos, setTodos] = useState([]);

	const createTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
		console.log(todos);
	};
	return (
		<>
			<ToDoCreate onCreateTodo={createTodo} />
			<ToDoList todos={todos} onRemoveTodo={removeTodo} />
		</>
	);
}

export default App;
