
import React from 'react'
import {Link} from 'react-router'

export var Timer = React.createClass({
	getInitialState: function() {
		return {
			totalSeconds: 0,
			paused: this.props.paused || true
		}
	},
	formatSeconds: function(totalSeconds) {
		var seconds = totalSeconds % 60
		var minutes = Math.floor(totalSeconds / 60)

		if (seconds < 10) {
			seconds = '0' + seconds
		}
		if (minutes < 10) {
			minutes = '0' + minutes
		}
		return minutes + ':' + seconds
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.paused) {
			clearInterval(this.timer)
			this.timer = undefined
		} else {
			this.timer = setInterval(() => {
			var newSeconds = this.state.totalSeconds + 1
			this.setState({
				totalSeconds: newSeconds
			})
		}, 1000)
		}
	},
	componentWillUnmount: function(){
		clearInterval(this.timer)
		this.timer = undefined
	},
	render: function() {
		var {totalSeconds} = this.state

		return (
			<div>
				<span className='timer-text'>
					{this.formatSeconds(totalSeconds)}
				</span>
			</div>
		)	
		
	}
})

export default Timer

