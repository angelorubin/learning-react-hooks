import axios from "axios";

export const http = () => {
	return axios.create({
		baseURL: "https://5ba6cfd768c16e0014c4ee95.mockapi.io/api/v1",
	});
};
