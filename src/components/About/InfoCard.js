import { Card } from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

const InfoCard = () => {
	return (
		<Card className="quote-card-view">
			<Card.Body>
				<blockquote className="blockquote mb-0">
					<p style={{ textAlign: "justify" }}>
						Xin chao, My name is{" "}
						<span className="pink">Nguyen Hoang Vi </span>
						from <span className="pink"> Bac Lieu, Viet Nam.</span>
						<br />
						I am currently employed as a software developer at
						Juspay.
						<br />
						<br />
						Apart from coding, some other activities that I love to
						do!
					</p>

					<ul>
						<li className="about-activity">
							<ImPointRight /> Playing Games
						</li>
						<li className="about-activity">
							<ImPointRight /> Playing Sports
						</li>
						<li className="about-activity">
							<ImPointRight /> Learning Japanese Culture
						</li>
					</ul>
				</blockquote>
			</Card.Body>
		</Card>
	);
};

export default InfoCard;
