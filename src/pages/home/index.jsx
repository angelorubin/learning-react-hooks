import { useState, useEffect } from "react";
import useFetch from "hooks/useFetch";
import { http } from "config/api";

export default function Home() {
	// Mock API - https://mockapi.io
	const { response, error } = useFetch("users/2", {});
	const avatar = "https://bit.ly/3p5CJOK";

	useEffect(() => {
		const fetch = async () => {
			return http("/users/2")
				.then((res) => {
					console.log(res);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetch();
	}, []);

	return (
		<>
			<h3>Home</h3>
		</>
	);
}
