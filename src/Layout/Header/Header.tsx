import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useLocation } from "react-router-dom";

import { IHeader } from "./types";

export const Header: IHeader = () => {
	const location = useLocation();

	return (
		<header>
			<Navbar bg="primary" variant="dark">
				<Container>
					<Navbar.Brand href="/">Recipe Book</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/" active={location.pathname === "/"}>
							Home
						</Nav.Link>
						<Nav.Link
							href="recipes"
							active={location.pathname === "/recipes"}>
							Recipes
						</Nav.Link>
						<Nav.Link
							href="shopping-list"
							active={location.pathname === "/shopping-list"}>
							Shopping List
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</header>
	);
};
