import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/style.css';
import './css/mystyle.css';


export default class Homebody extends Component{
  render() {
    return(
      <div className="main">
      <section class="portfolio-section">
		<div class="container">
			<ul class="portfolio-filter controls">
				<li class="control" data-filter="all">All</li>
				<li class="control" data-filter=".my">My Pictures</li>
			</ul>
		</div>                       
		<div class="container-fluid p-md-0 ">
			<div class="row portfolios-area">
				<div class="mix col-lg-6 col-md-6 my">
					{/* <a href="img/portfolio/1.jpg" class="portfolio-item set-bg" data-setbg="./img/portfolio/1.jpg"> */}
                    <img  src={require('./img/portfolio/3.jpg')} alt="sign up image"/> <h2> By <span>UserName</span></h2><br/>
						<div class="pi-inner">
							<br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-6 col-md-6 digital">
					{/* <a href="img/portfolio/2.jpg" class="portfolio-item set-bg " data-setbg="img/portfolio/2.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/4.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-4 col-md-6 my">
					{/* <a href="img/portfolio/3.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/3.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/5.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-4 col-md-6 digital">
					{/* <a href="img/portfolio/4.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/4.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/6.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-4 col-md-6 rened">
					{/* <a href="img/portfolio/5.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/5.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/7.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-12 col-md-6 brand">
					{/* <a href="img/portfolio/6.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/6.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/8.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-6 col-md-6 rened">
					{/* <a href="img/portfolio/7.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/7.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/9.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
				<div class="mix col-lg-6 col-md-6 brand">
					{/* <a href="img/portfolio/8.jpg" class="portfolio-item set-bg" data-setbg="img/portfolio/8.jpg"> */}
						<div class="pi-inner">
							<img  src={require('./img/portfolio/10.jpg')} alt="sign up image"/><h2> By <span>UserName</span></h2><br/>
						</div>						
					{/* </a> */}
				</div>
			</div>
		</div>
	</section>
        </div>
    )
  }
}