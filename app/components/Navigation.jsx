
import React from 'react'
import {Link} from 'react-router'

import Signup from 'Signup'
import Login from 'Login'

export var Navigation = React.createClass({
	render: function() {

		if (this.props.authenticated) {
			return (
				<div className="top-bar ">
				  <div className="top-bar-left">
				    <ul className="dropdown menu" data-dropdown-menu>
				      <li className="menu-text" >Binnacle</li>

				      <li>
				      	<Link activeClassName="active" to="/dashboard">Dashboard</Link>
				      </li>

				      <li>
				      	<Link activeClassName="active" to="/strategy">Strategy</Link>
				      </li>

				      <li>
				      	<Link activeClassName="active" to="/applications">Applications</Link>
				      </li>

				      <li>
				      	<Link activeClassName="active" to="/network">Network</Link>
				      </li>

				    </ul>
				  </div>
					<div className='top-bar-right'>
						<ul className='menu'>
						      <li><a href="/">Log Out</a></li>
						</ul>
					</div>
				</div>
			)
		} else {
			return (
				<div className="top-bar ">
				  <div className="top-bar-left">
				    <ul className="dropdown menu" data-dropdown-menu>
				      <li className="menu-text" >Binnacle</li>
				    </ul>
				  </div>
					<div className='top-bar-right'>
						<ul className='menu'>
						      <li><a href="#">Log In</a></li>
						      <li>&nbsp;</li>
						      <li><a className='button dark-text' href="#">Sign Up</a></li>
						</ul>
					</div>
				</div>
			)

		}

	}
})

export default Navigation
