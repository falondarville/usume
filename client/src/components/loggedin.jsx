import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { div, Col, Row } from 'react-bootstrap';
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
				<h1 className="text-center resume-header"><b>{this.state.user.firstName} {this.state.user.lastName} </b></h1>
					<hr />
					<h4 className="text-center email-styling">{this.state.user.email} </h4>

						<Row>
							<Col sm={6}>
								<div className="panel">
								 <div className="panel-body">
									<h2 className="text-center overview"><span className="icon-star well-icon"></span>Overview</h2>
									<p><b>Requested Title: </b> {this.state.user.title}</p>
									<p><b>Skills: </b> {this.state.user.skills} </p>
									</div>
								</div>

								<div className="panel">
									<div className="panel-body">
									<h2 className="text-center goals"><span className="icon-globe well-icon"></span>Work and Life Goals</h2>
									<p><b>Work Goals: </b>{this.state.user.workGoals}</p>
									<p><b>Life Goals: </b>{this.state.user.lifeGoals}</p>
									</div>
								</div>
							</Col>
							<Col sm={6}>
								<div className="panel">
									<div className="panel-body">
									<h2 className="text-center workplace"><span className="icon-thumbs-up well-icon"></span>Workplace Desires</h2>
									<p><b>Ideal work environment:</b>{this.state.user.environment}</p>
									<p><b>Ideal work relationships: </b>{this.state.user.relationships}</p>
									<p><b>Ideal work accomodations: </b>{this.state.user.accomodations}</p>
							</div>
						</div>

						<div className="panel">
							<div className="panel-body">
								<h2 className="text-center personality"><span className="icon-pie-chart well-icon"></span>Personality and Priorities</h2>
								<p><b>Priorities: </b>{this.state.user.priorities}</p>
								<p><b>Personality: </b>{this.state.user.personality}</p>
								</div>
							</div>
						</Col>
					</Row>

				</div>);
		}

	}
}