import InsuranceForm from './InsuranceForm';
import Spinner from './Spinner';
import Result from './Result';
import useQuote from '../hook/useQuote';

const AppInsurance = () => {
	const { result, charging } = useQuote();

	return (
		<>
			<header className="my-10">
				<h1 className="text-white text-center text-4xl font-black">
					Cotizador de Seguros de Auto
				</h1>
			</header>

			<main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
				<InsuranceForm />
				{charging ? <Spinner /> : <Result />}
			</main>
		</>
	);
};

export default AppInsurance;
