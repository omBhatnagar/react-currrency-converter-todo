import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className='bg-gray-800'>
			<div className='w-5/6 mx-auto py-5 flex justify-between items-center'>
				<h5 className='text-white'>React Demo</h5>
				<ul className='text-gray-200 flex justify-center items-center gap-4 list-none'>
					<li>
						<Link to='/currencyexchange'>Converter</Link>
					</li>
					<li>
						<Link to='/todo'>Todo</Link>
					</li>
					<li>
						<Link to='/signup'>Signup</Link>
					</li>
					<li>
						<Link to='/login'>Login</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
