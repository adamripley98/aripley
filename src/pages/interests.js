import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Smile from '../images/smile.png'

const Interests = () => (
  <Layout>
    <SEO title="Interests" />
    <div className="d-flex justify-content-center align-items-center">
      <img src={Smile} alt="clown" className="h1-image" />
      <h1 className="italic">Here's some things I like</h1>
    </div>
    <h2 className="green-title">Hobbies</h2>
    <p className="p-large">
      <span className="bold underline">Physical:</span> weightlifting, soccer, spikeball, hiking, camping
      <br/>
      <span className="bold underline">Creative:</span> art, cooking, writing, web design
      <br/>
      <span className="bold underline">Other:</span> road tripping, meditating, thinking about thinking about thinking about thinking
    </p>
    <h2 className="green-title">Topics</h2>
    <p className="p-large">
      <span className="bold underline">Intellectual:</span> psychology, philosophy, neuroscience, CS, entrepreneurial management, VC
      <br/>
      <span className="bold underline">Philosophical:</span> absurdism, buddhism, futurism, humanism, simulation theory (haha)
      <br/>
      <span className="bold underline">Fields:</span> Mental health, education, remote work, consumer products, software dev
    </p>
    <h2 className="green-title">Books</h2>
    <p className="p-large">
      <span className="bold">Jobs</span> - Walter Isaacson
      <br/>
      <span className="bold">The Happiness of Pursuit</span> - Chris Guillebeau
      <br/>
      <span className="bold">Zen and the Art of Motorcycle Maintenance</span> - Robert Persig
      <br/>
      <span className="bold">12 Rules for Life</span> - Jordan Peterson
      <br/>
      <span className="bold">Zero to One</span> - Peter Theil
      <br/>
      <span className="bold">The Wisdom of Insecurity</span> - Alan Watts
      <br/>
      <span className="bold">The Outsider</span> - Albert Camus
      <br/>
      <span className="bold">Sapiens</span> - Yuval Noah Harari
      <br/>
      <span className="bold">An Unquiet Mind</span> - Kay Jamison
      <br/>
      <span className="bold">Dawn of the New Everything</span> - Jaron Lanier
    </p>
    <h2 className="green-title">People</h2>
    <p className="p-large">
      <span className="bold underline">Wise:</span> Alan Watts, Ram Dass, Eckhart Tolle
      <br/>
      <span className="bold underline">Fascinating:</span> Sam Harris, Joe Rogan, Yuval Noah Harari, Jaron Lanier
      <br/>
      <span className="bold underline">Inspiring:</span> Jordan Peterson, Steve Jobs, Elon Musk, David Goggins, Tim Ferriss
    </p>
    <h2 className="green-title">Movies</h2>
    <p className="p-large">
      Honey Boy
      <br/>
      Eternal Sunshine of the Spotless Mind
      <br/>
      The Matrix
      <br/>
      Yes Man
      <br/>
      Don Jon
      <br/>
      500 Days of Summer
      <br/>
      Good Will Hunting
    </p>
  </Layout>
)

export default Interests
