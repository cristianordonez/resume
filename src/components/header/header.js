import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>


<header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Works</a></li>
            {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Cristian Ordoñez, MPH, RD</h1>
            <h3>I'm a <span>Registered Dietitian</span> and <span>University of Michigan</span> MPH graduate. My goal is to use the skills I have learned 
            and the experience I've gained to help others improve their overall health and well-being. Let's <a className="smoothscroll" href="#about">start scrolling </a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />


            <ul className="social">  
              <li>
        <div className="site-buttons">
          
            <button type="submit" className="btn btn-outline-danger"><a className="smoothscroll" href="#contact">Contact Me</a></button>
        </div>
      </li>
       
            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>
      </header>
  




      </React.Fragment>
    )
  }
}


