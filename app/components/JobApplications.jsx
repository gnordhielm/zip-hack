
import React from 'react'
import {Link} from 'react-router'

import NewApplication from 'NewApplication'
import JobApplication from 'JobApplication'

export var JobApplications = React.createClass({
	getInitialState: function() {
		return {
			applications:[{
				id: 1,
				company: 'Hulu',
				title: 'Software Developer',
				location: 'Los Angeles, CA',
				description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
				url: 'https://www.ziprecruiter.com/jobs',
				created_at: 'April 5, 2017',
				dateApplied: 'April 6, 2017',
				resume: 'http://placehold.it/350x150',
				coverLetter: 'http://placehold.it/350x150',
			},
			{
				id: 2,
				company: 'General Assembly',
				title: 'Instructor',
				location: 'Santa Monica, CA',
				description: 'TEACH!',
				url: 'https://www.generalassemb.ly',
				created_at: 'March 5, 2017',
				dateApplied: 'March 6, 2017',
				resume: 'http://placehold.it/350x150',
				coverLetter: 'http://placehold.it/350x150',
			}]

		}
	},
	addApp: function() {
		setTimeout(() => {
			this.setState({	
				applications: [{
						id: 3,
						company: 'ZipRecruiter',
						title: 'Full-Stack Developer',
						location: 'Santa Monica, CA',
						description: 'TEACH!',
						url: 'https://www.generalassemb.ly',
						created_at: 'March 5, 2017',
						dateApplied: 'March 6, 2017',
						resume: 'http://placehold.it/350x150',
						coverLetter: 'http://placehold.it/350x150',
					},{
						id: 1,
						company: 'Hulu',
						title: 'Software Developer',
						location: 'Los Angeles, CA',
						description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
						url: 'https://www.ziprecruiter.com/jobs',
						created_at: 'April 5, 2017',
						dateApplied: 'April 6, 2017',
						resume: 'http://placehold.it/350x150',
						coverLetter: 'http://placehold.it/350x150',
					},
					{
						id: 2,
						company: 'General Assembly',
						title: 'Instructor',
						location: 'Santa Monica, CA',
						description: 'TEACH!',
						url: 'https://www.generalassemb.ly',
						created_at: 'March 5, 2017',
						dateApplied: 'March 6, 2017',
						resume: 'http://placehold.it/350x150',
						coverLetter: 'http://placehold.it/350x150',
					}]
			})
		}, 5000)
	},
	render: function() {
		this.addApp()

		var applications = this.state.applications
		var renderApplications = () => {
			if (applications.length === 0) {
				return <p>No applications...</p>
			} else {
				return applications.map((application) => {
					return (
						<JobApplication key={application.id} {...application}/>
					)
				})
			}
		}
		return (
		<div>
			<h1 className='page-title'>Applications</h1>
			<NewApplication/>
			{renderApplications()}
		</div>
		)
	}
})

export default JobApplications
