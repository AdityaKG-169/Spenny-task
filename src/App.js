import React, { useEffect } from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";

function App() {
	useEffect(() => {
		if (process.env.NODE_ENV !== "development") {
			if (window.location.protocol === "http:") {
				let link = window.location.href;
				link = link.replace("http", "https");
				window.location.href = link;
			}
		}
	}, []);

	return (
		<>
			<HomePage />
		</>
	);
}

export default App;
