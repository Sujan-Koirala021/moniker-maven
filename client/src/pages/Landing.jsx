import React from 'react'
import Navbar from '../components/NavBar'
import Footer from '../components/Footer'
import NameGenerator from './DirectInput'
import Hero from '../components/Hero'
import ContactUs from './ContactUs'
const LandingPage = () => {
    return (
        <>
                    <Navbar />
                    {/* <Hero/> */}
                    <ContactUs/>
            <Footer/>
        </>
    )
}

export default LandingPage