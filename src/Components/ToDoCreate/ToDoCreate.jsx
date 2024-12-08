import ToDoList from '../ToDoList/ToDoList';
import './ToDoCreate.css';

const ToDoCreate = () => {
	return (
		<>
			<div className="to-do">
				<input
					type="text"
					name="to-do"
					id="to-do"
					placeholder="Enter your todos..."
				/>
				<button className="create-button">Create Todo</button>
			</div>
			<ToDoList />
		</>
	);
};

export default ToDoCreate;
