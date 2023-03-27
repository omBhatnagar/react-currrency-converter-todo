import Navbar from "../components/navbar";

const { Outlet } = require("react-router-dom");

const Layout = () => {
	return (
		<>
			<Navbar />
			<div className='w-11/12 mx-auto'>
				<Outlet />
			</div>
		</>
	);
};

export default Layout;
