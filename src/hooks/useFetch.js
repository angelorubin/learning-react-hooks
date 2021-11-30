import { useState, useEffect } from "react";
import { http } from "config/api";

export default function useFetch(url, options) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		console.log(http());

		const fetchData = async () => {
			try {
				return http(url, options).then((res) => {
					console.log(res.data);
					setResponse([res.data]);
				});
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	return { response, error };
}
