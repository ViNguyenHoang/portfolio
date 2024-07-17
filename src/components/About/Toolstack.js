import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaDocker } from "react-icons/fa";
import { FiFigma } from "react-icons/fi";
import { SiVisualstudiocode, SiPostman, SiWindows10 } from "react-icons/si";

const toolItems = [
	{ id: 1, icon: <SiWindows10 /> },
	{ id: 2, icon: <SiVisualstudiocode /> },
	{ id: 3, icon: <SiPostman /> },
	{ id: 4, icon: <FaDocker /> },
	{ id: 5, icon: <FiFigma /> },
];

const Toolstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<h1 className="project-heading">
				<strong className="pink">Tools</strong> I use
			</h1>

			{toolItems.map((toolItem) => {
				return (
					<Col key={toolItem.id} xs={4} md={2} className="tech-icons">
						{toolItem.icon}
					</Col>
				);
			})}
		</Row>
	);
};

export default Toolstack;
