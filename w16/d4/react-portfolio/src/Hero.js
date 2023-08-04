const Hero = () => {
	return (
		<section
			id="intro"
			className="d-flex flex-column justify-content-center align-items-center"
		>
			<h1>Max Matthews</h1>
			<h3>Full stack javascript developer and kick ass instructor</h3>
			<code>console.log("Hello World");</code>
			<a href="#about">
				<span className="material-symbols-outlined" id="arrowDown">
					keyboard_double_arrow_down
				</span>
			</a>
		</section>
	);
};

export default Hero;
