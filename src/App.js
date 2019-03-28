import React, { Component } from 'react';
import './App.css';
import './fonts/material-icon/css/material-design-iconic-font.min.css';
import './fonts/style.css';



export default class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="main">
      <section className="signup">
            <div className="container">
                <div className="signup-content">
                    <div className="signup-form">
                        <h2 className="form-title">Sign up</h2>
                        { <a name="sign_up"></a> }
                        <form method="POST" className="register-form" id="register-form">
                            <div className="form-group">
                                <label for="name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="name" id="name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="email"><i className="zmdi zmdi-email"></i></label>
                                <input type="email" name="email" id="email" placeholder="Your Email"/>
                            </div>
                            <div className="form-group">
                                <label for="pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="pass" id="pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="re-pass"><i className="zmdi zmdi-lock-outline"></i></label>
                                <input type="password" name="re_pass" id="re_pass" placeholder="Repeat your password"/>
                            </div>
                            <div className="form-group">
                              
									  <label>Chose Profile Picture: 
										<input type="file" className="image-upload" accept="image/*" />
									  </label>
                               <br/><br/><br/>
                            </div>
                            <div className="form-group form-button">
                                <a href="home.html" name="signup" id="signup" className="form-submit" value="Register">Sign Up</a>
                            </div>
                        </form>
                    </div>
                    <div className="signup-image">
                        <figure><img  src={require('./images/signup-image.jpg')} alt="sign up image"/></figure>
                        <a href="#sign_in" className="signup-image-link">I am already member</a>
                    </div>
                </div>
            </div>
        </section>


        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure>
                          <img src={require('./images/signin-image.jpg')} alt="sign in image"/>
                        </figure>
                        <a href="#sign_up" className="signup-image-link">Create an account</a>
                    </div>

                    <div className="signin-form">
                        <h2 className="form-title" >Login</h2>
                        <a name="sign_in"></a>
                        <form method="POST" className="register-form" id="login-form">
                            <div className="form-group">
                                <label for="your_name"><i className="zmdi zmdi-account material-icons-name"></i></label>
                                <input type="text" name="your_name" id="your_name" placeholder="Your Name"/>
                            </div>
                            <div className="form-group">
                                <label for="your_pass"><i className="zmdi zmdi-lock"></i></label>
                                <input type="password" name="your_pass" id="your_pass" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <input type="checkbox" name="remember-me" id="remember-me" className="agree-term" />
                                <label for="remember-me" className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <a href="home.html" name="signin" id="signin"  className="form-submit" value="Log in">Login</a>
                            </div>
                        </form>
                        
                    </div>
                </div>
            </div>
        </section>

      </div>
      </div>
    );
  }
}
