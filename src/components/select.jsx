const Select = ({ title, value, data, onChange }) => {
	return (
		<div className='w-5/6'>
			<label
				for={title}
				class='block mb-2 text-sm font-medium text-gray-900 dark:text-white w-5/6 mx-auto'
			>
				Select {title}
			</label>
			<select
				value={value}
				onChange={onChange}
				id={title}
				placeholder='Target currency'
				className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-5/6 mx-auto p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
			>
				{data.map((currency) => (
					<option value={currency}>{currency}</option>
				))}
			</select>
		</div>
	);
};

export default Select;
