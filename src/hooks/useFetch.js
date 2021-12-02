import { useState, useEffect } from "react";
import { http } from "config/api";

export default function useFetch(url, options) {
	const [response, setResponse] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true);
			try {
				const response = await http(url, options);
				if (response.data.length > 1) {
					setResponse(response.data);
					setLoading(false);
				} else {
					setResponse([response.data]);
					setLoading(false);
				}
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	return { response, error, loading };
}
