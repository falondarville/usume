import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Form, Jumbotron, Grid, Row, Col, Image, Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import './loggedin.css'; 

// if not logged in, redirect to login page
	// use the email that the user logged in with 

	// axios.get('http://localhost:3001/index', {
	// 	email, password, passwordConfirm, first, last, skills, terms, redirect
	// 	}
	// .then(function(data){
	// 	console.log(data);

	// })
	// .catch(function (error) {
	// 	console.log(error)

	// })

// GET from UserData table and display once the user has logged in
export default class LoggedIn extends Component {

	constructor(){
	super();
	this.state = {
		user: {
			firstName: '',
			lastName: '',
			skills: ''
		}
		};
		axios.post('/authuser').then(function(data){
			console.log(data);
		}).catch(function(error){
			console.log(error);
		})
	}

render() {
    return (
    	<div><h2>The resume of {this.state.user.firstName} {this.state.user.lastName} </h2>
    	<p>Skills: {this.state.user.skills} </p>
    	</div>
    	);
	}
}