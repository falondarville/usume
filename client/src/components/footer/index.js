import React, { Component } from 'react';

export default class FooterComponent extends Component {
  	render() {
	    return (
			<div className="footer">
				<footer className="site-footer"> 
					<div className="container"> 
						<div className="row"> 
							<div className="col-md-1"></div>
							<div className="col-md-10"> 
								<ul className="list-links"> 
									<li><a href="">About Us</a></li> 
									<li><a href="">Sign In</a></li> 
									<li><a href="">Sign Up</a></li>
									<li><a href="">Contact Us </a></li>
									<li><a href="">Privacy Policy</a></li> 
								</ul> 
							</div>
							<div className="col-md-1"></div>
						</div>
					</div>
					<p className="small-text"> 
						All Rights Reserved to USUME © 2018
					</p> 
				</footer>
			</div>
	    );
  	}
}