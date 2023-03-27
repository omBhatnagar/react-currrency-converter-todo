import { useState } from "react";
import TodoCard from "../components/todocard";

const Todo = () => {
	const [todos, setTodos] = useState([]);
	const [todoTitle, setTodoTitle] = useState("");

	// State change handlers
	const handleTodoTitleChange = (e) => setTodoTitle(e.target.value);

	// Add todo
	const handleSubmit = (e) => {
		e.preventDefault();
		setTodos([...todos, todoTitle]);
	};

	// Delete todo
	const removeTodo = (id) => {
		// Set empty array if todos length is one
		if (todos.length < 2) return setTodos([]);

		// Remove based on index
		let _todos = [...todos];
		_todos.splice(id, 1);
		setTodos(_todos);
	};

	return (
		<div>
			<div className='my-12'>
				<form className='flex justif-center items-center w-2/3 mx-auto'>
					<input
						type='text'
						value={todoTitle}
						onChange={handleTodoTitleChange}
						placeholder='Enter todo'
						className='border text-sm block p-2.5 w-full bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
						required
					/>
					<button
						onClick={handleSubmit}
						className='whitespace-nowrap text-white bg-gray-800 font-medium text-sm px-5 py-3'
					>
						Add Todo{" "}
					</button>
				</form>
			</div>
			<div className='my-4 w-5/6 mx-auto'>
				{todos &&
					todos.map((todo, index) => (
						<TodoCard
							todoTitle={todo}
							id={index + 1}
							key={index}
							removeTodo={removeTodo}
						/>
					))}
			</div>
		</div>
	);
};

export default Todo;
