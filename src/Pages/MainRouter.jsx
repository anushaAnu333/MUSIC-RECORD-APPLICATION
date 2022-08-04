import React from "react";
import EditMusicRecord from "./EditMusicRecord";
import Login from "./Login";
import SingleMusicRecord from "./SingleMusicRecord";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

const MainRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/music/:id" element={<SingleMusicRecord />} />
			<Route path="/music/:id/edit" element={<EditMusicRecord />} />
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<h3>Page Not Found</h3>} />
		</Routes>
	);
};

export default MainRouter;
