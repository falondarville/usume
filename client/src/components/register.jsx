import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Col, Button, Checkbox, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import './register.css'; 

export default class Register extends Component {

	constructor(){
		super();
		this.state = {
			email: '',
			first: '',
			last: '',
			skills: ''
		};
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
		console.log(event.target.value);
	}

	handleSubmit = (event) => {
		event.preventDefault();
		const { email, first, last, skills } = this.state;

		//post to Express API
		axios.post('http://localhost:3001/users', {
			email, first, last, skills
  		})
  		.then(function (response) {
    		console.log(response);
  		})
 		.catch(function (error) {
    		console.log(error);
  		});
	}

	render() {
		return (
			<Form horizontal onSubmit={this.handleSubmit}>
	  			<FormGroup controlId="formHorizontalEmail">
	    			<Col componentClass={ControlLabel} sm={4}>
						Email
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl type="email" placeholder="Email" name="email" onChange={this.handleChange} />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalFirstName">
	    			<Col componentClass={ControlLabel} sm={4}>
						First Name
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl type="text" placeholder="First Name" name="first" onChange={this.handleChange}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalLastName">
	    			<Col componentClass={ControlLabel} sm={4}>
					Last Name
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl type="text" placeholder="Last Name" name="last" onChange={this.handleChange}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalSkills">
	    			<Col componentClass={ControlLabel} sm={4}>
					List your skills, each of them separated by a comma.
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl componentClass="textarea" placeholder="Skills" name="skills" onChange={this.handleChange} />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup>
    				<Col smOffset={4} sm={10}>
      					<Checkbox>I agree to the Terms and Conditions of USUME.</Checkbox>
   					</Col>
  				</FormGroup>

	  			 <FormGroup>
   				 	<Col smOffset={4} sm={10}>
      					<Button bsStyle='primary' type="submit">Register</Button>
    				</Col>
  			</FormGroup>
			</Form>
		)
	}
}