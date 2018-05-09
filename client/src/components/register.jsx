import React, { Component } from 'react';
import axios from 'axios';
import { Col, Button, Checkbox, ControlLabel, FormGroup } from 'react-bootstrap';
import './register.css'; 
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {required, email} from './../validation';

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
				terms: ''
		}
	}

	handleChange = (event) => {
		const state = this.state;
		state[event.target.name] = event.target.value;
		this.setState(state, () => console.log(this.state));
		console.log(event.target.value);
	}

	handleSubmit = (event) => {
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

	render() {
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
					<Input className="form-control" label="Password" placeholder="Password" type="password" name="password" onChange={this.handleChange} validations={[required]} />
				</Col>
				</FormGroup>

				<FormGroup controlId="formHorizontalPasswordConfirm">
						<Col componentClass={ControlLabel} sm={4}>
						Confirm Password
					</Col>
					<Col sm={5}>
					<Input className="form-control" label="Password" placeholder="Confirm Password" type="password" name="passwordConfirm" onChange={this.handleChange} validations={[required]} />
				</Col>
				</FormGroup>

	  			<FormGroup controlId="formHorizontalFirstName">
	    			<Col componentClass={ControlLabel} sm={4}>
						First Name
	    		</Col>
	    		<Col sm={5}>
	      				<Input className="form-control" type="text" placeholder="First Name" name="first" onChange={this.handleChange}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalLastName">
	    			<Col componentClass={ControlLabel} sm={4}>
					Last Name
	    		</Col>
	    		<Col sm={5}>
	      				<Input className="form-control" type="text" placeholder="Last Name" name="last" onChange={this.handleChange}/>
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalSkills">
	    			<Col componentClass={ControlLabel} sm={4}>
					List your skills, each of them separated by a comma.
	    		</Col>
	    		<Col sm={5}>
	      				<Input className="form-control" componentClass="textarea" placeholder="Skills" name="skills" onChange={this.handleChange} />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup>
    				<Col smOffset={4} sm={10}>
      					<Checkbox name="terms">I agree to the Terms and Conditions of USUME.</Checkbox>
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
