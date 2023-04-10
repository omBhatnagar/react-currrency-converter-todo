import { useState } from "react";
import { Link } from "react-router-dom";

import { ToastsContainer, ToastsStore } from "react-toasts";

import Button from "../components/button";
import TextInput from "../components/textinput";

import { signupSchema } from "../utils/validateinput";
import { register } from "../api/auth";

const Signup = () => {
	const [userData, setUserData] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	// Schema for form text inputs
	const signUpSchema = [
		{
			title: "Name",
			value: userData.name,
			onChange: (e) => {
				setUserData((prevData) => ({
					...prevData,
					name: e.target.value,
				}));
			},
			type: "text",
		},
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
		{
			title: "Re-enter Password",
			value: userData.confirmPassword,
			onChange: (e) =>
				setUserData((prevData) => ({
					...prevData,
					confirmPassword: e.target.value,
				})),
			type: "password",
		},
	];

	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate user data
		const { status, message } = signupSchema(userData);

		// Check if validation returned error and display as toast
		if (!status) return ToastsStore.error(message);

		const { data } = await register(userData);
		if (data.status === "error") return ToastsStore.error(data.message);

		// Successfull login toast message
		ToastsStore.success("Successfully logged in!");
	};

	return (
		<div className='w-2/3 mx-auto my-16 py-6 rounded-lg bg-gray-800 border-gray-700 shadow'>
			<ToastsContainer store={ToastsStore} />
			<h1 className='text-center text-white text-xl font-bold'>Sign Up</h1>
			<div>
				<form className='flex flex-col justify-center items-center gap-4'>
					{signUpSchema.map((field) => (
						<TextInput
							type={field.type}
							title={field.title}
							value={field.value}
							onChange={field.onChange}
						/>
					))}
					<Button title='Sign Up' onClick={handleSubmit} />
					<p className='text-gray-400'>
						Already have an account?
						<Link to='/login' className='font-semibold text-white'>
							{" "}
							Log in.
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Signup;
