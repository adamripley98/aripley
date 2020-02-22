import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Riplo from "../images/riplo.png";
import Dayli from "../images/dayli.png";
import Day1 from "../images/d2had1.jpg";
import Day2 from "../images/d2had2.jpg";
import Day3 from "../images/d2had3.jpg";
import Clown from "../images/clown.png";
import Lifting from '../images/lifting.jpg';
import LiftingData from "../images/liftingdata.png";


const Currently = () => (
  <Layout>
    <SEO title="Currently" />
    <div className="d-flex justify-content-center align-items-center">
      <img src={Clown} alt="clown" className="h1-image" />
      <h1 className="italic">Here's what I'm working on</h1>
    </div>
    <br/>
    <h2 className="green-title">Riplo</h2>
    <p className="p-bigger">
      Riplo is a student-run freelance web development company delivering everything from complex web applications to mobile apps to static websites. My roommate Cam and I started it a couple years back as a means of consolidating our web development skills and interests into a service to help people build out cool ideas. As I’ve become more interested in the idea of remote work, I’ve realized that I want to expand Riplo to be a platform for me to take on freelance clients for a range of different services: web development, web design, internet marketing, startup consulting, and more. There’s a ton I’d like to learn relating to all these topics, and I believe Riplo will be a good way for me to do so while also helping out individuals and companies building awesome products. Currently I’m sharpening my technical skills and figuring out how to structure Riplo appropriately to take on other developers, designers, and business people who can help Riplo work on more projects concurrently.
    </p>
    <br/>
    <div className="c-card-no-padding">
      <img src={Riplo} alt="riplo" className="c-card-img" />
    </div>
    <br/>
    <br/>
    <h2 className="green-title">Dayli</h2>
    <p className="p-bigger">
      Mental health is probably the issue I care most about currently, and for the past few months I’ve been building out a web app called Dayli. Dayli aims to bridge self-discipline and social accountability in a platform where you can use the power of a tight-knit community to stay on top of your daily goals and habits. It offers mood and habit tracking and analysis, journaling, and a collaborative environment to keep up with and encourage close friends to stay on top of their personal development. I’m about 80% finished with an initial MVP and plan to launch a beta test sometime in the next few months, depending on my workload with school and freelance work.
    </p>
    <br/>
    <div className="c-card-no-padding">
      <img src={Dayli} alt="dayli"  className="c-card-img"/>
    </div>
    <br/>
    <br/>
    <h2 className="green-title">Day to Have a Day</h2>
    <p className="p-bigger">
      I’m always looking for different creative outlets to express myself. I really enjoy writing, but often I find that I come up with small ideas that are interesting yet not worthy of an entire piece of writing. To save time and energy, I started drawing out these ideas in the form of comics, and it has really changed how I think. When I’m stuck in a thought loop, I often start thinking on a more meta level about what I’m thinking about and try to compare it symbolically to something else. Oftentimes, this culminates in me coming up with a creative comic and also dissolving the thought loop in the process. Day to Have a Day is just for fun and almost entirely a personal project, but maybe in the future I’ll be more active about sharing my content with others.
    </p>
    <br/>
    <div className="row">
      <div className="col-lg-4 col-md-6">
        <div className="c-card-no-padding">
          <img src={Day1} alt="day1"  className="c-card-img"/>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="c-card-no-padding">
          <img src={Day2} alt="day1"  className="c-card-img"/>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div className="c-card-no-padding">
          <img src={Day3} alt="day1"  className="c-card-img"/>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <h2 className="green-title">Weightlifting</h2>
    <p className="p-bigger">
      During high school and the first part of college, weightlifting was a huge part of my life. I loved every aspect of it: setting and realizing progressive goals for the weights on my 4 main lifts (Bench, deadlift, squat, and overhead press), eating clean and taking supplements intelligently, training with my friends, trying to BULK, and even drinking my disgustingly thick 1000 calorie protein shakes. I’d say my interest in this hobby peaked a few years ago when I trained for and competed in my first bodybuilding show. Unfortunately since then, I’ve slowly lost a lot of that excitement and discipline. I decided at the beginning of 2020 that I needed an extra push to get back on track. My next major goal is to compete in my first powerlifting competition which will be in December in Ohio. I’m pumped to be getting back into the swing of things and testing how a having a concrete goal will affect my ability to stay on track and perform.
    </p>
    <br/>
    <div className="row">
      <div className="col-lg-5">
        <div className="c-card-no-padding">
          <img src={Lifting} alt="lifting"  className="c-card-img"/>
        </div>
      </div>
      <div className="col-lg-7">
        <div className="c-card-no-padding">
          <img src={LiftingData} alt="lifting-data"  className="c-card-img"/>
        </div>
      </div>
    </div>
    <br/>
    <br/>
  </Layout>
)

export default Currently
