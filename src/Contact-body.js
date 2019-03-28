import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/mystyle.css';


export default class ContactBody extends Component{
  render() {
    return(
      <div className="main">
     <section class="page-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-6 offset-lg-3 contect-tect">
					<h2>So, let’s talk</h2>
					<p>Contact us about any information you want or any type of problem you face. Feel free to contact any time and we will reply you within next two working days</p>
				</div>
			</div>
			<form class="contact-form">
				<div class="row">
					<div class="col-md-6">
						<input type="text" placeholder="Name"/>
					</div>
					<div class="col-md-6">
						<input type="text" placeholder="E-mail"/>
					</div>
					<div class="col-md-6">
						<input type="text" placeholder="Subject"/>
					</div>
					<div class="col-md-6">
						<input type="text" placeholder="How did you hear about us?"/>
					</div>
					<div class="col-md-12">
						<textarea placeholder="Message"></textarea>
					</div>
				</div>
				<div class="text-center">
					<button class="site-btn">Send</button>
				</div>
			</form>
		</div>
	</section>
        </div>
    )
  }
}