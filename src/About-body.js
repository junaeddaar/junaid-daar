import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/mystyle.css';


export default class AboutBody extends Component{
  render() {
    return(
      <div className="main">
      <section class="page-section">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<p>We are a group of two students, Usama Nasir and Junaid Dar, of software engineering and the purpose of this website is just as an assignment for Advanced Web Development. We study in University of Gujrat Hafiz Hayat Campus.</p>
					
					<figure class="mt-5">
                        <img  src={require('./img/sign.png')} />
					</figure>
				</div>
				<div class="col-lg-5 offset-lg-1">
					<figure class="pic-frame">
                    <img  src={require('./img/about.jpg')} alt="sign up image"/>
					</figure>
				</div>
			</div>
		</div>
	</section>
        </div>
    )
  }
}