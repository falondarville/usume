import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Col, Button, ControlLabel, FormGroup, HelpBlock } from 'react-bootstrap';
import './register.css'; 
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Textarea from 'react-validation/build/textarea';
import {required, email, checkLength, password} from './../validation';

export default class Register extends Component {

	constructor(){
		super();
		this.state = {
				email: '',
				password: '',
				passwordConfirm: '',
				first: '',
				last: '',
				skills: '', 
				redirect: false,
				serverErrors: {}
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
		console.log(event.target.value);
	}

	handleSubmit = (event) => {

		if(!this.canSubmit()) {
			event.preventDefault();
			return;
		} else {
			event.preventDefault();
			const { email, password, passwordConfirm, first, last, skills, terms, redirect , serverErrors } = this.state;
			let self = this;
			//post to Express API
			axios.post('http://localhost:3001/users', {
				email, password, passwordConfirm, first, last, skills, terms, redirect, serverErrors
	  		})
	  		.then(function(data){
	  			console.log(data);
	  			// redirect to the log-in page when form is successfully submitted
	  			self.setState({ redirect: true });
	  		})
	 		.catch(function (error) {
	 			console.log(error)

				// this email is already in use
	 			self.setState({ serverErrors: error.response.data.data });	 			
	  		})
 		}
	}

	canSubmit = (event) => {
		const {email, password, passwordConfirm, first, last, skills} = this.state;

		return (
			email.length > 0 &&
			password.length >= 6 &&
			passwordConfirm === password &&
			first.length > 0 &&
			last.length > 0 &&
			skills.length > 0
		)
	}

	render() {

		const isEnabled = this.canSubmit();

		const { from } = this.props.location.state || '/'
    	const { redirect } = this.state

		return (
			<div>
			<Form className={"form-horizontal"} onSubmit={this.handleSubmit.bind(this)}>
	  			<FormGroup controlId="formHorizontalEmail">
	    			<Col componentClass={ControlLabel} sm={4}>
						Email
	    		</Col>
	    		<Col sm={5}>
	      				<Input className="form-control" type="email" placeholder="Email" name="email" onChange={this.handleChange} validations={[required, email]} />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalPassword">
						<Col componentClass={ControlLabel} sm={4}>
						Password
					</Col>
					<Col sm={5}>
					<Input className="form-control" label="Password" placeholder="Password" minLength={6} type="password" name="password" onChange={this.handleChange} validations={[required, checkLength]} />
				</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPasswordConfirm">
						<Col componentClass={ControlLabel} sm={4}>
						Confirm Password
					</Col>
					<Col sm={5}>
					<Input className="form-control" label="Password" placeholder="Confirm Password" type="password" name="passwordConfirm" onChange={this.handleChange} validations={[required, password]} />
				</Col>
				</FormGroup>

	  			<FormGroup controlId="formHorizontalFirstName">
	    			<Col componentClass={ControlLabel} sm={4}>
						First Name
	    		</Col>
	    		<Col sm={5}>
	      				<Input className="form-control" type="text" placeholder="First Name" name="first" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalLastName">
	    			<Col componentClass={ControlLabel} sm={4}>
					Last Name
	    		</Col>
	    		<Col sm={5}>
	      				<Input className="form-control" type="text" placeholder="Last Name" name="last" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalSkills">
	    			<Col componentClass={ControlLabel} sm={4}>
					List your skills, each of them separated by a comma.
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Skills" name="skills" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup>
    				<Col smOffset={4} sm={10}>
      					<p> By submitting this form, I agree to the Terms and Conditions of USUME.</p>
   					</Col>
  				</FormGroup>

	  			 <FormGroup>
   				 	<Col smOffset={4} sm={10}>
      					<Button disabled={!isEnabled} bsStyle='primary' type="submit">Register</Button>
      					{this.state.serverErrors.email && <HelpBlock>{this.state.serverErrors.email}</HelpBlock>}
    				</Col>
  			</FormGroup>
			</Form>
		{redirect && (<Redirect to={from || '/login'}/>)}
		</div>
		)
	}
}
