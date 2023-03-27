import { useState } from "react";

import Button from "../components/button";
import Select from "../components/select";
import TextInput from "../components/textinput";

import convertCurrency from "../utils/convertcurrency";

const CurrencyExchange = () => {
	const [userCurrency, setUserCurrency] = useState("USD");
	const [targetCurrency, setTargetCurrency] = useState("INR");
	const [amount, setAmount] = useState(0);
	const [targetCurrencies, setTargetCurrencies] = useState([
		"USD",
		"INR",
		"EUR",
		"JPY",
		"GBP",
	]);

	const currencies = ["USD", "INR", "EUR", "JPY", "GBP"];

	// State change handlers
	const handleUserCurrencyChange = (e) => {
		setUserCurrency(e.target.value);
		const _currencies = currencies.filter(
			(currency) => currency !== e.target.value,
		);
		setTargetCurrencies(_currencies);
		setTargetCurrency(_currencies[0]);
	};
	const handleAmountChange = (e) => {
		setAmount(e.target.value);
	};
	const handleTargetCurrencyChange = (e) => {
		setTargetCurrency(e.target.value);
	};

	// Hande form submit and call currency conversion function
	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			console.log("CALLED");
			setAmount(convertCurrency(amount, userCurrency, targetCurrency));
		} catch (e) {
			alert("Error Occured!");
		}
		console.log({
			userCurrency,
			targetCurrency,
			amount,
		});
	};

	return (
		<div className='w-1/2 mx-auto flex flex-col justify-around items-center my-16 py-4 rounded-lg bg-gray-800 border-gray-700 shadow'>
			<h1 className='text-center text-white text-xl font-bold pt-3 pb-6'>
				Convert Currency
			</h1>
			<div className='w-full'>
				<form
					className='flex flex-col justify-center items-center gap-4'
					onSubmit={handleSubmit}
				>
					<Select
						title='Currency to Convert From'
						value={userCurrency}
						onChange={handleUserCurrencyChange}
						data={currencies}
					/>
					<div className='w-5/6 mx-auto'>
						<TextInput
							value={amount}
							onChange={handleAmountChange}
							title='Amount'
						/>
					</div>
					<Select
						title='Target Currency'
						value={targetCurrency}
						onChange={handleTargetCurrencyChange}
						data={targetCurrencies}
					/>
					<Button title='Convert' onClick={handleSubmit} />
				</form>
			</div>
		</div>
	);
};

export default CurrencyExchange;
