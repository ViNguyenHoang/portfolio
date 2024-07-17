import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import InfoCard from "./InfoCard";

import AboutArt from "../../assets/about-flat-art.png";

const About = () => {
	return (
		<Container fluid className="page-section">
			<Container>
				<Row style={{ justifyContent: "center", padding: "10px" }}>
					<Col
						md={7}
						style={{
							justifyContent: "center",
							paddingTop: "30px",
							paddingBottom: "50px",
						}}
					>
						<h1
							style={{ fontSize: "2.1em", paddingBottom: "20px" }}
						>
							Who <strong className="pink">I</strong> am?
						</h1>
						<InfoCard />
					</Col>
					<Col
						md={5}
						style={{ paddingTop: "20px", paddingBottom: "50px" }}
						className="about-img"
					>
						<img
							src={AboutArt}
							alt="About Flat Art"
							className="img-fluid"
							style={{ maxHeight: "450px" }}
						/>
					</Col>
				</Row>

				<Techstack />

				<Toolstack />
			</Container>
		</Container>
	);
};

export default About;
