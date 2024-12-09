import { useState } from 'react';
import './ToDoCreate.css';

const ToDoCreate = ({ onCreateTodo }) => {
	const [newTodo, setNewTodo] = useState('');

	const clearInput = () => {
		setNewTodo('');
	};
	const createTodo = () => {
		if (!newTodo) return;

		const request = {
			id: Math.floor(Math.random() * 99999999),
			content: newTodo,
		};
		onCreateTodo(request);
		clearInput();
	};
	return (
		<>
			<div className="to-do">
				<input
					type="text"
					name="to-do"
					id="to-do"
					placeholder="Enter your todos..."
					value={newTodo}
					onChange={(e) => {
						setNewTodo(e.target.value);
					}}
				/>
				<button className="create-button" onClick={createTodo}>
					Create Todo
				</button>
			</div>
		</>
	);
};

export default ToDoCreate;
