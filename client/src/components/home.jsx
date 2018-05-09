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
						<Image src="./images/brooke.jpg" thumbnail className="profile-pic" />
						<Image src="./images/samuel.jpg" thumbnail className="profile-pic" />
					</Col>
					<Col xs={12} sm={4} className="people hide-people">
						<Image src="./images/tru.jpg" thumbnail className="profile-pic" />
						<Image src="./images/irina.jpg" thumbnail className="profile-pic" />
					</Col>
					<Col xs={12} sm={4} className="people hide-people">
						<Image src="./images/man.jpg" thumbnail className="profile-pic" />
						<Image src="./images/remy.jpg" thumbnail className="profile-pic" />
					</Col>
				</Row>
				<div className="container why-container">
					<Row className="show-grid text center tri-grid">
						<Col xs={12} sm={4} className="tri-info text-center">
							<span className="icon-map-signs icon"></span>
							<h3>Show Your Consistency<br/> of Values</h3>
							<p className="paragraphs">You're not changing who you are from application to application, so your resume should be consistent with your values, your experience, and what you're looking for in a career. USUME allows you to submit one highly-representative version of who you are, and in the process, change the way we apply to, and obtain jobs.</p>
					
						</Col>
						<Col xs={12} sm={4} className="tri-info text-center">
			
							<span className="icon-user-circle-o icon"></span>
							<h3>Get Hired for You,<br/> Not Your Brand</h3>
							<p className="paragraphs">Personal branding can distort who you are in person versus who you are online and on paper. With USUME, you're not branding yourself. You're simply providing a personalized view of the <i>person</i> that employers are looking for. While employment is a contract, it's between people first and foremost.</p>
			
						</Col>
						<Col xs={12} sm={4} className="tri-info text-center">

							<span className="icon-handshake-o icon"></span>
							<h3>Establish an Even <br/>Relationship With Employers</h3>
							<p className="paragraphs">Oftentimes, employers seem to have the upperhand in hiring. When you use USUME, you're committing to make yourself an active participant in the hiring process. Future functionality includes pairing you with an employee at the company you're interviewing for, so you can get an alternative look at working there. </p>

						</Col>
					</Row>
				</div>
			</Grid>
		)
	}
}