import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import Head3 from '../components/head3'
import ContactForm3 from '../components/contact-form3'
import Contact14 from '../components/contact14'
import Contact10 from '../components/contact10'
import Footer1 from '../components/footer1'
import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-container">
      <Helmet>
        <title>Contact - Amit World Academy</title>
        <meta property="og:title" content="Contact - Amit World Academy" />
      </Helmet>
      <Navbar81 rootClassName="navbar81-root-class-name2"></Navbar81>
      <Head3 rootClassName="head3-root-class-name"></Head3>
      <ContactForm3 imagesvg="https://images.unsplash.com/photo-1463573230746-1049c264?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fHBlcnNvbiUyMGNhbGxpbmd8ZW58MHx8fHwxNzIwNjc5NTgwfDA&amp;ixlib=rb-4.0.3&amp;w=700"></ContactForm3>
      <Contact14
        email1="info@amitworldacademy.com"
        phone1="+918900000000"
      ></Contact14>
      <Contact10
        heading1="Location"
        rootClassName="contact10-root-class-name"
      ></Contact10>
      <Footer1 rootClassName="footer1-root-class-name1"></Footer1>
    </div>
  )
}

export default Contact
