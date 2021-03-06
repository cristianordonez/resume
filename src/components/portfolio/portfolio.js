
import React, { Component} from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-01" title>
                    <img alt="" src="images/portfolio/smoothie.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Healthy Recipe Infograph</h5>
                        <p>Social Media</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 1 end */}


              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-02" title>
                    <img alt="" src="images/portfolio/supplementBrochure.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Supplement Brochure</h5>
                        <p>Graphic Design</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 2 end */}



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03" title>
                    <img alt="" src="images/portfolio/sportHandout.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>High-Intensity Sports Nutrition Handout</h5>
                        <p>Education</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 3 end */}



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04" title>
                    <img alt="" src="images/portfolio/nutritionDay.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Nutrition Day Poster Presentation </h5>
                        <p>Research</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 4 end */}



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-05" title>
                    <img alt="" src="images/portfolio/certificates.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Continuing Education for Dietetics</h5>
                        <p>Certifications</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 5 end */}



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-06" title>
                    <img alt="" src="images/portfolio/udemyCoursework.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Web Development and Graphic Design</h5>
                        <p>Technical Skills</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 6 end */}



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-07" title>
                    <img alt="" src="images/portfolio/prezi.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Research Proposal in Neonatal Nutrition</h5>
                        <p>Analytical Skills</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item 7 end */}



              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-08" title>
                    <img alt="" src="images/portfolio/yelpCamp.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>YelpCamp</h5>
                        <p>Web Development</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div>  {/* item 8 end */}




            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}


          <div id="modal-01" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-smoothie.jpg" alt="" />
            <div className="description-box">
              <h4>Healthy Recipe Infograph</h4>
              <p>Developed infograph for nutritious smoothie recipes that was used by Registered Dietitian 
                to improve social media presence. </p>
              <span className="categories"><i className="fa fa-tag" />Graphic Design, Social Media</span>
            </div>
            <div className="link-box">
              <a href="https://www.instagram.com/p/B9bwi-Ol0wx/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-01 End */}



          <div id="modal-02" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-Brochure.jpg" alt="" />
            <div className="description-box">
              <h4>Supplement Brochure</h4>
              <p> Produced educational brochure regarding supplement use and sports nutrition.</p>
              <span className="categories"><i className="fa fa-tag" />Education, Sports Nutrition, Graphic Design</span>
            </div>
            <div className="link-box">
              <a href="images/portfolio/modals/fullSupplementBrochure.pdf">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-02 End */}



          <div id="modal-03" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-highIntensityHandout.jpg" alt="" />
            <div className="description-box">
              <h4>High-Intensity Sports Nutrition Handout</h4>
              <p>Created individualized educational materials for athletes in high-intensity sports such as wrestling, 
                powerlifting, and football. </p>
              <span className="categories"><i className="fa fa-tag" />Education, Sports Nutrition</span>
            </div>
            <div className="link-box">
              <a href="images/portfolio/modals/fullHighIntensitySportsHandout.pdf">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-03 End */}



          <div id="modal-04" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-nutritionDay.jpg" alt="" />
            <div className="description-box">
              <h4>Nutrition Day Poster Presentation</h4>
              <p>Collected data and presented research regarding the association between self-rated health and number of hospital 
                admissions as possible confounders to association between nutrition intake and mortality risk. Data was Collected
                as part of nutritionDay, a worldwide initiative to increase awareness of malnutrition in hospitals.
              </p>
              <span className="categories"><i className="fa fa-tag" />Research</span>
            </div>
            <div className="link-box">
              <a href="images/portfolio/modals/fullNDFinalManuscript.pdf">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-04 End */}



          <div id="modal-05" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-mainCertificates.jpg" alt="" />
            <div className="description-box">
              <h4>Continuing Education for Dietetics</h4>
              <p>Servsafe certified, have also gained variety of continuing education credits and learning certificates 
                in various areas of dietetics. 
              </p>
              <span className="categories"><i className="fa fa-tag" />Certifications, Continuing Education</span>
            </div>
            <div className="link-box">
              <a href="images/portfolio/modals/fullCertificateTraining.pdf">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-05 End */}



          <div id="modal-06" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-Udemy.jpg" alt="" />
            <div className="description-box">
              <h4>Web Development and Graphic Design</h4>
              <p>I have improved my technical skills through online courses in both web development and graphic design,
                 which showcases my ability to learn difficult material even outside traditional classroom settings.
              </p>
              <span className="categories"><i className="fa fa-tag" />Technical Skills, Web Development, Graphic Design</span>
            </div>
            <div className="link-box">
              <a href="images/portfolio/modals/fullUdemyCertificates.pdf">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-06 End */}



          <div id="modal-07" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-preziPresentation.jpg" alt="" />
            <div className="description-box">
              <h4>Research Proposal in Neonatal Nutrition</h4>
              <p>Developed and presented research proposal regarding the growth and development of preterm infants
                 provided with preterm infant formula at NICU discharge.</p>
              <span className="categories"><i className="fa fa-tag" />Analytical Skills, Research</span>
            </div>
            <div className="link-box">
              <a href="https://prezi.com/view/LxrIvBXgONP9oLAi35u3/">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-07 End */}



          <div id="modal-08" className="popup-modal mfp-hide">
            <img className="scale-with-grid" src="images/portfolio/modals/m-yelpCamp.jpg" alt="" />
            <div className="description-box">
              <h4>YelpCamp</h4>
              <p>Developed custom YelpCamp application with HTML, CSS and Javascript to improve my technical skills. Try it out for yourself if yourself and add
                some of your own favorite campgrounds! </p>
              <span className="categories"><i className="fa fa-tag" />Web development, Technical Skills</span>
            </div>
            <div className="link-box">
              <a href="https://stark-caverns-61746.herokuapp.com/campgrounds">Details</a>
              <a className="popup-modal-dismiss">Close</a>
            </div>
          </div>{/* modal-08 End */}


        </div> {/* row End */}
      </section>




      </React.Fragment>
    )
  }
}
