import React from 'react'
// import Webrouter from './Webrouter'
import { GoArrowRight } from "react-icons/go";
import './Home.css' 
const Home = ()=>{
    return(
        <>
                {/* Hero-section-start */}
                <div className='section'>
                    <section className='hero'>
                        <div className='row'>
                            {/* colum-start */}
                            <div id='colum'>
                                <p className='p'>Digital Studio</p>
                                <h1 className='section-h1'>Elevate Your Brand<br></br> Through Powerful<br></br> Digital Craft</h1>
                                <p className='paragraph'>Curabitur aliquet quam id dui posuere blandit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Nulla porttitor accumsan tincidunt.</p>
                                <div className='btn-2'>
                                    <button className='section-btn1'>Launch Today</button>
                                    <button className='section-btn2'>Explore Projects 
                                        <GoArrowRight className='arrow'/>
                                    </button> 
                                </div>
                            </div>
                            {/* colum-end */}
                            <div className='image-box'>
                                <img id='image' src='https://www.ronsela.com/wp-content/uploads/2023/06/Creative-Digital-Marketing-Ideas-for-Creative-Success-1.png'></img>
                            </div>
                        </div>
                        <div className='row-bar'>
                            <div className='col'>
                                <div className='box'>
                                    <span className='number'>
                                        280
                                    </span>
                                    <span className='sign'>+</span>
                                    <span className='word'>Campaigns Delivered</span>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box'>
                                    <span className='number'>
                                        98
                                    </span>
                                    <span className='sign'>%</span>
                                    <span className='word'>Retention Rate</span>
                                </div>
                            </div>
                            <div className='col'>
                                <div className='box'>
                                    <span className='number'>
                                        36
                                    </span>
                                    <span className='word'>Creative Experts</span>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>  
                {/* Hero-section-end */}
                
            
        </>
    )
}
export default Home