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
				title: '',
				environment: '',
				relationships: '',
				priorities: '',
				personality: '',
				workGoals: '',
				lifeGoals: '',
				accomodations: '',
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
			const { email, password, passwordConfirm, first, last, skills, title, environment, relationships, priorities, personality, workGoals, lifeGoals, accomodations, redirect , serverErrors } = this.state;
			let self = this;
			//post to Express API
			axios.post('http://localhost:3001/users', {
				email, password, passwordConfirm, first, last, skills, title, environment, relationships, priorities, personality, workGoals, lifeGoals, accomodations, redirect, serverErrors
	  		})
	  		.then(function(data){
	  			console.log(data);
	  			// redirect to the log-in page when form is successfully submitted
	  			self.setState({ redirect: true });
	  		})
	 		.catch(function (error) {
	 			console.log(error)

				// this email is already in use error shows up under the submit button
	 			self.setState({ serverErrors: error.response.data.data });	 			
	  		})
 		}
	}

	canSubmit = (event) => {
		const {email, password, passwordConfirm, first, last, skills, title, environment, relationships, priorities, personality, workGoals, lifeGoals, accomodations} = this.state;

		return (
			email.length > 0 &&
			password.length >= 6 &&
			passwordConfirm === password &&
			first.length > 0 &&
			last.length > 0 &&
			skills.length > 0 &&
			title.length > 0 &&
			environment.length > 0 &&
			relationships.length > 0 &&
			priorities.length > 0 &&
			personality.length > 0 &&
			workGoals.length > 0 &&
			lifeGoals.length > 0 &&
			accomodations.length > 0
		)
	}

	render() {

		const isEnabled = this.canSubmit();
    	const { redirect } = this.state

		return (
			<div className="container">
			<Form className={"form-horizontal"} onSubmit={this.handleSubmit.bind(this)}>
				<h3 className="text-center register-header">Please fill in all of the following to register.</h3>
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

	  			<FormGroup controlId="formHorizontalTitle">
	    			<Col componentClass={ControlLabel} sm={4}>
					What is your preferred work title?
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Title" name="title" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalEnvironment">
	    			<Col componentClass={ControlLabel} sm={4}>
					What is your ideal work environment?
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Environment" name="environment" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalRelationships">
	    			<Col componentClass={ControlLabel} sm={4}>
					What do your ideal work relationships look like?
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Work Relationships" name="relationships" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalPriorities">
	    			<Col componentClass={ControlLabel} sm={4}>
					What are your non-work priorities that will take precedence over your work?
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Non-work Priorities" name="priorities" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalPersonality">
	    			<Col componentClass={ControlLabel} sm={4}>
					Please describe your personality.
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Personality" name="personality" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalWorkGoals">
	    			<Col componentClass={ControlLabel} sm={4}>
					What are your short-term and long-term work goals?
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Work goals" name="workGoals" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalLifeGoals">
	    			<Col componentClass={ControlLabel} sm={4}>
					What are your short-term and long-term life goals?
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Life goals" name="lifeGoals" onChange={this.handleChange} validations={[required]}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalAccomodations">
	    			<Col componentClass={ControlLabel} sm={4}>
					What are your requested work accomodations? 
	    		</Col>
	    		<Col sm={5}>
	      				<Textarea className="form-control" placeholder="Accomodations" name="accomodations" onChange={this.handleChange} validations={[required]}/>
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
		{redirect && (<Redirect to={{ pathname: '/login', state: { message: "Thank you for registering. Please sign in."}}}/>)}
		</div>
		)
	}
}
