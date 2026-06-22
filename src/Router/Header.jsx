import { Button } from '@mui/material';
// import Link from '@mui/material/Link'
import { Link } from "react-router-dom";
import React from 'react'
import { BsShadows } from "react-icons/bs";
import './Header.css'
const Header = ()=>{
    return(
        <>
        <div className='sticky-top'>
           {/* <h2>
              <Link href='/'>Home</Link>
          </h2>
          <h2><Link href='/about'>About</Link></h2>
          <h2><Link href='/user'>User</Link></h2> */}
           <header className='header'>
                <div className='div'>
                    <div id='div1'>
                        <BsShadows className='shadow'/>
                        <h1 id='h1'>Rival</h1>
                    </div>
                    <nav>
                        <ul className='ul'>
                            <li><a href='#' className='home'>Home</a></li>
                            <li><a href='#about-section' className='about2'>About</a></li>
                            <li className='menu'>Services</li>
                            <li className='menu'>Portfolio</li>     
                            <li className='menu'>Team</li>
                            <li className='menu'>Dropdown</li>
                            <li className='menu'>Contact</li>
                            
                        </ul>
                    </nav>
                    <Button className='btn' href='#about'>Get Started</Button>
                </div>
           </header>
        </div>
        </>
    )
}
export default Header