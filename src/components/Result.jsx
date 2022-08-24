import { Fragment, useCallback, useMemo, useRef } from 'react';
import useQuote from '../hook/useQuote';
import { BRANDS, PLANS } from '../constants';

const Result = () => {
	const { result, datos } = useQuote();
	const { brand, plan, year } = datos;
	const yearRef = useRef(year);

	const [nameBrand] = useCallback(
		BRANDS.filter((m) => m.id === Number(brand)),
		[result]
	);
	const [namePlan] = useCallback(
		PLANS.filter((p) => p.id === Number(plan)),
		[result]
	);

	if (result === 0) return null;

	return (
		<div className="bg-gray-100 text-center mt-5 p-5 shadow">
			<h2 className="text-gray-600 font-black text-3xl">Resumen</h2>

			<p className="my-2">
				<span className="font-bold">Marca: </span>
				{nameBrand.nombre}
			</p>

			<p className="my-2">
				<span className="font-bold">Plan: </span>
				{namePlan.nombre}
			</p>

			<Fragment>
				<p className="my-2">
					<span className="font-bold">Año del Auto: </span>
					{yearRef.current}
				</p>
			</Fragment>

			<p className="my-2 text-2xl">
				<span className="font-bold">Total Cotización: </span>
				{result}
			</p>
		</div>
	);
};

export default Result;
