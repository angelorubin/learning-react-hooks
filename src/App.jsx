import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomHook from "./pages/custom-hook";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/custom-hook" element={<CustomHook />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
