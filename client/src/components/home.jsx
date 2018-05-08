import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './home.css'; 

export default class Home extends Component {
	render() {
		return (
			<Grid fluid={true}>
				<Jumbotron>
					<h1>USUME is the Universal Resume</h1>
				
						<p>Create a single resume and send the link to employers. No more tailoring, tinkering, and changing parts of yourself on paper (and in real life) to get and keep the job. Show employers that you care about consistency and your personal values. The world's changing and we know that people do their best work when they can openly be themselves.</p>
					<Link to='/register'>
						<Button bsStyle='primary'>Register Now</Button>
					</Link>
				</Jumbotron>
				<Row className="show-grid text center group-people">
					<Col xs={12} sm={4} className="people">
						<Image src="./../images/brooke.jpg" thumbnail className="profile-pic" />
						<Image src="./../images/samuel.jpg" thumbnail className="profile-pic" />
					</Col>
					<Col xs={12} sm={4} className="people hide-people">
						<Image src="./../images/tru.jpg" thumbnail className="profile-pic" />
						<Image src="./../images/irina.jpg" thumbnail className="profile-pic" />
					</Col>
					<Col xs={12} sm={4} className="people hide-people">
						<Image src="./../images/man.jpg" thumbnail className="profile-pic" />
						<Image src="./../images/remy.jpg" thumbnail className="profile-pic" />
					</Col>
				</Row>
				<div className="container">
					<h2>Why USUME?</h2>
				</div>
				
			</Grid>
		)
	}
}