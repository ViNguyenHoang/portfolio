import React from "react";
import { Button, Container, Row } from "react-bootstrap";

import myCVpdf from "../../assets/NguyenHoangVi_CV.pdf";
import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	"pdfjs-dist/build/pdf.worker.min.mjs",
	import.meta.url,
).toString();

const Resume = () => {
	return (
		<Container fluid className="page-section">
			<Container>
				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={myCVpdf}
						target="_blank"
						style={{ maxWidth: "250px" }}
					>
						{/* <AiOutlineDownload /> */}
						&nbsp;Download CV
					</Button>
				</Row>

				<Row className="resume">
					<Document
						file={myCVpdf}
						className="d-flex justify-content-center mb-4"
					>
						<Page pageNumber={1} />
					</Document>

					<Document
						file={myCVpdf}
						className="d-flex justify-content-center"
					>
						<Page pageNumber={2} />
					</Document>
				</Row>

				<Row style={{ justifyContent: "center", position: "relative" }}>
					<Button
						variant="primary"
						href={myCVpdf}
						target="_blank"
						style={{ maxWidth: "250px" }}
					>
						{/* <AiOutlineDownload /> */}
						&nbsp;Download CV
					</Button>
				</Row>
			</Container>
		</Container>
	);
};

export default Resume;
