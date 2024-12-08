import { MdOutlineDeleteOutline } from 'react-icons/md';
import { CiEdit } from 'react-icons/ci';
const ToDo = () => {
	return (
		<div className="content">
			<div className="to-do-text">First to-do</div>
			<div className="icon-container">
				<CiEdit className="icon" />
				<MdOutlineDeleteOutline className="icon" />
			</div>
		</div>
	);
};

export default ToDo;
