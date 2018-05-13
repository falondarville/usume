import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { div } from 'react-bootstrap';


// GET from UserData table and display once the user has logged in
export default class Logout extends Component {
		
	constructor(){
		super();

	axios.post('/logout').then(function(data){
		window.location.href='/';
	})
}
}