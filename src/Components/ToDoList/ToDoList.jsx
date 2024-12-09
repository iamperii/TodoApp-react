import React from 'react';
import './ToDoList.css';
import ToDo from './ToDo';
const ToDoList = ({ todos, onRemoveTodo, onUpdate }) => {
	return (
		<>
			<div>
				{todos &&
					todos.map((todo) => (
						<ToDo
							key={todo.id}
							todo={todo}
							onRemoveTodo={onRemoveTodo}
							onUpdate={onUpdate}
						/>
					))}
			</div>
		</>
	);
};

export default ToDoList;
