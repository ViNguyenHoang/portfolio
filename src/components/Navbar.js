import React, { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { FaBars, FaRegUser } from "react-icons/fa";
import { FaRegFileLines } from "react-icons/fa6";
import { LuFolderTree } from "react-icons/lu";
import { Link } from "react-router-dom";

import logo from "../assets/logo.png";

const navbarItems = [
	{ id: 1, label: "Home", path: "/", icon: <AiOutlineHome /> },
	{ id: 2, label: "About", path: "/about", icon: <FaRegUser /> },
	{
		id: 3,
		label: "Project",
		path: "/project",
		icon: <LuFolderTree />,
	},
	{ id: 4, label: "Resume", path: "/resume", icon: <FaRegFileLines /> },
];

const MyNavbar = () => {
	const [updateNavbar, setUpdateNavbar] = useState(false);

	const scrollHandler = () => {
		if (window.scrollY >= 20) {
			setUpdateNavbar(true);
		} else {
			setUpdateNavbar(false);
		}
	};

	window.addEventListener("scroll", scrollHandler);

	return (
		<Navbar
			fixed="top"
			expand="md"
			className={updateNavbar ? "sticky" : "navbar"}
		>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<img
						src={logo}
						style={{
							width: "50px",
							height: "50px",
						}}
						alt="brand"
					/>
				</Navbar.Brand>

				<Navbar.Toggle>
					<Button
						style={{
							backgroundColor: "transparent",
							border: "none",
							color: "var(--primary-color)",
						}}
					>
						<FaBars />
					</Button>
				</Navbar.Toggle>
				<Navbar.Collapse>
					<Nav className="ms-auto">
						{navbarItems.map((navbarItem) => {
							return (
								<Nav.Item key={navbarItem.id}>
									<Nav.Link
										as={Link}
										to={navbarItem.path}
										onClick={() => {}}
									>
										{navbarItem.icon} {navbarItem.label}
									</Nav.Link>
								</Nav.Item>
							);
						})}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default MyNavbar;
