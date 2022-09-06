import type { FC } from "react";

export type IShoppingList = FC<{}>;

export interface TIngredient {
	name: string;
	amount: number;
}

export class CIngredient {
	name: string;
	amount: number;

	constructor(ing: TIngredient) {
		this.name = ing.name;
		this.amount = ing.amount;
	}
}
