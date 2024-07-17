import { Col, Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import avis from "../../assets/projects/avis.png";

const Project = () => {
	return (
		<Container fluid className="page-section">
			<Container>
				<h1 className="project-heading">
					My Recent <strong className="purple">Works </strong>
				</h1>
				<p style={{ color: "white" }}>
					Here are a few projects I've worked on recently.
				</p>

				<Row
					style={{ justifyContent: "center", paddingBottom: "10px" }}
				>
					<Col md={4} className="project-card">
						<ProjectCard
							imgPath={avis}
							isBlog={false}
							title="Avis"
							description="An app that uses a Machine learning implementation to search for songs by humming build with React.ts and .Net."
							ghLink="https://github.com/Projekt-Reddo/avis"
							demoLink="https://avisapp.netlify.app"
						/>
					</Col>
				</Row>
			</Container>
		</Container>
	);
};

export default Project;
