import React from 'react'
import './Home.css'
import { Link, useNavigate } from 'react-router-dom';
import sidelogo from './logo/homepic.png'
import line from './logo/line.jpg'


function Home() {
    return <>
        <section className="home-section">
            <h1>Welcome to the Online Assessment Platform</h1>
            <div className='about'>
                <div className='text-content'>
                    <p>Elevate Your Expertise with Online Assessments.</p>
                    <Link to='/enroll' className='Enroll'>Enroll Here</Link>
                </div>
                <div className='image'>
                    <img src={sidelogo} alt="Description of image" />
                </div>
            </div>


            <div className='middle'>
                <span>1</span>
                <img className='line' src={line} />
                <span className='important-bg1'>2</span>
                <img className='line' src={line} />
                <span className='important-bg'>3</span>
            </div>

        </section>
    </>
}



export default Home
