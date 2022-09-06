import React from "react";
import { Card, Button } from "react-bootstrap";

import { IRecipeItem } from "./types";
import "./styles.scss";

export const RecipeItem: IRecipeItem = ({ recipe }) => {
	return (
		<Card className="recipe-card my-3 px-3 py-1">
			<Card.Body>
				<Card.Title>{recipe.name}</Card.Title>
				<Card.Text>{recipe.description}</Card.Text>
				<Button variant="primary">View Recipe</Button>
			</Card.Body>
			<Card.Img src={recipe.imageUrl} />
		</Card>
	);
};
