import { Component } from 'react';
import axios from 'axios';

// GET from UserData table and display once the user has logged in
export default class Logout extends Component {
		
	constructor(){
		super();

	axios.post('/logout').then(function(data){
		window.location.href='/';
	})
}
}