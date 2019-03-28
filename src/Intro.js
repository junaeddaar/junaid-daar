import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/style.css';




export default class Intro extends Component{
  render() {
    return(
      <div className="main">
      <section class="intro-section">
		<div class="container text-center">
			<div class="row">
				<div class="col-xl-10 offset-xl-1">
					<h2 class="section-title">Welcome to <span>PhotoGallery</span>, Upload Pictures and share experience</h2>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
  }
}