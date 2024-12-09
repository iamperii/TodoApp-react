import React from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
const ToDoList = ({ todos, onRemoveTodo }) => {
	console.log(todos);
	return (
		<>
			<div>
				{todos &&
					todos.map((todo) => (
						<ToDo key={todo.id} todo={todo} onRemoveTodo={onRemoveTodo} />
					))}
			</div>
		</>
	);
};

export default ToDoList;
