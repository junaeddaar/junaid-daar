import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Homebody from './Home-body';
 import Aboutbody from './About-body';
 import ContactBody from './Contact-body';
export default class Home extends Component{
   render(){

    return(
        <div>
            <Header />
            <Intro /> 
            <Homebody /> 
            <Footer />
                    </div>
    )
   }
}
