import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9a752a1675b0c6a3efb3097603ef2b05";

class App extends React.Component {
	getWeather = async () => {
		const api_call = await fetch(`http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
	}
	render() {
		return (
			<div>
				<Titles />
				<Form />
				<Weather />
			</div>
		);
	}
};

export default App;