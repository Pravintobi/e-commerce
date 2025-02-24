import React from 'react'
import logo from './assets/logo.webp'
import hero from './assets/hero.png'
import podi from './assets/podi.png'
import side2 from './assets/pickle1.png'
import side4 from './assets/powder.png'
function Topbar() {
  return <>
    <div class="hero_area">

      <header class="header_section">
        <div class="Container">
          <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
            <a class="navbar-brand" href="index.html">
              <img src={logo} alt="" width="20%" /><span>
                VS Homemade
              </span>
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <div class="d-flex ml-auto flex-column flex-lg-row align-items-center">
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="fruit.html"> Fruits</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="service.html"> Services </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="contact.html">Contacts us</a>
                  </li>
                </ul>

              </div>

            </div>
          </nav>
        </div>
      </header>

      <section class=" slider_section position-relative">
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="slider_item-box">
                <div class="slider_item-container">
                  <div class="container">
                    <div class="row">
                      <div class="col-md-6">
                        <div class="slider_item-detail">
                          <div>
                            <h1>
                              Every Bites.. <br />
                              Feels like Home..!
                            </h1>
                            <br />
                            <br />
                            <p>
                              Experience the authentic taste of homemade with VibiShri! Our carefully curated selection includes:
                              <br />
                              &nbsp;&nbsp;&nbsp;• Handcrafted pickles
                              <br />
                              &nbsp;&nbsp;&nbsp;• Cold-pressed oils
                              <br />
                              &nbsp;&nbsp;&nbsp;• Artisanal spice powders
                              <br />
                              <br />
                              &nbsp;&nbsp; Made with love, to nourish your family.
                            </p>
                            <br />

                            <div class="d-flex">
                              <a href="" class="text-uppercase custom_orange-btn mr-3">
                                Shop Now
                              </a>
                            </div>


                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 slides-container">
                        <div className="slider_img-box">
                          <div className="slides">
                            <img src={hero} alt="Hero" />
                          </div>
                          <div className="slides">
                            <img src={podi} alt="Podi" />
                          </div>
                          <div className="slides">
                            <img src={hero} alt="Hero" />
                          </div>
                          <div className="slides">
                            <img src={podi} alt="Podi" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <div class="carousel-item">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div class="d-flex">
                            <a href="" class="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href="" class="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt="" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="slider_item-box">
              <div class="slider_item-container">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="slider_item-detail">
                        <div>
                          <h1>
                            Welcome to <br />
                            Our Fruits Shop
                          </h1>
                          <p>
                            There are many variations of passages of Lorem
                            Ipsum available, but the majority have suffered
                            alteration in some form, by injected humour, or
                            randomised words which don't look even slightly
                            believable.
                          </p>
                          <div class="d-flex">
                            <a href="" class="text-uppercase custom_orange-btn mr-3">
                              Shop Now
                            </a>
                            <a href="" class="text-uppercase custom_dark-btn">
                              Contact Us
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="slider_img-box">
                        <div>
                          <img src="images/slide-img.png" alt="" class="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          </div>
          {/* <div class="custom_carousel-control">
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="sr-only">Next</span>
          </a>
        </div> */}
        </div>

      </section>


    </div>
  </>
}

export default Topbar
