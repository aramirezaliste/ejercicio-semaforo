import React, { useState } from "react";


//create your first component

const Home = () => {
	let rojo = "red";
	let amarillo = "yellow";
	let verde = "green";
	let activo = "light";

	const [ color, setColor] = useState(false);


	return (
		<div className="container1">
			<div className={rojo} onClick={()=> setColor(true)}></div>
			<div className={amarillo} onClick={()=> setColor(true)}></div>
			<div className={verde} onClick={()=> setColor(true)}></div>
		</div>
	);
};

export default Home;
