//Add New Investment

import React from 'react';
import classes from './ResultsTable.module.css';

const ResultsTable = (props) => {

	const yearlyResults = props.yearlyResults;

	console.log('yearlyResults =', yearlyResults);

	const formatter = new Intl.NumberFormat('en-US', {
		style: 'currency',
		currency: 'USD',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2,
	  });
	   

	return (
		<table className={classes.result}>
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
				{yearlyResults.map((yearData) => {
					return (
						<tr key={yearData.year}>
							<td>{formatter.format(yearData.year)}</td> 
							<td>{formatter.format(yearData.savingsEndOfYear)}</td> 
							<td>{formatter.format(yearData.yearlyInterest)}</td> 
							<td>{formatter.format(yearData.savingsEndOfYear - yearData.initialInvestment - yearData.yearlyContribution * yearData.year)}</td> 
							<td>{formatter.format(yearData.initialInvestment + yearData.yearlyContribution * yearData.year)}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default ResultsTable;
