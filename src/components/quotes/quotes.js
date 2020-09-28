import React, { Component } from 'react';
export default class Quotes extends Component {
  render() {
    return (
      <React.Fragment>



  
<section id="testimonials">
          <div className="text-container">
            <div className="row">
              <div className="two columns header-col">
                <h1><span>Client Testimonials</span></h1>
              </div>
              <div className="ten columns flex-container">
                <div className="flexslider">
                  <ul className="slides">
                    <li>
                      <blockquote>
                        <p>Success is not final; failure is not fatal: It is the courage to continue that counts."
                        </p>
                        <cite>Winston S. Churchill</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                    <li>
                      <blockquote>
                        <p>Employ your time in improving yourself by other men's writings so that you shall come easily 
                          by what others have labored hard for."
                        </p>
                        <cite>Winston S. Churchill</cite>
                      </blockquote>
                    </li> {/* slide ends */}
                  </ul>
                </div> {/* div.flexslider ends */}
              </div> {/* div.flex-container ends */}
            </div> {/* row ends */}
          </div>  {/* text-container ends */}
        </section>
    

      </React.Fragment>
    )
  }
}

