import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
	render() {
		return (
			<Navbar default collapseOnSelect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to='/'><img alt="logo" className="logo" src="/images/U.png"></img><b>USUME</b></Link>
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey={1} href='/' to='/'>Home
						</NavItem>
						<NavItem eventKey={2} href='/login' to='/login'>Login
						</NavItem>
						<NavItem eventKey={3} href='/register' to='/register'>Register
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
			)
	}
}