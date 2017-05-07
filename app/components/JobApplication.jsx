
import React from 'react'
import {Link} from 'react-router'

export var JobApplication = React.createClass({
	render: function() {
		var {company, title} = this.props
		return (
		<div className='bulletin application'>
			<p>{title} at {company}</p>
		</div>
		)
	}
})

export default JobApplication

