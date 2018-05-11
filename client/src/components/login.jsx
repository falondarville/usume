import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
      password: ''
    }
  }

  handleChange = (event) => {
    const state = this.state;
    state[event.target.name] = event.target.value;
    this.setState(state, () => console.log(this.state));
    console.log(event.target.value);
  }

  handleSubmit = (event) => {

    console.log("This is handleSubmit.")
    event.preventDefault();

    const { email, password } = this.state;
    let self = this;

    //post to Express API
    axios.post('http://localhost:3001/login', {
      // sending as params not body
      email, password
      })
      .then(function(data){
        console.log(data);
        // redirect to the logged-in page when form is successfully submitted
        // passport may handle this
      })
    .catch(function (error) {
      console.log(error)

      // the credentials you provided are invalid
      // self.setState({ serverErrors: error.response.data.data });        
      })
  }

  render() {

    const registerMessage = this.props.location.state ? this.props.location.state.message : false;

    return (
      <div>
    	<Grid>
    	<Form className={"form-horizontal"} onSubmit={this.handleSubmit.bind(this)}>
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
    </div>
    );
  }
}