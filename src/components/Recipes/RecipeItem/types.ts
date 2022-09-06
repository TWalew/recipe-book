import type { FC } from "react";

export type IRecipeItem = FC<{
	recipe: TRecipe;
}>;

export interface TRecipe {
	name: string;
	imageUrl: string;
	description: string;
	ingredients: any[];
}
