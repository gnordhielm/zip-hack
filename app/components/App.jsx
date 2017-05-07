
import React from 'react'
import {Link} from 'react-router'

import Navigation from 'Navigation'

export var App = React.createClass({
	render: function() {
		var isRoot = window.location.pathname === '/'
		return (
		<div>
			<Navigation authenticated={!isRoot} />
			<div className='row'>
				<div className='columns medium-8 large-7 small-centered text-center'>
					{this.props.children}
				</div>
			</div>

		</div>
		)
	}
})

export default App
