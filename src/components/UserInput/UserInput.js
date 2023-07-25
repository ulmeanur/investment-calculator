//Add New Investment

import React, { useState } from 'react';
import './UserInput.css';

const UserInput = (props) => {
	// const [currentSavings, setCurrentSavings] = useState('');

	const initialUserInput = {
		'current-savings': 1000,
		'yearly-contribution': 1000,
		'expected-return': 10,
		'investment-duration': 12,
	};
	const [userInput, setUserInput] = useState(initialUserInput);

	const onSubmitHandler = (event) => {
		event.preventDefault();
		console.log('Form submitted');
		props.onCalculateInvestment(userInput);
	};

	const onResetHandler = () => {
		console.log('Clear inputs');
		setUserInput(initialUserInput);
	};

	const inputChangeHandler = (input, value) => {
		console.log(input, value);
		setUserInput((prevInput) => {
			return {
				...prevInput,
				[input]: +value, // [] it dinamically overrides the input value, + transform the string in a number
			};
		});
		console.log('userInput = ', userInput['current-savings']);
	};

	return (
		<form onSubmit={onSubmitHandler} className="form">
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input
						type="number"
						id="current-savings"
						value={userInput['current-savings']}
						onChange={(event) => {
							inputChangeHandler('current-savings', event.target.value);
						}}
					/>
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input
						type="number"
						id="yearly-contribution"
						value={userInput['yearly-contribution']}
						onChange={(event) => {
							inputChangeHandler('yearly-contribution', event.target.value);
						}}
					/>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input
						type="number"
						id="expected-return"
						value={userInput['expected-return']}
						onChange={(event) => {
							inputChangeHandler('expected-return', event.target.value);
						}}
					/>
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input
						type="number"
						id="duration"
						value={userInput['investment-duration']}
						onChange={(event) => {
							inputChangeHandler('investment-duration', event.target.value);
						}}
					/>
				</p>
			</div>
			<p className="actions">
				<button type="reset" className="buttonAlt" onClick={onResetHandler}>
					Reset
				</button>
				<button type="submit" className="button">
					Calculate
				</button>
			</p>
		</form>
	);
};

export default UserInput;
