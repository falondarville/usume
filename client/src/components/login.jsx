import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Form, Jumbotron, Grid, Row, Col, Image, Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';
import './login.css'; 

export default class Login extends Component {

  render() {
    return (
    	<Grid>
    	<Form horizontal>
  			<FormGroup controlId="formHorizontalEmail">
    			<Col componentClass={ControlLabel} sm={4}>
					Email
    		</Col>
    		<Col sm={5}>
      				<FormControl type="email" placeholder="Email" />
    			</Col>
  			</FormGroup>

  			<FormGroup controlId="formHorizontalPassword">
    			<Col componentClass={ControlLabel} sm={4}>
      			Password
    		</Col>
    		<Col sm={5}>
      		<FormControl type="password" placeholder="Password" />
    		</Col>
  			</FormGroup>

  			<FormGroup>
   				 <Col smOffset={4} sm={10}>
      				<Button bsStyle='primary' type="submit">Sign in</Button>
    			</Col>
  			</FormGroup>
		</Form>

		<p>Don't have an account? <Link to="/register">Register Here.</Link></p>
    	</Grid>
    );
  }
}