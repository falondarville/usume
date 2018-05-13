import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { div } from 'react-bootstrap';
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
				skills: '',
				title: '',
				environment: '',
				relationships: '',
				priorities: '',
				personality: '',
				workGoals: '',
				lifeGoals: '',
				accomodations: ''
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
					email: userData.email,
					skills: userData.skills,
					title: userData.title,
					environment: userData.environment,
					relationships: userData.relationships,
					priorities: userData.priorities,
					personality: userData.personality,
					workGoals: userData.workGoals,
					lifeGoals: userData.lifeGoals,
					accomodations: userData.accomodations
				}
			})

		}).catch(function(error){
			// redirect to login page if not logged in
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
			return (<div className="container">
				<Link className="pull-right" to="/logout">Log out</Link>
				<h1 className="text-center resume-header">{this.state.user.firstName} {this.state.user.lastName} </h1>
					<hr />
					<p className="text-center">{this.state.user.email} </p>

					<div className="container body-container">
					<p><b>Skills: </b> {this.state.user.skills} </p>
					<p><b>Requested Title: </b> {this.state.user.title}</p>
					<p>{this.state.user.environment}</p>
					<p>{this.state.user.relationships}</p>
					<p>{this.state.user.priorities}</p>
					<p>{this.state.user.personality}</p>
					<p>{this.state.user.workGoals}</p>
					<p>{this.state.user.lifeGoals}</p>
					<p>{this.state.user.accomodations}</p>
					</div>
				</div>);
		}

	}
}