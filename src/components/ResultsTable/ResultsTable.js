//Add New Investment

import React from 'react';
import './ResultsTable.css';

const ResultsTable = (props) => {
	const yearlyResults = props.yearlyResults;
	console.log("yearlyResults =", yearlyResults);
	return (
		<table className="result">
			<thead>
				<tr>
					<th>Year</th>
					<th>Total Savings</th>
					<th>Interest (Year)</th>
					<th>Total Interest</th>
					<th>Invested Capital</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>YEAR NUMBER</td>
					<td>TOTAL SAVINGS END OF YEAR</td>
					<td>INTEREST GAINED IN YEAR</td>
					<td>TOTAL INTEREST GAINED</td>
					<td>TOTAL INVESTED CAPITAL</td>
				</tr>
{ 
	// for (let i=0; i<yearlyResults.length(); i++) {

	// }
}
				{/* <tr>
					<td>{yearlyResults.year}</td>
					<td>{yearlyResults.savingsEndOfYear}</td>
					<td>{yearlyResults.yearlyInterest}</td>
					<td>{yearlyResults.savingsEndOfYear}</td>
					<td>{yearlyResults.yearlyContribution}</td>
				</tr> */}
			</tbody>
		</table>
	);
};

export default ResultsTable;
