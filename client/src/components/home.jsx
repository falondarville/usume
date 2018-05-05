import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css'; 

export default class Home extends Component {
	render() {
		return (
			<Grid>
				<Jumbotron>
					<h2>USUME : The Universal Resume</h2>
						<h4>Align your values with your job search.</h4>
					<Link to='/register'>
						<Button bsStyle='primary'>Register Now</Button>
					</Link>
				</Jumbotron>
			</Grid>
		)
	}
}