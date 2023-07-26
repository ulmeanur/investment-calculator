import React, { useState } from 'react';
import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable';
import UserInput from './components/UserInput/UserInput';

function App() {
	const [yearlyInvestmentData, setYearlyInvestmentData] = useState(null);

	const calculateHandler = (userInput) => {
		// Should be triggered when form is submitted
		// You might not directly want to bind it to the submit event on the form though...

		const yearlyData = []; // per-year results

		let currentSavings = +userInput['current-savings'];
		const firstInvestment = +userInput['current-savings'];
		const yearlyContribution = +userInput['yearly-contribution'];
		const expectedReturn = +userInput['expected-return'] / 100;
		const duration = +userInput['investment-duration'];

		// The below code calculates yearly results (total savings, interest etc)
		for (let i = 0; i < duration; i++) {
			const yearlyInterest = currentSavings * expectedReturn;
			currentSavings += yearlyInterest + yearlyContribution;
			yearlyData.push({
				year: i + 1,
				yearlyInterest: yearlyInterest,
				savingsEndOfYear: currentSavings,
				yearlyContribution: yearlyContribution,
				initialInvestment: firstInvestment
			});
		}

		setYearlyInvestmentData(yearlyData);
	};

	return (
		<div>
			<Header />

			<UserInput onCalculateInvestment={calculateHandler} />

			{/* Show fallback text if no data is available */}
			{!yearlyInvestmentData && <p style={{textAlign: "center"}}>No investment calculated yet</p>}

			{/* Show below table conditionally (only once result data is available) */}
			
			{yearlyInvestmentData && (
				<ResultsTable yearlyResults={yearlyInvestmentData} />
			)}
		</div>
	);
}

export default App;
