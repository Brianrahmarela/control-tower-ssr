"use client";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";
import { Button } from 'primereact/button';
import Cookies from 'js-cookie';

const FormLogin = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	console.log("email", email, "password", password);

	const handleChange = (e) => {
		e.preventDefault();
		setEmail(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('handleSubmit JLN')
		Cookies.set('is_login', 'true', { expires: 7 }); // Menyimpan username 'john_doe' selama 7 hari
	};

	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-2 ">
				<label htmlFor="username">Username atau Email</label>
				<InputText
					id="username"
					value={email}
					onChange={handleChange}
					aria-describedby="username-help"
					placeholder="masukkan email"
          className="border border-black"
				/>
				{/* <small id="username-help">
				Enter your username to reset your password.
			</small> */}
			</div>
			<div className="flex flex-col gap-2">
      <label htmlFor="username">Username atau Email</label>

				<Password
					value={password}
					onChange={(e) => setPassword(e.target.value)}
          className="border border-black"

				/>
			</div>
      <Button label="Submit" onClick={handleSubmit} className="bg-base text-white"/>

		</div>
	);
};

export default FormLogin;
