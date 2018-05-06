import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Checkbox, Form, ControlLabel, FormGroup, FormControl } from 'react-bootstrap';
import './register.css'; 

export default class Register extends Component {

	render() {
		return (
			<Form horizontal>
	  			<FormGroup controlId="formHorizontalEmail">
	    			<Col componentClass={ControlLabel} sm={4}>
						Email
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl type="email" placeholder="Email" />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalFirstName">
	    			<Col componentClass={ControlLabel} sm={4}>
						First Name
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl type="text" placeholder="First Name" />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalLastName">
	    			<Col componentClass={ControlLabel} sm={4}>
					Last Name
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl type="text" placeholder="Last Name" />
	    			</Col>
	  			</FormGroup>

	  			<FormGroup controlId="formHorizontalSkills">
	    			<Col componentClass={ControlLabel} sm={4}>
					List your skills, each of them separated by a comma.
	    		</Col>
	    		<Col sm={5}>
	      				<FormControl componentClass="textarea" placeholder="Skills" />
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