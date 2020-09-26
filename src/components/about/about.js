import React, { Component } from 'react'; 
export default class About extends Component {
    render() {
        return (
            <React.Fragment>

  
<section id="about">
          <div className="row">
            <div className="three columns">
              <img className="profile-pic" src="images/Coverpic1.jpg" alt="" />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>
              <p>My love for nutrition comes from my love for exercise and a desire to help others. I have realized that nutrition
                plays an important part in every aspect of our life and can be used to improve our overall well-being. I also have an interest in learning new skills 
                and hobbies like graphic design or coding, which I hope is showcased throughout this portfolio!
              </p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Cristian Ordoñez, RD, MPH</span><br />
                    <span>565 Manchester Pl.<br />
                      Morganville, NJ 07751 US
                    </span><br />
                    <span>(732)912-4457</span><br />
                    <span>cristianordonezRD.com</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                  </p>
                </div>
              </div> {/* end row */}
            </div> {/* end .main-col */}
          </div>
        </section>
   




            </React.Fragment>
        )
    }
}


