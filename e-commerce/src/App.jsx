import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Powder from './assets/powder.png'
import Malt from './assets/malt.png'
import Pickle from './assets/pickle1.png'
import podi from './assets/podi.png'
import Topbar from './Topbar'
import Product from './product'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
      <Topbar/>
      <section className="service_section layout_padding">
        <div className="container">
          <h2 className="custom_heading">Our Services</h2>
          <p className="custom_heading-text">
            There are many variations of Items of Vibishri , but
            the majority have
          </p>
          <div className="layout_padding2">
            <div className="card-deck">
              <div className="card">
                <img className="card-img-top" src={Powder} alt="Powder" />
                <div className="card-body">
                  <h5 className="card-title">Podi Items</h5>
                  <p className="card-text">
                    "Made from roasted lentils, spices, and herbs, it's a versatile condiment that can be mixed with oil or ghee and served with rice, idli, or dosa.
                    Our range of Podi includes varieties like Idli Podi, Paruppu Podi, and Karuveppilai Podi, each carefully crafted to bring authentic taste to your kitchen. P
                    erfect for elevating simple dishes with a spicy, aromatic touch."
                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={Pickle} alt="Grapes" />
                <div className="card-body">
                  <h5 className="card-title">Pickle & Thokku</h5>
                  <p className="card-text">
                    "Explore the tangy and spicy world of our Indian Pickles, each jar packed with traditional flavors that promise to ignite your taste buds and transform your meals.
                    Our pickles are not just condiments; they are a celebration of rich, culinary heritage, made with time-honored recipes and the freshest ingredients".

                  </p>
                </div>
              </div>
              <div className="card">
                <img className="card-img-top" src={Malt} alt="Guava" />
                <div className="card-body">
                  <h5 className="card-title">Malt Items</h5>
                  <p className="card-text">
                    "Discover the wholesome goodness of our Malt products, crafted to provide a nutritious and delicious boost to your daily diet.
                    Made from high-quality grains and enriched with essential vitamins and minerals,
                    our malts are perfect for enhancing energy and promoting overall well-being".
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <a href="#" className="custom_dark-btn">
              Read More
            </a>
          </div>
        </div>
      </section>
      <section class="fruit_section layout_padding-top">
        <div class="container">
          <h2 class="custom_heading">Fresh Fruits</h2>
          <p class="custom_heading-text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have
          </p>
          <div class="row layout_padding2">
            <div class="col-md-8">
              <div class="fruit_detail-box">
                <h3 style={{color: "#ff1e00cf"}}>
                  Pirandai Sadha Podi
                </h3>
                <p class="mt-4 mb-5">
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be
                </p>
                <div>
                  <a href="" class="custom_dark-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
              <div class="fruit_img-box d-flex justify-content-center align-items-center">
                <img src={podi} alt="" class="" width="200px" />
              </div>
            </div>
          </div>
          <div class="row layout_padding2">
            <div class="col-md-8">
              <div class="fruit_detail-box">
                <h3 style={{color: "#ff1e00cf"}}>
                  Best Fresh Grapes
                </h3>
                <p class="mt-4 mb-5">
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be
                </p>
                <div>
                  <a href="" class="custom_dark-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
              <div class="fruit_img-box d-flex justify-content-center ">
                <img  src={podi} alt="" class="" width="200px" />
              </div>
            </div>
          </div>
          <div class="row layout_padding2-top layout_padding-bottom">
            <div class="col-md-8">
              <div class="fruit_detail-box">
                <h3 style={{color: "#ff1e00cf"}}>
                  Best Fresh Gauva
                </h3>
                <p class="mt-4 mb-5">
                  but the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of Lorem
                  Ipsum, you need to be
                </p>
                <div>
                  <a href="" class="custom_dark-btn">
                    Buy Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4 d-flex justify-content-center align-items-center">
              <div class="fruit_img-box d-flex justify-content-center align-items-center">
                <img src={podi} alt="" class="" width="200px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Product/>
      <Footer/>
      
    </>


  );
}

export default App
