import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import FB from '../images/fb.png'
import Linkedin from '../images/linkedin.png'
import Git from '../images/git.png'
import Insta from '../images/ig.png'
import Adam from '../images/prof.jpg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="row">
        <div className="col-lg-4">
          <img src={Adam} alt="adam" className="headshot"/>
        </div>
        <div className="col-lg-8">
          <h1>Hi, I'm <span className="green-text">Adam.</span></h1>
          <p className="p-large">
            I’m a student, <span><u>web developer,</u></span> and product builder from Anchorage, Alaska.
            I currently attend the <span><u>University of Pennsylvania</u></span> where I study entrepreneurial management, computer science, and psychology.
            I’m passionate about <span><u>A LOT,</u></span> but at the end of the day I’m driven mostly by the idea of building cool products with cool people.
            Check out what I’m <span><u>working on,</u></span> get weirded out by my <span><u>thoughts,</u></span> and <span><u>say hi.</u></span>
          </p>
          <div className="social-group">
            <img src={FB} alt="fb" className="social-icon" />
            <img src={Linkedin} alt="linkedin" className="social-icon" />
            <img src={Git} alt="git" className="social-icon" />
            <img src={Insta} alt="insta" className="social-icon" />
          </div>
        </div>
    </div>
    <div className="clear"/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
