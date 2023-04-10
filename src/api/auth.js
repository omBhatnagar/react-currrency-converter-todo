import axios from "axios";

const headers = {
	"Content-Type": "application/json",
};

export const register = async (payload) => {
	try {
		const response = await axios.post(
			"http://localhost:3000/api/user/register",
			payload,
			{
				headers,
			},
		);
		return response;
	} catch (error) {
		console.log(error);
		return error.response;
	}
};

export const login = async (payload) => {
	try {
		const response = await axios.post(
			"http://localhost:3000/api/user/login",
			payload,
			{
				headers,
			},
		);
		return response;
	} catch (error) {
		console.log(error);
		return error.response;
	}
};
