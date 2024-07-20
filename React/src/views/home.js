import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import Hero2 from '../components/hero2'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Features211 from '../components/features211'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Amit World Academy</title>
        <meta property="og:title" content="Amit World Academy" />
      </Helmet>
      <Navbar81></Navbar81>
      <Hero2 image1Src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxBYnN0cmFjdCUyMHxlbnwwfHx8fDE3MjAzNTkwMzV8MA&amp;ixlib=rb-4.0.3&amp;h=1500"></Hero2>
      <Hero17
        image1Src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fEZpbmFuY2V8ZW58MHx8fHwxNzIwNjg5MzM5fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image2Src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDl8fFJlYWwlMjBFc3RhdGV8ZW58MHx8fHwxNzIwNjgzNDkxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image9Src="https://images.unsplash.com/photo-1622020457014-aed1cc44f25e?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU1fHxjcnlwdG98ZW58MHx8fHwxNzIwMzI4OTYxfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
        image10Src="https://images.unsplash.com/photo-1565402170291-8491f14678db?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fFJlYWwlMjBFc3RhdGV8ZW58MHx8fHwxNzIwNjgzNDkxfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
        image11Src="https://images.unsplash.com/photo-1629339941379-da30348cdba6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDMwfHxjcnlwdG98ZW58MHx8fHwxNzIwNjgzNTM0fDA&amp;ixlib=rb-4.0.3&amp;w=1500"
      ></Hero17>
      <Features24 feature1Description="Understand the key principles of real estate investing from seasoned industry experts."></Features24>
      <CTA26></CTA26>
      <Features25
        feature1Title="Advance Real Estate Consultant"
        feature3Title="Advance Training in Blockchain"
        feature1ImgSrc="https://images.unsplash.com/photo-1513082575024-27c508685592?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxyZWFsfGVufDB8fHx8MTcyMDMyOTkyOXww&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature2ImgSrc="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDZ8fGJ1c2luZXNzJTIwaW5kdXN0cnl8ZW58MHx8fHwxNzIwMzM4OTgzfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature3ImgSrc="https://images.unsplash.com/photo-1641932269869-46d52e20d8a1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDU0fHxjcnlwdG98ZW58MHx8fHwxNzIwMzI4OTYxfDA&amp;ixlib=rb-4.0.3&amp;w=1400"
      ></Features25>
      <Features211
        rootClassName="features211-root-class-name"
        feature4Title="Entrepreneur"
      ></Features211>
      <Steps2></Steps2>
      <Testimonial17
        author1Name="Ramesh"
        author2Name="Rajesh"
        author3Name="Mukesh"
        author4Name="Garima"
      ></Testimonial17>
      <Footer1></Footer1>
    </div>
  )
}

export default Home
