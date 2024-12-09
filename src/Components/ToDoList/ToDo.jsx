import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
const ToDo = ({ todo, onRemoveTodo }) => {
	const { content, id } = todo;
	// console.log(content);
	// console.log(todo);
	console.log(onRemoveTodo);
	const removeTodo = () => {
		// console.log(id);
		onRemoveTodo(id);
	};
	return (
		<div className="content">
			<div className="to-do-text">{content}</div>
			<div className="icon-container">
				<CiEdit className="icon" />
				<MdOutlineDeleteOutline className="icon" onClick={removeTodo} />
			</div>
		</div>
	);
};

export default ToDo;
