import React from "react";

const Weather = (props) => {
	return (
		<div>
			{ props.temperature && <p>Temperatura: { props.temperature }</p> }
			{ props.city && <p>Ciudad: { props.city }</p> }
			{ props.country && <p>Pais: { props.country }</p> }
			{ props.description && <p>Condicion: { props.description }</p> }
			{ props.error && <p>{ props.error }</p> }
		</div>
	);
}

export default Weather;