import React, { Component } from 'react';
import './css/bootstrap.min.css';
import './css/font-awesome.min.css';
import './css/magnific-popup.css';
import './css/style.css';




export default class Footer extends Component{
  render() {
    return(
      <div className="main">
      <footer class="footer-section text-center">
		<div class="container">
			<h2 class="section-title mb-5">Let’s make Memories together</h2>
			<div class="upload-btn-wrapper">
				  <button class="btn">Upload a Picture</button>
				  <input type="file" name="myfile" />
			</div>
			<div class="social-links">
				<a href=""><span class="fa fa-instagram"></span></a>
				<a href=""><span class="fa fa-facebook"></span></a>
				<a href=""><span class="fa fa-twitter"></span></a>
			</div>
			<div class="copyright">
Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved <i class="fa fa-heart-o" aria-hidden="true"></i> by PhotoGallery
</div>
		</div>
	</footer>
        </div>
    )
  }
}