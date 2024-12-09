import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
const ToDo = ({ todo }) => {
	const { content, id } = todo;
	// console.log(content);
	// console.log(todo);
	return (
		<div className="content">
			<div className="to-do-text">{content}</div>
			<div className="icon-container">
				<CiEdit className="icon" />
				<MdOutlineDeleteOutline className="icon" />
			</div>
		</div>
	);
};

export default ToDo;
