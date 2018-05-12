import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { Form, Jumbotron, Grid, Row, Col, Image, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './loggedin.css'; 


// GET from UserData table and display once the user has logged in
export default class LoggedIn extends Component {

	constructor(){
		super();
		this.state = {
			user: {
				firstName: false,
				lastName: '',
				email: '',
				skills: ''
			},
			redirectToLogin: false
		};

		var self = this;

		axios.post('/authuser').then(function(data){
			
			// update state
			const userData = data.data
			self.setState({
				user: {
					firstName: userData.firstName,
					lastName: userData.lastName,
					email: userData.email
				}
			})

		}).catch(function(error){
			// redirect to login page
			self.setState({ redirectToLogin: true });
		})
	}

	render() {

		const { redirectToLogin } = this.state

		if(redirectToLogin) {
			return <Redirect to={{ pathname: '/login'}} />;
		} else if(this.state.user.firstName === false) {
			return <div></div>
		} else {
			return (<div>
				<h2>The resume of {this.state.user.firstName} {this.state.user.lastName} </h2>
					<p>Skills: {this.state.user.skills} </p>
				</div>);
		}

	}
}