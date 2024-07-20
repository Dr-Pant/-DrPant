import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import Head2 from '../components/head2'
import Hero8 from '../components/hero8'
import Stats2 from '../components/stats2'
import Team1 from '../components/team1'
import Footer1 from '../components/footer1'
import './about.css'

const About = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About - Amit World Academy</title>
        <meta property="og:title" content="About - Amit World Academy" />
      </Helmet>
      <Navbar81 rootClassName="navbar81-root-class-name"></Navbar81>
      <Head2 rootClassName="head2-root-class-name"></Head2>
      <Hero8></Hero8>
      <Stats2 image1Src="https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fHN0YXR8ZW58MHx8fHwxNzIwNjc5Njk3fDA&amp;ixlib=rb-4.0.3&amp;w=1400"></Stats2>
      <Team1
        member2="Mitali"
        member3="Deepak"
        member4="Manisha"
        member5="Shiv Kumar"
        member6="Neeta"
        member7="Saket"
        member8="Akash"
        member1Job="Business Catalyst / Life Coach"
        member1Src="/whatsapp%20image%202024-06-09%20at%206.19.29%20pm1-500w.jpeg"
        member2Job="Software Guru"
        member3Job="Tech. Officer"
        member4Job="Fashion Guru"
        member5Job="Marketing Head"
        member6Job="Advisor"
        member7Job="Jyotishacharya"
        member8Job="AutoCAD Trainer"
      ></Team1>
      <Footer1 rootClassName="footer1-root-class-name2"></Footer1>
    </div>
  )
}

export default About
