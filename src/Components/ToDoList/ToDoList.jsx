import React from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
const ToDoList = ({ todos }) => {
	console.log(todos);
	return (
		<>
			<div>
				{todos && todos.map((todo) => <ToDo key={todo.id} todo={todo} />)}
			</div>
		</>
	);
};

export default ToDoList;
