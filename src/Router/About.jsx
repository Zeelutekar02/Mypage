import React from 'react'
// import Webrouter from './Webrouter'
import './About.css'
import { BsStars } from "react-icons/bs";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { BsShieldCheck } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";

const About = ()=>{
    return(
        <>
        {/* About-section-start */}
                <div>
                    <section id='about-section'>
                        <div className='about-bar'>
                            <h2 id='about-h2'>About</h2>
                            <p className='p'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                        </div>
                        <div className='about-bottom'>
                            <div className='about-row'>
                                {/* About-colum-start */}
                                <div className='about-colum'>
                                    <span className='about-label'>
                                        <BsStars className='star'/>
                                        Built for modern teams
                                    </span>
                                    <h2 className='text'>Ship beautiful products<br></br>at lightning speed</h2>
                                    <p className='p-text'>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut<br></br>fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem<br></br> sequi nesciunt.</p>
                                    <ul className='lists'>
                                        {/* First-icon */}
                                        <li className='list-li'>
                                            <h3 className='icon'>
                                                <BsFillLightningChargeFill />
                                            </h3>
                                            <div>
                                            <h4 className='icon-h4'>Instant Deployment</h4>
                                            <p className='icon-p'>Temporibus autem quibusdam debitis rerum necessitatibus saepe eveniet.</p>
                                            </div>
                                        </li>
                                        {/* Second-icon */}
                                        <li className='list-li'>
                                            <h3 className='icon'>
                                                <BsShieldCheck />
                                            </h3>
                                            <div>
                                            <h4 className='icon-h4'>Enterprise-Grade Security</h4>
                                            <p className='icon-p'>Itaque earum rerum hic tenetur a sapiente delectus reiciendis voluptatibus.</p>
                                            </div>
                                        </li>
                                        {/* Third-icon */}
                                        <li className='list-li'>
                                            <h3 className='icon'>
                                                <BsGraphUpArrow />
                                            </h3>
                                            <div>
                                            <h4 className='icon-h4'>Actionable Analytics</h4>
                                            <p className='icon-p'>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet adipisci.</p>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className='about-btn-group'>
                                        <button className='free'>
                                            Start Free Trial
                                            <GoArrowRight className='about-right'/>
                                        </button>
                                        <button className='video'>
                                            <IoPlayCircleOutline className='play'/>
                                            Watch Demo
                                        </button>
                                    </div>
                                </div>
                                {/* About-colum-end */}
                                <div className='image-colum'>
                                    <div className='image-visual'>
                                        <div className='gradient-top-right'></div>
                                        <div className='gradient-bottom-left'></div>
                                        <div className='frame'>
                                            <div className='img-header'>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        {/* About-section-end */}
        </>
    )
}
export default About