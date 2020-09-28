import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>


<footer>
          <div className="row">
            <div className="twelve columns">
              <ul className="social-links">
                <li><a href="https://github.com/cristianordonez?tab=repositories"><i className="fa fa-github" /></a></li>
                <li><a href="www.linkedin.com/in/cristian-ordonez-RD"><i className="fa fa-linkedin" /></a></li>
              
              </ul>
              <ul className="copyright">
                <li>Developed with React</li>
                <li>Designed by <a title="Styleshout" href="http://www.styleshout.com/">Cristian Ordoñez</a></li>   
              </ul>
            </div>
            <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
          </div>
        </footer>
   

      </React.Fragment>
    )
  }
}


  