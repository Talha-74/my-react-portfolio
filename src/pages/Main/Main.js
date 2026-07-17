import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About } from '../../components'
import SelectedWork from '../../components/SelectedWork/SelectedWork'
import PortfolioSections from '../../components/PortfolioSections/PortfolioSections'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name} - Portfolio</title>
            </Helmet>

            <Navbar />
            <Landing />
            <About />
            <SelectedWork />
            <PortfolioSections />
            <Footer />
        </div>
    )
}

export default Main
