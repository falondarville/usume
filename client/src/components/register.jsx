import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, ControlLabel, FormGroup } from 'react-bootstrap';
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
				skills: ''
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
			const { email, password, passwordConfirm, first, last, skills, terms } = this.state;

			//post to Express API
			axios.post('http://localhost:3001/users', {
				email, password, passwordConfirm, first, last, skills, terms
	  		})
	  		.then(function (response) {
	    		console.log(response);
	  		})
	 		.catch(function (error) {
	    		console.log(error);
	  		});
 		}
	}

	canSubmit = (event) => {
		const {email, password, passwordConfirm, first, last, skills} = this.state;
		var emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return (
			email.length > 0 &&
			password.length > 6 &&
			passwordConfirm === password &&
			first.length >1 &&
			last.length > 1 &&
			skills.length >1
		);
	}

	render() {

		const isEnabled = this.canSubmit();

		return (
			<Form className={"form-horizontal"} onSubmit={this.handleSubmit}>
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
    				</Col>
  			</FormGroup>
			</Form>
		)
	}
}
