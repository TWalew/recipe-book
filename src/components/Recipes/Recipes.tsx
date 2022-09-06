import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

import { recipes } from "../../assets/recipes";
import { RecipeItem } from "./RecipeItem/RecipeItem";
import { IRecipes } from "./types";
import "./styles.scss";

export const Recipes: IRecipes = () => {
	const test = "Аз съм БОГ!!!";

	return (
		<Container className="recipe-book">
			<Row>
				<Col lg={6}>
					{recipes.map((recipe) => (
						<RecipeItem recipe={recipe} />
					))}
				</Col>
			</Row>
		</Container>
	);
};
