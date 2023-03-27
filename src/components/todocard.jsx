const TodoCard = ({ todoTitle, id, removeTodo }) => {
	return (
		<div className='bg-gray-800 py-4 rounded-lg flex justify-between items-center my-6'>
			<div className='flex justify-center items-center'>
				<p className='text-gray-500 mx-4 text-xl'>#{id}</p>
				<h1 className='text-white text-2xl'>{todoTitle}</h1>
			</div>
			<button className='mx-4' onClick={() => removeTodo(id)}>
				Delete
			</button>
		</div>
	);
};

export default TodoCard;
