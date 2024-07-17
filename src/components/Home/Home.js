import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import HomeArt from "../../assets/home-flat-art.png";
import SignType from "./SignType";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const socialConnect = [
	{ id: 1, link: "https://github.com/ViNguyenHoang", icon: <AiFillGithub /> },
	{
		id: 2,
		link: "https://www.linkedin.com/in/nguyen-hoang-vi-b2a6932b9/",
		icon: <FaLinkedinIn />,
	},
	{ id: 3, link: "https://www.youtube.com/@onisub1116", icon: <BsYoutube /> },
];

const Home = () => {
	return (
		<section>
			{/* Home */}
			<Container fluid className="home-section" id="home">
				<Container className="home-content">
					<Row className="flex-column-reverse flex-md-row">
						<Col md={5}>
							<img
								src={HomeArt}
								alt="Home Flat Art"
								className="img-fluid"
								style={{ maxHeight: "450px" }}
							/>
						</Col>
						<Col md={7} className="home-header">
							<h1 className="heading">
								Xin chao!{" "}
								<span
									className="wave"
									role="img"
									aria-labelledby="wave"
								>
									👋🏻
								</span>
							</h1>

							<h1 className="heading-name">
								I'm
								<strong className="main-name">
									{" "}
									Nguyen Hoang Vi
								</strong>
							</h1>

							<div style={{ padding: 50, textAlign: "left" }}>
								<SignType />
							</div>
						</Col>
					</Row>
				</Container>
			</Container>

			{/* Home About */}
			<Container fluid className="home-about-section" id="home-about">
				<Container>
					<Row>
						<Col md={12} className="home-about-description">
							<h1>
								A LITTLE <span className="pink"> ABOUT </span>{" "}
								ME
							</h1>
							<p className="home-about-body">
								I graduated with a major in{" "}
								<i className="pink">
									<b>Software Engineering</b>
								</i>{" "}
								at{" "}
								<i className="pink">
									<b>FPT Can Tho University</b>
								</i>{" "}
								and became a web developer from 2023.
								<br />
								<br />I am fluent in programming languages
								​​such as{" "}
								<i className="pink">
									<b>C#, Javascript and Typescript.</b>
								</i>{" "}
								<br />
								<br />
								My expertise is product development using{" "}
								<i className="pink">
									<b>Node.js or .Net</b>
								</i>{" "}
								and Javascript library frameworks such as{" "}
								<i className="pink">
									<b>React.js and Vue.js</b>
								</i>{" "}
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={12} className="home-about-social">
							<h1>FIND ME ON</h1>

							<ul className="home-about-social-links">
								{socialConnect.map((socialItem) => {
									return (
										<li
											key={socialItem.id}
											className="social-icons"
										>
											<a
												href={socialItem.link}
												target="_blank"
												rel="noreferrer"
												className="icon-color home-social-icons"
											>
												{socialItem.icon}
											</a>
										</li>
									);
								})}
							</ul>
						</Col>
					</Row>
				</Container>
			</Container>
		</section>
	);
};

export default Home;
