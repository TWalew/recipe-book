import React from "react";
import { Outlet } from "react-router";

import { Header } from "./Header/Header";
import { ILayout } from "./types";

export const Layout: ILayout = () => (
	<div>
		<Header />
		<Outlet />
	</div>
);
