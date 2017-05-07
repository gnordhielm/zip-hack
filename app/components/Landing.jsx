
import React from 'react'
import {Link} from 'react-router'

import Signup from 'Signup'
import Login from 'Login'

export var Landing = React.createClass({
	render: function() {
		return (
		<div>
			<h1 className='page-title'>Welcome to Binnacle</h1>

			<div>
				<img className='logo' src='/images/logo.png'/>
				
				<p className="text-center">
				A binnacle is a housing on the deck of a ship for the compass and other navigational tools. Binnacle, the app you're about to start using, is a housing for all of the tools a job seeker needs to carry out an intentional and successful search. We leverage user-generated data regarding the length and details of their job search to craft strategies that will work in your industry. If you're a full-time seeker, chances are you have a whole mess of resumé files, a giant Excel sheet, and a ball of stress in your stomach. Binnacle is going to help you clean up and standardize the first two items - in hopes of dissolving the final one. Plan, don't panic.
				</p>

			</div>

			<br/>

		<div className="container">
			<div className="small-12 columns">
				<div className="text-center">
					<Signup/>
					<Login/>
				</div>
			</div>
			<div className="small-12 columns">
				<div className="text-center">
				</div>
			</div>
		</div>
	</div>
		)
	}
})

export default Landing
