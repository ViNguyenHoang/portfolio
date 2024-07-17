import React from "react";
import { Col, Row } from "react-bootstrap";
import {
	DiJavascript1,
	DiReact,
	DiNodejs,
	DiMongodb,
	DiJava,
	DiMsqlServer,
} from "react-icons/di";
import { FaVuejs } from "react-icons/fa";
import { SiDotnet, SiMysql, SiPostgresql, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const techItems = [
	{ id: 1, icon: <DiJavascript1 /> },
	{ id: 2, icon: <SiTypescript /> },
	{ id: 3, icon: <TbBrandCSharp /> },
	{ id: 4, icon: <SiDotnet /> },
	{ id: 5, icon: <DiNodejs /> },
	{ id: 6, icon: <DiReact /> },
	{ id: 7, icon: <FaVuejs /> },
	{ id: 8, icon: <SiMysql /> },
	{ id: 9, icon: <DiMsqlServer /> },
	{ id: 10, icon: <SiPostgresql /> },
	{ id: 11, icon: <DiMongodb /> },
	{ id: 12, icon: <DiJava /> },
];

const Techstack = () => {
	return (
		<Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
			<h1 className="project-heading">
				Professional <strong className="pink">Skillset </strong>
			</h1>

			{techItems.map((techItem) => {
				return (
					<Col key={techItem.id} xs={4} md={2} className="tech-icons">
						{techItem.icon}
					</Col>
				);
			})}
		</Row>
	);
};

export default Techstack;
