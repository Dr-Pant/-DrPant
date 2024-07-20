import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import ContentList23 from '../components/content-list23'
import FAQ1 from '../components/faq1'
import Footer1 from '../components/footer1'
import './legal.css'

const Legal = (props) => {
  return (
    <div className="legal-container">
      <Helmet>
        <title>Legal - Amit World Academy</title>
        <meta property="og:title" content="Legal - Amit World Academy" />
      </Helmet>
      <Navbar81 rootClassName="navbar81-root-class-name3"></Navbar81>
      <ContentList23></ContentList23>
      <FAQ1></FAQ1>
      <Footer1 rootClassName="footer1-root-class-name3"></Footer1>
    </div>
  )
}

export default Legal
