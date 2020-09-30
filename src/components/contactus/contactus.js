

import React, { Component } from 'react';
export default class ContactUs extends  Component {




  render() {
    return (
      <React.Fragment>

<section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>
          <div className="ten columns">
            <p className="lead">Interested in working together? Get in touch by
             filling out the form below and I will get back to you 
            as soon as I can. 
            </p>
          </div>
        </div>
        <div className="row">
          <div className="eight columns">
        


            {/* form */}  
            <form action method="POST"  name="contact" data-netlify="true">
      <input type="hidden" name="form-name" value="contact"/>

            <fieldset>

                <div>
                  <label htmlFor="name">Name: <span className="required">*</span></label>
                  <input type="text"  size={35} name="name" />
                </div>


                <div>
                  <label htmlFor="email">Email: <span className="required">*</span></label>
                  <input type="email"  size={35}  name="email" />
                </div>


                <div>
                  <label htmlFor="message">Message: <span className="required">*</span></label>
                  <textarea cols={50} rows={15} name="message" defaultValue={""} />
                </div>

                



                <div>
                  <button className="submit">Submit</button>

                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>

              </fieldset>
            </form> {/* Form End */}


            


            {/* contact-warning */}
            <div id="message-warning"> Error boy</div>
            {/* contact-success */}
            <div id="message-success">
              <i className="fa fa-check" />Your message was sent, thank you!<br />
            </div>
          </div>
          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                Cristian Ordoñez, MPH, RD<br />
                565 Manchester Pl. <br />
                Morganville, NJ 07751 US<br />
                <span>(732) 912-4457</span>
              </p>
            </div>


{/* This is where the tweet section was, try including blog here when it is done in future */}
            {/* <div className="widget widget_tweets">
              <h4 className="widget-title">Latest Tweets</h4>
              <ul id="twitter">
                <li>
                  <span>
                    This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b><a href="#">2 Days Ago</a></b>
                </li>
                <li>
                  <span>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                    eaque ipsa quae ab illo inventore veritatis et quasi
                    <a href="#">http://t.co/CGIrdxIlI3</a>
                  </span>
                  <b><a href="#">3 Days Ago</a></b>
                </li>
              </ul>
            </div> */}

            
          </aside>
        </div>
      </section>
    
      </React.Fragment>
    )
  }
}

