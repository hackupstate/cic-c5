import { useParams } from "react-router-dom";
import ProjectData from "./ProjectData";

const ProjectDetails = () => {
	const { id } = useParams();
	const thisProjectData = ProjectData[id];
	return (
		<div>
			<h1 style={{ color: "white" }}>
				Project Details: {thisProjectData.name}
			</h1>
			<p style={{ color: "white" }}>{thisProjectData.summary}</p>
		</div>
	);
};
export default ProjectDetails;
