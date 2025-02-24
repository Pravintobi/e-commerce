import React from 'react'
import podi from './assets/podi.png'
import hero from './assets/hero.png'

// import OwlCarousel from 'react-owl-carousel2';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

function Product() {
    return<>
         <section class="featured spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="section-title">
                        <h2>Featured Product</h2>
                    </div>
                    <div class="featured__controls">
                        <ul>
                            <li class="active" data-filter="*">All</li>
                            <li data-filter=".oranges">Spices</li>
                            <li data-filter=".fresh-meat">Oil</li>
                            <li data-filter=".vegetables">Thokku</li>
                            <li data-filter=".fastfood">Malt</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="row featured__filter">
                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="assets/podi.png">
                        <img src={hero} alt="Product" style={{ width: '100%' }} />
                            
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                
                <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fastfood">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" data-setbg="img/featured/feature-2.jpg">
                        <img src={podi} alt="Product" style={{ width: '100%' }} />
                            
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix vegetables fresh-meat">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src={hero} alt="Product" style={{ width: '100%' }} />
                            
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src={podi} alt="Product" style={{ width: '100%' }} />
                            
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src={hero} alt="Product" style={{ width: '100%' }} />
                            
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix oranges fastfood">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src={podi} alt="Product" style={{ width: '100%' }} />
                            
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg" >
                        <img src={hero} alt="Product" style={{ width: '100%' }} />
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button >Add to Cart</button>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                        <img src={podi} alt="Product" style={{ width: '100%' }} />
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">Powder</a></h6>
                            <h5>Rs 45.00</h5>
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
}

export default Product
