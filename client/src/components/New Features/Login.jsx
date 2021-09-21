import React, { useState } from "react";
import "../css/home.css";

function Login({ setToken }) {
	const [userInfo, setUserInfo] = useState({
		email: "",
		password: "",
	});

	const updateInfo = (e) => {
		const { name, value } = e.target;
		setUserInfo((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
		console.log(userInfo.email);
	};

	return (
		<div className="home">
			<div className="sign-in-sign-up">
				<form className="sign-in">
					<h1>I already have an account</h1>
					<p>Sign in with your email and password</p>
					<p>{userInfo.email}</p>
					<input
						onChange={updateInfo}
						value={userInfo.email}
						name="email"
						type="text"
						placeholder="Email..."
					/>
					<input
						onChange={updateInfo}
						value={userInfo.password}
						name="password"
						type="text"
						placeholder="Password..."
					/>
					<button>Sign In</button>
				</form>

				<form className="sign-up">
					<h1>I do not have a account</h1>
					<p>Sign up with your email and password</p>
					<input name="fullname" type="text" placeholder="Display Name" />
					<input name="email" type="text" placeholder="Email..." />
					<input name="password" type="text" placeholder="Password..." />
					<input
						name="confirmPassword"
						type="text"
						placeholder="Confirm Password..."
					/>
					<button>Sign Up</button>
				</form>
			</div>
		</div>
	);
}

export default Login;
