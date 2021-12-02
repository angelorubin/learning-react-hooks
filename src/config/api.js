import axios from "axios";
// Mock API - https://mockapi.io
// https://5ba6cfd768c16e0014c4ee95.mockapi.io/api/v1
// https://jsonplaceholder.typicode.com

export const http = axios.create({
	baseURL: "https://5ba6cfd768c16e0014c4ee95.mockapi.io/api/v1",
});
