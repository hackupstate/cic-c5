import projects from "./ProjectData.js";

const Portfolio = () => {
	return (
		<section id="portfolio">
			<h1>Portfolio</h1>
			<p>
				To view more details about the project, click on any of the
				cards.
			</p>
			<div className="row">
				{projects.map((proj, index) => {
					return (
						<Card
							projectData={proj}
							index={index}
							key={proj.name}
						/>
					);
				})}
			</div>
		</section>
	);
};

const Card = ({ projectData }) => {
	return (
		<div className="col-xs-12 col-sm-6 col-md-4">
			<div className="card">
				<img
					src={projectData.imgURL}
					className="card-img-top"
					alt="screenshot of weather app"
				/>
				<div className="card-body">
					<h5 className="card-title">{projectData.name}</h5>
					<p className="card-text">{projectData.summary}</p>
					<a href="weather.html" className="btn btn-primary">
						{projectData.buttonText}
					</a>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
