import React from 'react'
//Style Imports
import utilStyles from '../styles/utils.module.css'

export default function HouseTable(props){
	return(
		<table>
			<thead>
					<tr>
						<th>Address</th>
						<th>Size</th>
						<th>Total Price</th>
						<th>Price Per Person</th>
						<th>Website</th>
						<th>Phone Number</th>
					</tr>
				</thead>
				<tbody>
					{
						props.data.map(row =>(
							<tr>
								<td>{row.address}</td>
								<td>{row.size}</td>
								<td>{row.totalPrice}</td>
								<td>{row.pricePerPerson}</td>
								<td><a href={row.website}>{row.website}</a></td>
								<td>{row.phone}</td>
							</tr>
						))
					}
			</tbody>
		</table>
	)
}
