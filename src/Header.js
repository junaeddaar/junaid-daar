import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/style.css';




export default class Header extends Component{
  render() {
    return(
      <div className="main">
      <header className="header-section">
		<div className="container">
			<div className="row">
				<div className="col-lg-4 col-md-3">
					<div className="logo">
					  <h2 className="site-logo">PhotoGallery</h2>
					</div>
				</div>
				<div className="col-lg-8 col-md-9">
					<a href="index.html" className="site-btn header-btn">Log out</a>
					<nav className="main-menu">
						<ul>
							<li><a href="home.html">Home</a></li>
							<li><a href="about.html">About</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
				</div>
			</div>
		</div>
		<div className="nav-switch">
			<i className="fa fa-bars"></i>
		</div>
	</header>
        </div>
    )
  }
}