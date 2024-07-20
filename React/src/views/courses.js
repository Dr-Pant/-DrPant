import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar81 from '../components/navbar81'
import Head1 from '../components/head1'
import CTA1 from '../components/cta1'
import Features211 from '../components/features211'
import Features19 from '../components/features19'
import Features20 from '../components/features20'
import Features201 from '../components/features201'
import Features22 from '../components/features22'
import Footer1 from '../components/footer1'
import './courses.css'

const Courses = (props) => {
  return (
    <div className="courses-container">
      <Helmet>
        <title>Courses - Amit World Academy</title>
        <meta property="og:title" content="Courses - Amit World Academy" />
      </Helmet>
      <Navbar81 rootClassName="navbar81-root-class-name1"></Navbar81>
      <Head1 rootClassName="head1-root-class-name"></Head1>
      <CTA1></CTA1>
      <Features211
        feature1Title="Real Estate"
        feature2Title="Cryptocurrency"
        feature3Title="Business"
        feature4Title="Entrepreneur"
      ></Features211>
      <Features19
        feature1Title="Basic Real Estate Courses"
        feature1ImageSrc="https://images.unsplash.com/photo-1558036117-15d82a90b9b1?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE1fHxSZWFsJTIwRXN0YXRlfGVufDB8fHx8MTcyMDMyNzMxOXww&amp;ixlib=rb-4.0.3&amp;w=1400"
      ></Features19>
      <Features20
        cost2="INR 9997"
        description2="2 Classes Related to Cryptocurrency and blockchain"
        description3="One month training on treading and blockchain"
        description4="by Amit Kumar Jha"
        feature1Title="Cryptocurrency and Blockchain"
        feature1ImageSrc="https://images.unsplash.com/photo-1640833906651-6bd1af7aeea3?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHxjcnlwdG98ZW58MHx8fHwxNzIxMjAxMzA2fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature1Description="One Demo Class For Free"
      ></Features20>
      <Features19
        cost="INR 6997"
        cost2="INR 1497"
        description2="Business Mastery, Business Strategies, Money Mastery, Time Management, Leadership, Rich Mindset, Evolution of Currency. One Class Each"
        description3="Each Class"
        feature1Title="Business Package"
        rootClassName="features19-root-class-name"
        feature1ImageSrc="https://images.unsplash.com/photo-1665686310429-ee43624978fa?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fEVudHJlcHJlbmV1cnxlbnwwfHx8fDE3MjEyMjY3NzZ8MA&amp;ixlib=rb-4.0.3&amp;w=1400"
      ></Features19>
      <Features201
        cost2="Like, Share, Follow &amp; Subscribe"
        description2="Learn About Entrepreneur"
        description3="Learn How to Manage Time Properly"
        feature1Title="Business &amp; Entrepreneur Classes For student"
        rootClassName="features201-root-class-name"
        feature1Action1="Register Now"
        feature1ImageSrc="https://images.unsplash.com/photo-1563986768817-257bf91c5753?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDcxfHxFbnRyZXByZW5ldXJ8ZW58MHx8fHwxNzIxMjI2Nzk4fDA&amp;ixlib=rb-4.0.3&amp;w=1400"
        feature1Description="Learn About Business"
      ></Features201>
      <Features22 rootClassName="features22-root-class-name"></Features22>
      <Footer1 rootClassName="footer1-root-class-name"></Footer1>
    </div>
  )
}

export default Courses
