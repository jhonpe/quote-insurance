import { useState, createContext } from 'react';
import {
	getDiferenceYear,
	calculateBrand,
	calculatePlan,
	formatMoney,
} from '../helpers';

const QuoteContext = createContext();

const QuoteProvider = ({ children }) => {
	const [datos, setDatos] = useState({
		brand: '',
		year: '',
		plan: '',
	});

	const [error, setError] = useState('');
	const [result, setResult] = useState(0);
	const [charging, setCharging] = useState(false);

	const handleChangeDatos = (e) => {
		setDatos({
			...datos,
			[e.target.name]: e.target.value,
		});
	};

	const quoteInsurance = () => {
		let result = 2000;

		const difference = getDiferenceYear(datos.year);

		result -= (difference * 3 * result) / 100;

		result *= calculateBrand(datos.brand);

		result *= calculatePlan(datos.plan);

		result = formatMoney(result);

		setCharging(true);

		setTimeout(() => {
			setResult(result);
			setCharging(false);
		}, 3000);
	};
	return (
		<QuoteContext.Provider
			value={{
				datos,
				handleChangeDatos,
				error,
				setError,
				quoteInsurance,
				result,
				charging,
			}}
		>
			{children}
		</QuoteContext.Provider>
	);
};

export { QuoteProvider };

export default QuoteContext;
