const convertCurrency = (amount, userCurrency, targetCurrency) => {
	const rates = {
		USD: {
			INR: 81.11,
			EUR: 0.92,
			JPY: 129.35,
			GBP: 0.82,
		},
		INR: {
			GBP: 0.01,
			EUR: 0.011,
			JPY: 1.59,
		},
		EUR: {
			JPY: 140.29,
			GBP: 0.89,
		},
		JPY: {
			GBP: 0.0063,
		},
	};
	console.log({
		amount,
	});
	if (userCurrency === "GBP") {
		let rate = rates[targetCurrency][userCurrency];
		return parseFloat(amount) / rate;
	}
	if (Object.keys(rates[userCurrency]).indexOf(targetCurrency) === -1) {
		let rate = rates[targetCurrency][userCurrency];
		return parseFloat(amount) / rate;
	}
	let rate = rates[userCurrency][targetCurrency];
	return parseFloat(amount) * rate;
};

export default convertCurrency;
