//Add New Investment

import React, { useState } from 'react';
import './UserInput.css';

const UserInput = () => {
	const onSubmitHandler = () => {
		return console.log('Form submitted');
	};

	const onResetHandler = () => {
		return console.log('Clear inputs');
	};

	return (
		<form className="form">
			<div className="input-group">
				<p>
					<label htmlFor="current-savings">Current Savings ($)</label>
					<input type="number" id="current-savings" />
				</p>
				<p>
					<label htmlFor="yearly-contribution">Yearly Savings ($)</label>
					<input type="number" id="yearly-contribution" />
				</p>
			</div>
			<div className="input-group">
				<p>
					<label htmlFor="expected-return">
						Expected Interest (%, per year)
					</label>
					<input type="number" id="expected-return" />
				</p>
				<p>
					<label htmlFor="duration">Investment Duration (years)</label>
					<input type="number" id="duration" />
				</p>
			</div>
			<p className="actions">
				<button type="reset" className="buttonAlt" onClick={onResetHandler}>
					Reset
				</button>
				<button type="submit" className="button" onClick={onSubmitHandler}>
					Calculate
				</button>
			</p>
		</form>
	);
};

export default UserInput;
