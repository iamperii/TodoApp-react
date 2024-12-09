import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
import { FaCheck } from 'react-icons/fa6';
import { useState } from 'react';

const ToDo = ({ todo, onRemoveTodo, onUpdate }) => {
	const { content, id } = todo;
	const [editable, setEditable] = useState(false);
	const [editedTodo, setEditedTodo] = useState(content);

	const removeTodo = () => {
		onRemoveTodo(id);
	};

	const updateTodo = () => {
		const request = {
			id: id,
			content: editedTodo,
		};
		onUpdate(request);
		setEditable(false);
	};
	return (
		<div className="content">
			<div className="to-do-text">
				{editable ? (
					<input
						type="text"
						name="to-do"
						id="edit-label"
						value={editedTodo}
						onChange={(e) => setEditedTodo(e.target.value)}
					/>
				) : (
					<>
						<div>{content}</div>
					</>
				)}
			</div>
			<div className="icon-container">
				{editable ? (
					<FaCheck
						className="icon"
						// onClick={() => setEditable(false)}
						onClick={updateTodo}
					/>
				) : (
					<CiEdit className="icon" onClick={() => setEditable(true)} />
				)}
				<MdOutlineDeleteOutline className="icon" onClick={removeTodo} />
			</div>
		</div>
	);
};

export default ToDo;
