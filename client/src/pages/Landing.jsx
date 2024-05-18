import React from 'react'
import Navbar from '../components/NavBar'

import Footer from '../components/Footer'
import NameGenerator from './DirectInput'

const LandingPage = () => {
    return (
        <>
                    <Navbar />
                    <NameGenerator/>
            <Footer/>
        </>
    )
}

export default LandingPage