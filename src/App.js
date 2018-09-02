import React from "react";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9a752a1675b0c6a3efb3097603ef2b05";

class App extends React.Component {
	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		description: undefined,
		error: undefined
	}

	getWeather = async (e) => {
		e.preventDefault();
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;

		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
		const data = await api_call.json();
		if (city && country) {
			console.log(data);
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				description: data.weather[0].description,
				error: ""
			});
		} else {
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				description: undefined,
				error: "Please fill the form"
			});
		}
	}

	render() {
		return (
			<div>
				<Titles />
				<Form getWeather = {this.getWeather} />
				<Weather 
					temperature = {this.state.temperature}
					city = {this.state.city}
					country = {this.state.country}
					description = {this.state.description}
					error = {this.state.error}
				/>
			</div>
		);
	}
};

export default App;