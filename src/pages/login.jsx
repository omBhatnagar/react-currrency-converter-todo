import { useState } from "react";
import { Link } from "react-router-dom";
import { ToastsContainer, ToastsStore } from "react-toasts";

import Button from "../components/button";
import TextInput from "../components/textinput";

import { loginSchema } from "../utils/validateinput";
import { login } from "../api/auth";

const Login = () => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	// Schema for login form fields
	const loginFormSchema = [
		{
			title: "E-Mail",
			value: userData.email,
			onChange: (e) =>
				setUserData((prevData) => ({
					...prevData,
					email: e.target.value,
				})),
			type: "email",
		},
		{
			title: "Password",
			value: userData.password,
			onChange: (e) =>
				setUserData((prevData) => ({
					...prevData,
					password: e.target.value,
				})),
			type: "password",
		},
	];

	// Form submit handler
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate login form data
		const { status, message } = loginSchema(userData);

		// Check if validation returned errors
		if (!status) return ToastsStore.error(message);

		const { data } = await login(userData);
		if (data.status === "error") return ToastsStore.error(data.message);

		// Successfull login toast message
		ToastsStore.success("Successfully logged in!");
	};

	return (
		<div className='w-2/3 mx-auto my-16 py-6 rounded-lg bg-gray-800 border-gray-700 shadow'>
			<ToastsContainer store={ToastsStore} />
			<h1 className='text-center text-white text-xl font-bold'>Log In</h1>
			<div>
				<form className='flex flex-col justify-center items-center gap-4'>
					{loginFormSchema.map((field) => (
						<TextInput
							type={field.type}
							title={field.title}
							value={field.value}
							onChange={field.onChange}
						/>
					))}
					<Button title='Log In' onClick={handleSubmit} />
					<p className='text-gray-400'>
						Don't have an account?
						<Link to='/signup' className='font-semibold text-white'>
							{" "}
							Sign up.
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
