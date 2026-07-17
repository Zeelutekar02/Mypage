import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import About from './About'
const Webrouter = ({children})=>{
    return(
        <>
    <div>
        {/* <Header></Header>  */}
        {/* <Home></Home>
        <About></About> */}
        <Header />
        {/* <Home /> */}
        <About />
          {children}
        <Footer></Footer>
    </div>
        </>
    )
}
export default Webrouter