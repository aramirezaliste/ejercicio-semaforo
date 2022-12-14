import React, { useState } from "react";


//create your first component

const Home = () => {

	const [color, setColor] = useState(" ");
	const [morado, setMorado] = useState(" ");

	function cambiarColor() {
		let random = Math.floor(Math.random() * 3);
		console.log(random);
		if (random == 0) {
			return setColor("red");
		} else if (random == 1) {
			return setColor("yellow");
		} else {
			return setColor("green");
		} 
	}

	function nuevoColor(){
		return setMorado(<div className={(color === "purple") ? "circulos purple light" : "circulos purple"} onClick={() => setColor("purple")}></div>)
	}

	return (
		<div className="cuerpo">
			<div className="container1">
				<div className={(color === "red") ? "circulos red light" : "circulos red"} onClick={() => setColor("red")}></div>
				<div className={(color === "yellow") ? "circulos yellow light" : "circulos yellow"} onClick={() => setColor("yellow")}></div>
				<div className={(color === "green") ? "circulos green light" : "circulos green"} onClick={() => setColor("green")}></div>
				{morado}
			</div>
			<button className="btn btn-danger" onClick={() => {
				cambiarColor()
			}}>Random Light</button>
			<button className="btn btn-success" onClick={() =>{
				nuevoColor()
			}}>New Color</button>
		</div>
	);
};

export default Home;
