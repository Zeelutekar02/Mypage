
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Card from 'react-bootstrap/Card';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
// import Badge from 'react-bootstrap/Badge';
// import { MdOutlineLaptop } from "react-icons/md";
// import { FaArrowRight } from "react-icons/fa";
// import { BsBriefcaseFill } from "react-icons/bs";
// import { BsPalette } from "react-icons/bs";
// import { BsHeartPulse } from "react-icons/bs";
// import { IoGlobeOutline } from "react-icons/io5";
// import { BsDiagram3 } from "react-icons/bs";
// import { BsMegaphone } from "react-icons/bs";
// import { BsGraphUpArrow } from "react-icons/bs";
// import { IoCameraOutline } from "react-icons/io5";
// import { FaMusic } from "react-icons/fa";
// import { GoGear } from "react-icons/go";
// import { BsJournalText } from "react-icons/bs";
// import { BsCupHot } from "react-icons/bs";
// import { BsTrophy } from "react-icons/bs";
// import { BsPen } from "react-icons/bs";
// import { BsBodyText } from "react-icons/bs";
// import { BsTree } from "react-icons/bs";
// import { AiOutlineMessage } from "react-icons/ai";
// import { FaCirclePlay } from "react-icons/fa6";
// import { FaPlayCircle } from "react-icons/fa";
// import { FaStar } from "react-icons/fa";
// import { FaUserFriends } from "react-icons/fa";
// import { BsFillAwardFill } from "react-icons/bs";
// import { FaArrowRightLong } from "react-icons/fa6";
// import { FaLinkedin } from "react-icons/fa6";
// import { RiTwitterXLine } from "react-icons/ri";
// import { FaGithub } from "react-icons/fa";
// import { FaDribbble } from "react-icons/fa";
// import { FaBehance } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaFacebook } from "react-icons/fa";
// import { FaStarHalfAlt } from "react-icons/fa";

// const teachers = [
//   {
//     title: "FRONTEND ENGINEERING",
//     name: "Laura Mitchell",
//     rating: "4.7",
//     learners: "2.4k",
//     score: "4.7",
//     image:
//       "https://bootstrapmade.com/content/demo/Academica/assets/img/education/teacher-3.webp",
//     lessons: "22 Lessons",
//     socials: [<FaLinkedin  />, <RiTwitterXLine />],
//   },
//   {
//     title: "MACHINE LEARNING",
//     name: "James Nakamura",
//     rating: "5.0",
//     learners: "4.1k",
//     score: "5.0",
//     image:
//       "https://bootstrapmade.com/content/demo/Academica/assets/img/education/teacher-8.webp",
//     socials: [<FaGithub  />, <FaLinkedin  />],
//   },
//   {
//     title: "VISUAL DESIGN",
//     name: "Priya Kapoor",
//     rating: "4.5",
//     learners: "1.6k",
//     score: "4.5",
//     image:
//       "https://bootstrapmade.com/content/demo/Academica/assets/img/education/teacher-5.webp",
//     socials: [<FaDribbble />, <FaBehance  />],
//   },
//   {
//     title: "GROWTH STRATEGY",
//     name: "Ethan Caldwell",
//     rating: "4.8",
//     learners: "3.2k",
//     score: "4.8",
//     image:
//       "https://bootstrapmade.com/content/demo/Academica/assets/img/education/teacher-10.webp",
//     socials: [<FaInstagram  />, <FaFacebook  />],
//   },
// ];
// const Reactweb = () =>{
//     return(
//         <>  

//     <header className="header-wrapper">
//       <div className="header">
//         <div className="logo">Academica</div>

//         <nav className="nav">
//           <a href="#" className="active">Home</a>
//           <a href="#" className='menu-class'>About</a>
//           <a href="#" className='menu-class'>Courses</a>
//           <a href="#" className='menu-class'>Instructors</a>
//           <a href="#" className='menu-class'>Pricing</a>
//           <a href="#" className='menu-class'>More Pages ▾</a>
//           <a href="#" className='menu-class'>Dropdown ▾</a>
//           <a href="#" className='menu-class'>Contact</a>
//         </nav>

//         <button className="btn">Get Started</button>
//       </div>
//     </header>

//     {/* Section-start */}
//           <section className='hero-section'>
//             <div className='container'>
//               <div className='row-1'>
//                 <div className='colum'>
//                   <div className='hero-intro'>
//                     <div className='box-class'>
//                         <i class="fa-solid fa-graduation-cap"></i>
//                         <span>World-Class Online Education</span>
//                     </div>
//                     <h1 className='h1-tag'>Elevate Your Skills with<br></br>
//                         Expert-Led Online<br></br>
//                     Courses</h1>
//                     <p className='p-tag'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut<br></br>aliquip ex ea commodo consequat. Learn at your own pace and advance<br></br>your career from anywhere.</p>
//                     <div className='btn-class'>
//                         <a className='arrow'>
//                             Explore Courses
//                               <i class="fa-solid fa-arrow-right"></i>
//                         </a>
//                        <a className='watch-btn'>
//                           <span className='play-btn'>
//                               <i class="fa-solid fa-play" id='play-icon'></i>
//                           </span>
//                           Watch Demo
//                        </a>
//                     </div>
//                   </div>
//                 </div>
//                 {/* Three-boxes */}
//     {/* <div className="stats-container">
//       <div className="stats-box">
//         <div className="stat">
//           <span className='stat-no'>50000</span>
//           <span className='sign'>+</span>
//           <p className='stat-p'>STUDENTS ENROLLED</p>
//         </div>

//         <div className="divider"></div>

//         <div className="stat">
//           <span className='stat-no'>1200</span>
//           <span className='sign'>+</span>
//           <p className='stat-p'>EXPERT COURSES</p>
//         </div>

//         <div className="divider"></div>

//         <div className="stat">
//           <span className='stat-no'>98</span>
//           <span className='sign'>%</span>
//           <p className='stat-p'>SUCCESS RATE</p>
//         </div>
//       </div>
//     </div>
//   */}


//     <div className="stats-wrapper">
//       <div className="stats-box">
//         <div className="stat-item">
//           <span className='stat-no'>50000</span>
//           <span className='sign'>+</span>
//           <p className='stat-p'>STUDENTS ENROLLED</p>
//         </div>

//         <div className="divider"></div>

//         <div className="stat-item">
//           <span className='stat-no'>1200</span>
//           <span className='sign'>+</span>
//           <p className='stat-p'>EXPERT COURSES</p>
//         </div>

//         <div className="divider"></div>

//         <div className="stat-item">
//           <span className='stat-no'>98</span>
//           <span className='sign'>%</span>
//           <p className='stat-p'>SUCCESS RATE</p>
//         </div>
//       </div>
//     </div>
//     </div>
//     </div>

//     <div className='feature'>
//       <div className='feature-icon'>
//         <i class="fa-solid fa-certificate" id='all-icon'></i>
//         <span className='icons'>Certified Programs</span>
//       </div>
//       <div className='dot'></div>
//       <div className='feature-icon'>
//         <i class="fa-solid fa-infinity" id='all-icon'></i>
//         <span className='icons'>Lifetime Access</span>
//       </div>
//       <div className='dot'></div>
//       <div className='feature-icon'>
//         <i class="fa-regular fa-id-badge" id='all-icon'></i>
//         <span className='icons'>Expert Instructors</span>
//       </div>
//         <div className='dot'></div>
//         <div className='feature-icon'>
//           <i class="fa-solid fa-mobile-screen-button" id='all-icon'></i>
//           <span className='icons'>Learn Anywhere</span>
//         </div>    
//     </div>
// </section>
//     {/* Section-end */}
//       {/* Feature-courses-section-start */}
//           <section className='feature-courses'>
//             <div className='section-title'>
//               <h2 className='courses'>Featured Courses</h2>
//               <p className='courses-p'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//             </div>
//             {/* First-box */}
//                   <div className='main-box'>
//                       <div className='row-box'>
//                           <div className='program-box'>
//                               <div className='program-card'>
//                                   <div className='col-md-5'>
//                                       <div className='program-img'>
//                                           <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/education/courses-3.webp' id='images'></img>
//                                           <span className='span'>Featured</span> 
//                                       </div>
//                                   </div>
//                                       <div className='col-md-7'>
//                                         <div className='text-in'>
//                                           <div className='program-icon'>
//                                             <span className='program-work'>
//                                                 <i class="fa-solid fa-chart-simple"></i>
//                                                 Beginner
//                                             </span>
//                                             <span className='weeks'>
//                                                 <i class="fa-regular fa-clock"></i>
//                                                 8 Weeks
//                                             </span>
//                                           </div>
//                                             <h3 className='h3-tag'>
//                                               Mastering Social Media Strategy
//                                             </h3>
//                                             <p className='p-tag'>
//                                                 Quis autem vel eum iure reprehenderit qui in ea<br></br>voluptate velit esse quam nihil molestiae<br></br>consequatur.
//                                             </p>
//                                             <div className='person'>
//                                                 <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/person/person-f-5.webp' id='person-img'></img>
//                                                 <div>
//                                                   <h5 className='person-name'>Angela Pierce</h5>
//                                                   <h5 className='person-specialist'>Marketing Specialist</h5>
//                                                 </div>
//                                             </div>
//                                             <div className='program-footer'>
//                                                 <div className='program-rank'>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star-half-stroke" id='half-star'></i>
//                                                     <span className='review'>4.5</span>
//                                                 </div>
//                                                 <div className='join-person'>
//                                                     <i class="fa-solid fa-user-group" id='join-people'></i>
//                                                     412 learners
//                                                 </div>
//                                             </div>
//                                             <div className='course-doller'>
//                                                 <button className='button'>
//                                                     Join Courses
//                                                   <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
//                                                 </button>
//                                                 <span className='cost'>$149</span>
//                                             </div>
//                                         </div>
//                                       </div>
//                               </div>
//                           </div>
//                           {/* Second-box */}
//                           <div className='program-box'>
//                               <div className='program-card'>
//                                   <div className='col-md-5'>
//                                       <div className='program-img'>
//                                           <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/education/courses-8.webp' id='images'></img>
//                                           <span style={{backgroundColor:'#e28307'}} className='span'>New</span> 
//                                       </div>
//                                   </div>
//                                       <div className='col-md-7'>
//                                         <div className='text-in'>
//                                           <div className='program-icon'>
//                                             <span className='program-work' style={{backgroundColor:'#fac989', color:'#e28307'}}>
//                                                 <i class="fa-solid fa-chart-simple"></i>
//                                                 Beginner
//                                             </span>
//                                             <span className='weeks'>
//                                                 <i class="fa-regular fa-clock"></i>
//                                                 8 Weeks
//                                             </span>
//                                           </div>
//                                             <h3 className='h3-tag'>
//                                               Mastering Social Media Strategy
//                                             </h3>
//                                             <p className='p-tag'>
//                                                 Quis autem vel eum iure reprehenderit qui in ea<br></br>voluptate velit esse quam nihil molestiae<br></br>consequatur.
//                                             </p>
//                                             <div className='person'>
//                                                 <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/person/person-m-3.webp' id='person-img'></img>
//                                                 <div>
//                                                   <h5 className='person-name'>Angela Pierce</h5>
//                                                   <h5 className='person-specialist'>Marketing Specialist</h5>
//                                                 </div>
//                                             </div>
//                                             <div className='program-footer'>
//                                                 <div className='program-rank'>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star-half-stroke" id='half-star'></i>
//                                                     <span className='review'>4.5</span>
//                                                 </div>
//                                                 <div className='join-person'>
//                                                     <i class="fa-solid fa-user-group" id='join-people'></i>
//                                                     412 learners
//                                                 </div>
//                                             </div>
//                                             <div className='course-doller'>
//                                                 <button className='button' style={{backgroundColor:'#e28307', borderColor:'#e28307'}}>
//                                                     Join Courses
//                                                   <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
//                                                 </button>
//                                                 <span className='cost' style={{color:'#e28307'}}>$89</span>
//                                             </div>
//                                         </div>
//                                       </div>
//                               </div>
//                           </div>
//                           {/* Third-box */}
//                           <div className='program-box'>
//                               <div className='program-card'>
//                                   <div className='col-md-5'>
//                                       <div className='program-img'>
//                                           <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/education/education-8.webp' id='images'></img>
//                                           <span className='span' style={{backgroundColor:'royalblue'}}>Certificate</span> 
//                                       </div>
//                                   </div>
//                                       <div className='col-md-7'>
//                                         <div className='text-in'>
//                                           <div className='program-icon'>
//                                             <span className='program-work' style={{backgroundColor:'#9fb6fa', color:'royalblue'}}>
//                                                 <i class="fa-solid fa-chart-simple"></i>
//                                                 Beginner
//                                             </span>
//                                             <span className='weeks'>
//                                                 <i class="fa-regular fa-clock"></i>
//                                                 8 Weeks
//                                             </span>
//                                           </div>
//                                             <h3 className='h3-tag'>
//                                               Mastering Social Media Strategy
//                                             </h3>
//                                             <p className='p-tag'>
//                                                 Quis autem vel eum iure reprehenderit qui in ea<br></br>voluptate velit esse quam nihil molestiae<br></br>consequatur.
//                                             </p>
//                                             <div className='person'>
//                                                 <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/person/person-f-9.webp' id='person-img'></img>
//                                                 <div>
//                                                   <h5 className='person-name'>Angela Pierce</h5>
//                                                   <h5 className='person-specialist'>Marketing Specialist</h5>
//                                                 </div>
//                                             </div>
//                                             <div className='program-footer'>
//                                                 <div className='program-rank'>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star-half-stroke" id='half-star'></i>
//                                                     <span className='review'>4.5</span>
//                                                 </div>
//                                                 <div className='join-person'>
//                                                     <i class="fa-solid fa-user-group" id='join-people'></i>
//                                                     412 learners
//                                                 </div>
//                                             </div>
//                                             <div className='course-doller'>
//                                                 <button className='button' style={{backgroundColor:'royalblue', borderColor:'royalblue'}}>
//                                                     Join Courses
//                                                   <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
//                                                 </button>
//                                                 <span className='cost' style={{color:'royalblue'}}>$149</span>
//                                             </div>
//                                         </div>
//                                       </div>
//                               </div>
//                           </div>
//                           {/* Forth-box */}
//                           <div className='program-box'>
//                               <div className='program-card'>
//                                   <div className='col-md-5'>
//                                       <div className='program-img'>
//                                           <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/education/activities-6.webp' id='images'></img>
//                                           <span className='span' style={{backgroundColor:'#e21ae2'}}>Popular</span> 
//                                       </div>
//                                   </div>
//                                       <div className='col-md-7'>
//                                         <div className='text-in'>
//                                           <div className='program-icon'>
//                                             <span className='program-work' style={{backgroundColor:'#f8acf8', color:'#e21ae2'}}>
//                                                 <i class="fa-solid fa-chart-simple"></i>
//                                                 Beginner
//                                             </span>
//                                             <span className='weeks'>
//                                                 <i class="fa-regular fa-clock"></i>
//                                                 8 Weeks
//                                             </span>
//                                           </div>
//                                             <h3 className='h3-tag'>
//                                               Mastering Social Media Strategy
//                                             </h3>
//                                             <p className='p-tag'>
//                                                 Quis autem vel eum iure reprehenderit qui in ea<br></br>voluptate velit esse quam nihil molestiae<br></br>consequatur.
//                                             </p>
//                                             <div className='person'>
//                                                 <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/person/person-m-9.webp' id='person-img'></img>
//                                                 <div>
//                                                   <h5 className='person-name'>Angela Pierce</h5>
//                                                   <h5 className='person-specialist'>Marketing Specialist</h5>
//                                                 </div>
//                                             </div>
//                                             <div className='program-footer'>
//                                                 <div className='program-rank'>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star-half-stroke" id='half-star'></i>
//                                                     <span className='review'>4.5</span>
//                                                 </div>
//                                                 <div className='join-person'>
//                                                     <i class="fa-solid fa-user-group" id='join-people'></i>
//                                                     412 learners
//                                                 </div>
//                                             </div>
//                                             <div className='course-doller'>
//                                                 <button className='button' style={{backgroundColor:'#e21ae2', borderColor:'#e21ae2'}}>
//                                                     Join Courses
//                                                   <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
//                                                 </button>
//                                                 <span className='cost' style={{color:'#e21ae2'}}>$199</span>
//                                             </div>
//                                         </div>
//                                       </div>
//                               </div>
//                           </div>
//                           {/* Fifth-box */}
//                           <div className='program-box'>
//                               <div className='program-card'>
//                                   <div className='col-md-5'>
//                                       <div className='program-img'>
//                                           <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/education/courses-12.webp' id='images'></img>
//                                           <span className='span' style={{backgroundColor:'darkorchid'}}>Certificate</span> 
//                                       </div>
//                                   </div>
//                                       <div className='col-md-7'>
//                                         <div className='text-in'>
//                                           <div className='program-icon'>
//                                             <span className='program-work' style={{backgroundColor:'#da9ef8', color:'#9932CC'}}>
//                                                 <i class="fa-solid fa-chart-simple"></i>
//                                                 Beginner
//                                             </span>
//                                             <span className='weeks'>
//                                                 <i class="fa-regular fa-clock"></i>
//                                                 8 Weeks
//                                             </span>
//                                           </div>
//                                             <h3 className='h3-tag'>
//                                               Mastering Social Media Strategy
//                                             </h3>
//                                             <p className='p-tag'>
//                                                 Quis autem vel eum iure reprehenderit qui in ea<br></br>voluptate velit esse quam nihil molestiae<br></br>consequatur.
//                                             </p>
//                                             <div className='person'>
//                                                 <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/person/person-f-14.webp' id='person-img'></img>
//                                                 <div>
//                                                   <h5 className='person-name'>Angela Pierce</h5>
//                                                   <h5 className='person-specialist'>Marketing Specialist</h5>
//                                                 </div>
//                                             </div>
//                                             <div className='program-footer'>
//                                                 <div className='program-rank'>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star-half-stroke" id='half-star'></i>
//                                                     <span className='review'>4.5</span>
//                                                 </div>
//                                                 <div className='join-person'>
//                                                     <i class="fa-solid fa-user-group" id='join-people'></i>
//                                                     412 learners
//                                                 </div>
//                                             </div>
//                                             <div className='course-doller'>
//                                                 <button className='button' style={{backgroundColor:'#9932CC', borderColor:'#9932CC'}}>
//                                                     Join Courses
//                                                   <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
//                                                 </button>
//                                                 <span className='cost' style={{color:'#9932CC'}}>$129</span>
//                                             </div>
//                                         </div>
//                                       </div>
//                               </div>
//                           </div>
//                           {/* Sixth-box */}
//                           <div className='program-box'>
//                               <div className='program-card'>
//                                   <div className='col-md-5'>
//                                       <div className='program-img'>
//                                           <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/education/teacher-2.webp' id='images'></img>
//                                           <span className='span' style={{backgroundColor:'crimson'}}>New</span> 
//                                       </div>
//                                   </div>
//                                       <div className='col-md-7'>
//                                         <div className='text-in'>
//                                           <div className='program-icon'>
//                                             <span className='program-work' style={{backgroundColor:'#fc9db0', color:'crimson'}}>
//                                                 <i class="fa-solid fa-chart-simple"></i>
//                                                 Beginner
//                                             </span>
//                                             <span className='weeks'>
//                                                 <i class="fa-regular fa-clock"></i>
//                                                 8 Weeks
//                                             </span>
//                                           </div>
//                                             <h3 className='h3-tag'>
//                                               Mastering Social Media Strategy
//                                             </h3>
//                                             <p className='p-tag'>
//                                                 Quis autem vel eum iure reprehenderit qui in ea<br></br>voluptate velit esse quam nihil molestiae<br></br>consequatur.
//                                             </p>
//                                             <div className='person'>
//                                                 <img src='https://bootstrapmade.com/content/demo/Academica/assets/img/person/person-m-13.webp' id='person-img'></img>
//                                                 <div>
//                                                   <h5 className='person-name'>Angela Pierce</h5>
//                                                   <h5 className='person-specialist'>Marketing Specialist</h5>
//                                                 </div>
//                                             </div>
//                                             <div className='program-footer'>
//                                                 <div className='program-rank'>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star" id='star'></i>
//                                                     <i class="fa-solid fa-star-half-stroke" id='half-star'></i>
//                                                     <span className='review'>4.5</span>
//                                                 </div>
//                                                 <div className='join-person'>
//                                                     <i class="fa-solid fa-user-group" id='join-people'></i>
//                                                     412 learners
//                                                 </div>
//                                             </div>
//                                             <div className='course-doller'>
//                                                 <button className='button' style={{backgroundColor:'crimson', borderColor:'crimson'}}>
//                                                     Join Courses
//                                                   <i class="fa-solid fa-arrow-right" id='right-arrow'></i>
//                                                 </button>
//                                                 <span className='cost' style={{color:'crimson'}}>$99</span>
//                                             </div>
//                                         </div>
//                                       </div>
//                               </div>
//                           </div>
//                       </div>
//                         <div className='all-programs' style={{margin:'60px 0px 0px 0px', textAlign:'center'}}>
//                             <h5 id='all-program'>Explore All Programs
//                               <i class="fa-solid fa-arrow-right"></i>
//                             </h5>
//                         </div> 
//                   </div>
//           </section>
//       {/* Feature-courses-section-end */}

//       {/* Course-categories-section-start */}
//         <section className='course-section'>
//             <div className='course-container'>
//               <h2 className='course-h2'>
//                   Course Categories
//               </h2>
//               <p className='course-p'>
//                 Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velits
//               </p>
//             </div>
//             <div className='categories-box'>
//               <div className='categories-row'>
//                 {/* 1-computer-science-box */}
//                 <div className='categories-colum'>
//                   <a className='categories-title'>
//                     <div className='categories-icon'>
//                       <MdOutlineLaptop className='laptop'/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Computer Science</h5>
//                       <span className='hours'>24 courses</span>
//                     </div>
//                     <div className='icon-arrow'>
//                       <FaArrowRight  className='right'/>
//                     </div>
//                   </a>
//                 </div>

//                 {/* 2-business-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-2'>
//                     <div className='categories-icon' style={{backgroundColor:'#0d8a67'}}>
//                       <BsBriefcaseFill className='briefcase' style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Business</h5>
//                       <span className='hours'>18 courses</span>
//                     </div>
//                     <div className='icon-arrow-2'>
//                       <FaArrowRight  className='right-2'/>
//                     </div>
//                   </a>
//                 </div>

//                 {/* 3-Design-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-3'>
//                     <div className='categories-icon' style={{backgroundColor:'#6d28d9'}}>
//                       <BsPalette className='palette' style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Design</h5>
//                       <span className='hours'>15 courses</span>
//                     </div>
//                     <div className='icon-arrow-3'>
//                       <FaArrowRight  className='right-3'/>
//                     </div>
//                   </a>
//                 </div>

//                 {/* 4-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-4'>
//                     <div className='categories-icon' style={{backgroundColor:'#dc2626'}}>
//                       <BsHeartPulse style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Health & Medical</h5>
//                       <span className='hours'>12 courses</span>
//                     </div>
//                     <div className='icon-arrow-4'>
//                       <FaArrowRight  className='right-4'/>
//                     </div>
//                   </a>
//                 </div>

//                 {/* 5-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-5'>
//                     <div className='categories-icon' style={{backgroundColor:'#ea580c'}}>
//                       <IoGlobeOutline  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Language</h5>
//                       <span className='hours'>21 courses</span>
//                     </div>
//                     <div className='icon-arrow-5'>
//                       <FaArrowRight  className='right-5'/>
//                     </div>
//                   </a>
//                 </div>

//                 {/* 6-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-6'>
//                     <div className='categories-icon' style={{backgroundColor:'#0891b2'}}>
//                       <BsDiagram3  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Science</h5>
//                       <span className='hours'>16 courses</span>
//                     </div>
//                     <div className='icon-arrow-6'>
//                       <FaArrowRight  className='right-6'/>
//                     </div>
//                   </a>
//                 </div>

//                 {/* 7-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-7'>
//                     <div className='categories-icon' style={{backgroundColor:'#db2777'}}>
//                       <BsMegaphone  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Marketing</h5>
//                       <span className='hours'>19 courses</span>
//                     </div>
//                     <div className='icon-arrow-7'>
//                       <FaArrowRight  className='right-7'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 8-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-8'>
//                     <div className='categories-icon' style={{backgroundColor:'#047857'}}>
//                       <BsGraphUpArrow  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Finance</h5>
//                       <span className='hours'>14 courses</span>
//                     </div>
//                     <div className='icon-arrow-8'>
//                       <FaArrowRight  className='right-8'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 9-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-9'>
//                     <div className='categories-icon' style={{backgroundColor:'#475569'}}>
//                       <IoCameraOutline  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Photography</h5>
//                       <span className='hours'>11 courses</span>
//                     </div>
//                     <div className='icon-arrow-9'>
//                       <FaArrowRight  className='right-9'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 10-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-10'>
//                     <div className='categories-icon' style={{backgroundColor:'#5b21b6'}}>
//                       <FaMusic  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Music</h5>
//                       <span className='hours'>13 courses</span>
//                     </div>
//                     <div className='icon-arrow-10'>
//                       <FaArrowRight  className='right-10'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 11-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-11'>
//                     <div className='categories-icon' style={{backgroundColor:'#4b5563'}}>
//                       <GoGear style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Engineering</h5>
//                       <span className='hours'>22 courses</span>
//                     </div>
//                     <div className='icon-arrow-11'>
//                       <FaArrowRight  className='right-11'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 12-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-12'>
//                     <div className='categories-icon' style={{backgroundColor:'#d97706'}}>
//                       <BsJournalText  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Law & Legal</h5>
//                       <span className='hours'>9 courses</span>
//                     </div>
//                     <div className='icon-arrow-12'>
//                       <FaArrowRight  className='right-12'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 13-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-13'>
//                     <div className='categories-icon' style={{backgroundColor:'#e11d48'}}>
//                       <BsCupHot  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Culinary Arts</h5>
//                       <span className='hours'>8 courses</span>
//                     </div>
//                     <div className='icon-arrow-13'>
//                       <FaArrowRight  className='right-13'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 14-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-14'>
//                     <div className='categories-icon' style={{backgroundColor:'#65a30d'}}>
//                       <BsTrophy  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Sports & Fitness</h5>
//                       <span className='hours'>17 Courses</span>
//                     </div>
//                     <div className='icon-arrow-14'>
//                       <FaArrowRight  className='right-14'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 15-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-15'>
//                     <div className='categories-icon' style={{backgroundColor:'#4338ca'}}>
//                       <BsPen  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Writing</h5>
//                       <span className='hours'>10 courses</span>
//                     </div>
//                     <div className='icon-arrow-15'>
//                       <FaArrowRight  className='right-15'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 16-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-16'>
//                     <div className='categories-icon' style={{backgroundColor:'#0d9488'}}>
//                       <BsBodyText  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Psychology</h5>
//                       <span className='hours'>12 courses</span>
//                     </div>
//                     <div className='icon-arrow-16'>
//                       <FaArrowRight  className='right-16'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 17-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-17'>
//                     <div className='categories-icon' style={{backgroundColor:'#16a34a'}}>
//                       <BsTree  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Environment</h5>
//                       <span className='hours'>7 courses</span>
//                     </div>
//                     <div className='icon-arrow-17'>
//                       <FaArrowRight  className='right-17'/>    
//                     </div>
//                   </a>
//                 </div>

//                 {/* 18-health-&-medial-box */}
//                     <div className='categories-colum'>
//                   <a className='categories-title-18'>
//                     <div className='categories-icon' style={{backgroundColor:'#0284c7'}}>
//                       <AiOutlineMessage  style={{color:'#ffffff', fontSize:'26px'}}/>
//                     </div>
//                     <div className='class'>
//                       <h5 id='categories-text'>Communication</h5>
//                       <span className='hours'>15 courses</span>
//                     </div>
//                     <div className='icon-arrow-18'>
//                       <FaArrowRight  className='right-18'/>    
//                     </div>
//                   </a>
//                 </div>
//               </div>
//             </div>
//         </section>
//       {/* Course-categories-section-end */}

//       {/* Featured Instructors-section-start */}
//           <section className='instructor-section'>
//             <div className='instructor-title'>
//               <h2 id='instructor-h2'>
//                 Featured Instructors
//               </h2>
//               <p className='instructor-p'>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
//             </div>
//       <div style={{ background: "#f5f5f5", padding: "60px 0" }}>
//       <Container>
//         <Row className="g-4">
//           {teachers.map((item, index) => (
//             <Col lg={6} key={index}>
//               <Card
//                 className="border-0 overflow-hidden"
//                 style={{
//                   width:"636px",
//                   height:"364px",
//                   borderRadius: "20px",
//                   background: "#fff",
//                 }}
//               >
//                 <Row className="g-0">
                  
//                   {/* IMAGE */}
//                   <Col md={5}>
//                     <div style={{ position: "relative", height: "100%" }}>
//                       <img
//                         src={item.image}
//                         alt=""
//                         style={{
//                           width: "100%",
//                           height: "100%",
//                           objectFit: "cover",
//                           minHeight: "340px",
//                         }}
//                       />

//                       {item.lessons && (
//                         <Button
//                           style={{
//                             position: "absolute",
//                             bottom: "16px",
//                             left: "50%",
//                             backgroundColor:
//                               "#198754",
//                               color:"#ffffff",
//                             transform: 
//                             "translateX(-50%) translateY(10px)",
//                             border: "none",
//                             borderRadius: "50px",
//                             padding: "8px 18px",
//                             fontWeight: "600",
//                             fontSize:"13px",
//                             display:"inline-flex",
//                             alignItems:"center",
//                             boxShadow:"0 4px 15px #198754",
//                             opacity:"0",
//                           }}
//                         >
//                           <FaPlayCircle className="me-2" />
//                           {item.lessons}
//                         </Button>
//                       )}
//                     </div>
//                   </Col>

//                   {/* CONTENT */}
//                   <Col md={7}>
//                     <Card.Body
//                       style={{
//                         padding: "32px 28px",
//                         display: "flex",
//                         flexDirection: "column",
//                         height: "100%",
//                       }}
//                     >
//                       {/* TAG */}
//                       <div
//                         style={{
//                           display:"inline-flex",
//                           alignItems:"center",
//                           padding:"6px 14px",
//                           borderRadius:"50px",
//                           fontSize:"12px",
//                           fontWeight:"600",
//                           textTransform:"uppercase",
//                           letterSpacing:"1px",
//                           backgroundColor:"#aae3c9",
//                           color:"#198754",
//                           width:"fit-content",
//                           marginBottom:"14px"
//                         }}
//                       >
//                         {item.title}
//                       </div>

//                       {/* NAME */}
//                       <h3
//                         style={{
//                           margin:"0 0 10px 0",
//                           fontSize:"22px",
//                           fontWeight:"800",
//                           color:"#1a1a1a",
//                           letterSpacing:"-0.5px",
//                           lineHeight:"1.2"
//                         }}
//                       >
//                         {item.name}
//                       </h3>

//                       {/* RATING */}
//                       <div className="d-flex align-items-center gap-2 mt-2">
//                         <div style={{ color: "#f4b400" }}>
//                           <FaStar />
//                           <FaStar />
//                           <FaStar />
//                           <FaStar />
//                           <FaStarHalfAlt />
//                         </div>

//                         <span style={{ fontWeight: "600" }}>
//                           {item.rating}
//                         </span>
//                       </div>

//                       {/* TEXT */}
//                       <p
//                         style={{
//                           color: "#6c757d",
//                           marginTop: "18px",
//                           lineHeight: "28px",
//                         }}
//                       >
//                         Sed ut perspiciatis unde omnis iste natus error sit
//                         voluptatem accusantium doloremque.
//                       </p>

//                       {/* STATS */}
//                       <div className="d-flex gap-4 mt-3">
                        
//                         <div className="d-flex align-items-center gap-2">
//                           <div
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               background: "#e7f5ee",
//                               borderRadius: "10px",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               color: "#198754",
//                             }}
//                           >
//                             <FaUserFriends />
//                           </div>

//                           <div>
//                             <h6 className="mb-0 fw-bold">
//                               {item.learners}
//                             </h6>
//                             <small className="text-muted">
//                               LEARNERS
//                             </small>
//                           </div>
//                         </div>

//                         <div className="d-flex align-items-center gap-2">
//                           <div
//                             style={{
//                               width: "40px",
//                               height: "40px",
//                               background: "#e7f5ee",
//                               borderRadius: "10px",
//                               display: "flex",
//                               alignItems: "center",
//                               justifyContent: "center",
//                               color: "#198754",
//                             }}
//                           >
//                             <BsFillAwardFill />
//                           </div>

//                           <div>
//                             <h6 className="mb-0 fw-bold">
//                               {item.score}
//                             </h6>
//                             <small className="text-muted">
//                               SCORE
//                             </small>
//                           </div>
//                         </div>
//                       </div>

//                       <hr className="my-4" />

//                       {/* FOOTER */}
//                       <div className="d-flex justify-content-between align-items-center">
//                         <Button
//                           variant="link"
//                           className="p-0 text-success text-decoration-none fw-bold"
//                         >
//                           Explore <FaArrowRightLong  className="ms-2" />
//                         </Button>

//                         <div className="d-flex gap-2">
//                           {item.socials.map((icon, i) => (
//                             <div
//                               key={i}
//                               style={{
//                                 width: "38px",
//                                 height: "38px",
//                                 borderRadius: "50%",
//                                 background: "#f2f2f2",
//                                 display: "flex",
//                                 alignItems: "center",
//                                 justifyContent: "center",
//                                 color: "#6c757d",
//                                 cursor: "pointer",
//                               }}
//                             >
//                               {icon}
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </Card.Body>
//                   </Col>
//                 </Row>
//               </Card>
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </div>
//   );
//           </section>
//       {/* Featured Instructors-section-end */}
//     </>
//     );
// }
// export default Reactweb