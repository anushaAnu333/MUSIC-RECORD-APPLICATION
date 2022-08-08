import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { USER_LOGIN_SUCCESS } from "../Redux/AuthReducer/actionTypes";
import { useDispatch } from "react-redux/es/exports";
import { login } from "../Redux/AuthReducer/action";

const Login = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const location = useLocation();
	const comingFrom = location.state?.from?.pathname || "/";
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (email && password) {
			dispatch(login({ email, password })).then((r) => {
				if (r.type === USER_LOGIN_SUCCESS) {
					navigate(comingFrom, { replace: true });
				}
			});
		}
	};

	return (
		<div>
			Login
			<form onSubmit={handleSubmit}>
				<div>
					<label>Email</label>
					<input
						type="email"
						placeholder="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					></input>
				</div>
				<div>
					<label>Password</label>
					<input
						type="password"
						placeholder="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					></input>
				</div>
				<button type="submit">Login</button>
			</form>
		</div>
	);
};

export default Login;
