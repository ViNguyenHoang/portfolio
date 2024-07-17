import { Col, Container, Row } from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const socialConnect = [
	{ id: 1, link: "https://github.com/ViNguyenHoang", icon: <AiFillGithub /> },
	{
		id: 2,
		link: "https://www.linkedin.com/in/nguyen-hoang-vi-b2a6932b9/",
		icon: <FaLinkedinIn />,
	},
	{ id: 3, link: "https://www.youtube.com/@onisub1116", icon: <BsYoutube /> },
];

const Footer = () => {
	return (
		<Container fluid className="footer">
			<Row>
				<Col md={4} className="footer-copywright"></Col>
				<Col md={4} className="footer-copywright">
					<h3>Developed by Nguyen Hoang Vi</h3>
				</Col>
				<Col md={4} className="footer-body">
					<ul className="footer-icons">
						{socialConnect.map((socialItem) => {
							return (
								<li
									key={socialItem.id}
									className="social-icons"
								>
									<a
										href={socialItem.link}
										style={{ color: "white" }}
										target="_blank"
										rel="noopener noreferrer"
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
	);
};

export default Footer;
