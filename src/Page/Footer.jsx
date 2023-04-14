import React from 'react'
const Footer = () => {
  return (
    <section id="footer">
    <div className="container">
      <div className="row text-center text-xs-center text-sm-left text-md-left">
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Contact Us</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Phone:</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>0951068994</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Email:</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>ibrahimkarimeddin@gmail.com</a></li>

          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Find US</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Syria</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Damascus</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Mazzeh</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>Tala Tower</a></li>
            <li><a href="javascript:void();"><i className="fa fa-angle-double-right"></i>8 Floor 84 office</a></li>
          </ul>
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4">
          <h5>Our Section</h5>
          <ul className="list-unstyled quick-links">
            <li><a href="#HomePage"><i className="fa fa-angle-double-right"></i>Home</a></li>
            <li><a href="#Services"><i className="fa fa-angle-double-right"></i>Services</a></li>
            <li><a href="#Gallery"><i className="fa fa-angle-double-right"></i>Gallery</a></li>
            <li><a href="#Location"><i className="fa fa-angle-double-right"></i>Location</a></li>
            <li><a href="#Footer"><i className="fa fa-angle-double-right"></i>Footer</a></li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
          <ul className="list-unstyled list-inline social text-center">
            <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-facebook"></i></a></li>
            <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-twitter"></i></a></li>
            <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-instagram"></i></a></li>
            <li className="list-inline-item"><a href="javascript:void();"><i className="fa fa-google-plus"></i></a></li>
            <li className="list-inline-item"><a href="javascript:void();" target="_blank"><i className="fa fa-envelope"></i></a></li>
          </ul>
        </div>
        <hr/>
      </div>   
    </div>
  </section>
    
  )
}

export default Footer