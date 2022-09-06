import React, { FormEvent, useEffect, useState } from "react";
import { Container, Form, Button, FloatingLabel, Card } from "react-bootstrap";

import { IShoppingList, TIngredient } from "./types";
import "./styles.scss";

export const ShoppingList: IShoppingList = () => {
	const [ingName, setIngName] = useState<string>("");
	const [ingAmount, setIngAmount] = useState<number>(0);
	const [ingredients, setIngredients] = useState<TIngredient[]>([]);

	const onAddIngredient = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const newIngredient: TIngredient = {
			name: ingName,
			amount: ingAmount,
		};

		setIngredients([...ingredients, newIngredient]);

		let initialIngs: TIngredient[] = [...ingredients];

		if (localStorage.getItem("ingArr")) {
			const iings = JSON.parse(
				localStorage.getItem("ingArr") as string
			) as TIngredient[];
			initialIngs = [...ingredients, ...iings];
		}

		localStorage.setItem("ingArr", JSON.stringify(initialIngs));

		handleClear();
	};

	const handleClear = () => {
		setIngName("");
		setIngAmount(0);
	};

	const deleteIngredient = (ing: TIngredient) => {
		const index = ingredients.findIndex((i) => i.name === ing.name);

		if (index !== -1) {
			ingredients.splice(index, 1);
		}

		setIngredients([...ingredients]);

		localStorage.setItem("ingArr", JSON.stringify(ingredients));
	};

	useEffect(() => {
		const ings = JSON.parse(
			localStorage.getItem("ingArr") as string
		) as TIngredient[];

		setIngredients(ings);
	}, []);

	return (
		<Container>
			<Form
				className="ingredient-form"
				onSubmit={(e) => onAddIngredient(e)}
				onReset={handleClear}>
				<div className="group">
					<Form.Group className="m-3" controlId="formBasicName">
						<FloatingLabel controlId="floatingName" label="Name">
							<Form.Control
								type="text"
								placeholder="Name"
								value={ingName}
								onChange={(e) => setIngName(e.target.value)}
							/>
						</FloatingLabel>
					</Form.Group>

					<Form.Group className="m-3" controlId="formBasicAmount">
						<FloatingLabel
							controlId="floatingAmount"
							label="Amount">
							<Form.Control
								type="number"
								placeholder="Amount"
								value={ingAmount}
								onChange={(e) =>
									setIngAmount(parseInt(e.target.value, 10))
								}
							/>
						</FloatingLabel>
					</Form.Group>
				</div>

				<Button className="mx-3" variant="success" type="submit">
					Add
				</Button>
				<Button className="mx-3" variant="danger" type="reset">
					Clear
				</Button>
			</Form>
			<div className="ingredients-list">
				{ingredients.map((ing) => (
					<Card key={ing.name + ing.amount}>
						<Card.Body>
							<Card.Title>
								<p>Name: {ing.name}</p>
								<p>Amount: {ing.amount}</p>
							</Card.Title>
							<Button
								variant="danger"
								size="sm"
								onClick={() => deleteIngredient(ing)}>
								X
							</Button>
						</Card.Body>
					</Card>
				))}
			</div>
		</Container>
	);
};
