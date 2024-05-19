import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import NameGenerator from './DirectInput'
import Hero from '../components/Hero'
import ContactUs from './ContactUs'
import AboutUs from './AboutUs'

const LandingPage = () => {
    return (
        <>
                    <Navbar />
                    {/* <Hero/> */}
                    <ContactUs/>
                    {/* <AboutUs/> */}
            <Footer/>
        </>
    )
}

export default LandingPage