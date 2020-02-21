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
    <div className="row d-flex align-items-center">
        <div className="col-lg-4">
          <div className="center">
            <img src={Adam} alt="adam" className="headshot"/>
            <div className="social-group">
              <a href="https://www.facebook.com/adam.ripley.39" target="_blank">
                <img src={FB} alt="fb" className="social-icon" />
              </a>
              <a href="https://www.linkedin.com/in/adamrip/" target="_blank">
                <img src={Linkedin} alt="linkedin" className="social-icon" />
              </a>
              <a href="https://github.com/adamripley98" target="_blank">
                <img src={Git} alt="git" className="social-icon" />
              </a>
              <a href="https://www.instagram.com/allergyadam/" target="_blank">
                <img src={Insta} alt="insta" className="social-icon" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="c-card">
            <h1>Hi, I'm <span className="green-text">Adam.</span></h1>
            <p className="p-large">
              I’m a student, <a href="https://www.riplo.io" target="_blank" className="green-link">web developer,</a> and product builder from Alaska.
              I study entrepreneurial management, computer science, and psychology at the <a href="https://www.upenn.edu/" target="_blank" className="green-link">University of Pennsylvania.</a>
              &nbsp;I’m passionate about <span><u>A LOT,</u></span> but at the end of the day I’m driven mostly by the idea of building cool things with cool people.
              See what I’m <span><u>working on,</u></span> get weirded out by my <Link className="green-link" to="/thoughts">thoughts,</Link> and <a href="mailto:aripley@wharton.upenn.edu" className="green-link">say hi.</a>
            </p>
          </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
