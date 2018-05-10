import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Grid, Col, Button, FormGroup, ControlLabel } from 'react-bootstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {required, email} from './../validation';
import './login.css'; 

// add validation, check that user email exists in Users table and password matches
export default class Login extends Component {

  constructor(){
    super();
    this.state = {
      email: '',
      password: '',
      redirect: false
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

    const { email, password, redirect } = this.state;
    let self = this;

    //post to Express API
    axios.post('http://localhost:3001/login', 
      passport.authenticate('local', {
          successRedirect: '/loggedin',
          failureRedirect: '/login',
          failureFlash: true
      }))
      .then(function(data){
        console.log(data);
        // redirect to the log-in page when form is successfully submitted
        self.setState({ redirect: true });
      })
      .catch(function (error) {
        console.log(error)
        // print the errors to the page using react-validation 
        // the credentials you provided are invalid
        self.setState({ serverErrors: error.response.data.data });
      })
  }

  render() {

    const registerMessage = this.props.location.state ? this.props.location.state.message : false;

    const { from } = this.props.location.state || '/'
    const { redirect } = this.state

    return (
      <div>
    	<Grid>
    	<Form className={"form-horizontal"}>
  			<FormGroup controlId="formHorizontalEmail">
          {registerMessage && <p className="text-center thank-you"> {registerMessage}</p>}
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
      		<Input className="form-control" type="password" placeholder="Password" name="password" onChange={this.handleChange} validations={[required]}/>
    		</Col>
  			</FormGroup>

  			<FormGroup>
   				 <Col smOffset={4} sm={10}>
      				<Button bsStyle='primary' type="submit">Sign in</Button>
    			</Col>
  			</FormGroup>
		</Form>

    <Col smOffset={4} sm={10}>
		<p>Don't have an account? <Link to="/register">Register Here.</Link></p>
    </Col>
    	</Grid>
    {redirect && (<Redirect to={from || '/loggedin'}/>)}
    </div>
    );
  }
}