import "./App.css";
import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import NavBar from "./components/NavBar/NavBar";
import Detail from "./components/Detail/Detail";
import { Route, Routes, useLocation } from "react-router-dom";
import Welcome from "./components/Welcome/Welcome";

function App() {
	const { pathname } = useLocation();

	return (
		<div className="App">
			{pathname !== "/" && <NavBar />}
			<Routes>
				<Route path="/" element={<Welcome />} />
				<Route path="/home" element={<Home />} />
				<Route path="/form" element={<Form />} />
				<Route path="/detail/:id" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
