import React from "react";

class Weather extends React.Component {
	render () {
		return (
			<div>
				{ this.props.temperature && <p>Temperatura: { this.props.temperature }</p> }
				{ this.props.city && <p>Ciudad: { this.props.city }</p> }
				{ this.props.country && <p>Pais: { this.props.country }</p> }
				{ this.props.description && <p>Condicion: { this.props.description }</p> }
				{ this.props.error && <p>{ this.props.error }</p> }
			</div>
		);
	}
};

export default Weather;