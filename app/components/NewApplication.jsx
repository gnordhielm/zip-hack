import React from 'react'
import {Link} from 'react-router'

import moment from 'moment'

export var NewApplication = React.createClass({
	getInitialState: function(){
		return {
			open: false,
			part: 1,
			position: undefined,
			company: undefined,
			link: undefined,
			timeStarted: moment().unix(),
			timeCompleted: null
		}
	},
	launchModal: function() {
		this.setState({
			open: true
		})
	},
	closeModal: function(e) {
		e.preventDefault()
		this.setState({
			open: false,
			part: 1
		})
	},
	handleNext: function(e) {
		e.preventDefault()
		var currentPart = this.state.part
		if (currentPart = 1) {
			this.setState({
				company: this.refs.company.value,
				position: this.refs.position.value,
				link: this.refs.link.value,
			})

			this.refs.company.value = ''
			this.refs.position.value = ''
			this.refs.link.value = ''
		}

		this.setState({
			part: currentPart + 1
		})
	},
	render: function() {

		var that = this
		var {position, company, link} = this.state

		function getForm() {
			switch (that.state.part) {
				case 1:

					return (
						<form>
							<h2>New Application</h2>
			
						  	<div className="row">
							    <div className="small-4 columns">
							    	<label className="text-left middle">Job Title</label>
							    </div>
							    <div className="small-8 columns">
							      	<input ref='position' type="text"/>
							    </div>
							</div>

						    <div className="row">
						    	<div className="small-4 columns">
						      		<label className="text-left middle">Company Name</label>
							    </div>
							    <div className="small-8 columns">
							      	<input ref='company' type="text"/>
							    </div>
						    </div>

						    <div className="row">
						    	<div className="small-4 columns">
						      		<label className="text-left middle">Link to Posting</label>
							    </div>
							    <div className="small-8 columns">
							      	<input ref='link' type="text"/>
							    </div>
						    </div>

						    <br/>

						    <div className="input-group-button">
								<a href="#" 
								   className="alert-text" 
								   value="Cancel"
								   onClick={that.closeModal}>Cancel</a>
    							<input type="submit" 
    								   className="button" 
    								   value="Next"
    								   onClick={that.handleNext}/>
  							</div>	
						</form>
					)
					break
				case 2:
					return (
						<form>
							<h2>{position} at {company}</h2>
							<p>Keep this form open as you complete your application.</p>
							<hr/>

							<h3>Reach Out</h3>
							<p className='tips'>Contact 2-4 current employees on LinkedIn or by email, see if you can schedule a phone call, <a href='#'>more...</a></p>
							
						    <br/>
							
							<div className="row inset">
								<label>Password
								  <input type="password" aria-describedby="passwordHelpText"/>
								</label>
						    </div>
							
							<div className="row inset">
						    	<div className="small-4 columns">
						      		<label className="text-left middle">Name</label>
							    </div>
							    <div className="small-8 columns">
							      	<input type="text"/>
							    </div>
						    </div>

						    <br/>
						    <br/>

							<h3>Tailor Resumé</h3>
							<p className='tips'>Emphasize relevant skills, repeat terms found in the job description, keep it one page long <a href='#'>more...</a></p>
						    <br/>
							<div className="row">
							    <div className="inline">
									<label htmlFor="resume" className="button hollow">Upload Resumé</label>
									<input type="file" id="resume" className="show-for-sr"/>
							    </div>
						    </div>

						    <br/>
						    <br/>

							<h3>Write Cover Letter</h3>
							<p className='tips'>Always write a cover letter, connect to problems the company is facing, talk about past achievements, <a href='#'>more...</a></p>
						    <br/>
							<div className="row">
							    <div className="inline">
									<label htmlFor="cover-letter" className="button hollow">Upload Cover Letter</label>
									<input type="file" id="cover-letter" className="show-for-sr"/>
							    </div>
						    </div>

						    <br/>
						    <br/>

							<div className="input-group-button">
								<a href="#" 
								   className="alert-text" 
								   value="Cancel"
								   onClick={that.closeModal}>Cancel</a>
    							<input type="submit" 
    								   className="button" 
    								   value="Next"
    								   onClick={that.handleNext}/>
  							</div>
						</form>
					)
					break
				case 3:
					return (
						<div>
							<h2>Congrats!</h2>
							<p>You've sent out 3 applications this week.</p>
							<p>Only 2 more to reach your goal.</p>

							<div className="input-group-button">
    							<input type="submit" 
    								   className="button" 
    								   value="Done"
    								   onClick={that.closeModal}/>
  							</div>
						</div>
					)
					break
			}
		}

		return (
		<div className='modal'>
			<button type="button" className="button trigger" onClick={this.launchModal}>Add Job Application</button>

			{this.state.open &&
				<div className='background'>
					<div className='trigger' className='content'>
						{getForm()}
					</div>
				</div>
			}
	</div>

		)
	}
})

export default NewApplication
