import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Recipes } from "./components/Recipes/Recipes";
import { ShoppingList } from "./components/ShoppingList/ShoppingList";
import { Layout } from "./Layout/Layout";
import "./App.scss";

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route element={<Layout />}>
						<Route
							path="/"
							element={
								<Suspense fallback={<h2>Error...</h2>}>
									<Recipes />
								</Suspense>
							}
						/>
						<Route
							path="recipes"
							element={
								<Suspense fallback={<h2>Error...</h2>}>
									<Recipes />
								</Suspense>
							}
						/>
						<Route
							path="shopping-list"
							element={
								<Suspense fallback={<h2>Error...</h2>}>
									<ShoppingList />
								</Suspense>
							}
						/>
						<Route path="/*" element={<h2>Error...</h2>} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
