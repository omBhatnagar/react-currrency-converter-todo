// Will return true if data is valid
export const signupSchema = (data) => {
	if (!data.name || !data.email || !data.password || !data.confirmPassword)
		return { status: false, message: "Fields cannot be empty!" };
	if (data.password.length < 3)
		return {
			status: false,
			message: "Password must be atleast 3 characters long!",
		};
	if (data.password !== data.confirmPassword)
		return { status: false, message: "Passwords do not match!" };
	return { status: true };
};

export const loginSchema = (data) => {
	if (!data.email || !data.password)
		return { status: false, message: "Fields cannot be empty!" };
	return { status: true };
};
