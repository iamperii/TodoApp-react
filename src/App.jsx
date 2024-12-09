import { useState } from 'react';
import './App.css';
import ToDoCreate from './Components/ToDoCreate/ToDoCreate';
import ToDoList from './Components/ToDoList/ToDoList';

function App() {
	const [todos, setTodos] = useState([]);
	console.log(todos);
	const createTodo = (newTodo) => {
		setTodos([...todos, newTodo]);
	};

	const removeTodo = (todoId) => {
		setTodos(todos.filter((todo) => todo.id !== todoId));
	};

	const updateTodo = (newTodo) => {
		const updatedTodo = todos.map((todo) => {
			if (todo.id !== newTodo.id) {
				return todo;
			}
			return newTodo;
		});
		setTodos([...updatedTodo]);
	};
	return (
		<>
			<ToDoCreate onCreateTodo={createTodo} />
			<ToDoList todos={todos} onRemoveTodo={removeTodo} onUpdate={updateTodo} />
		</>
	);
}

export default App;
