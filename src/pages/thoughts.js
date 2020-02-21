import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Cowboy from '../images/cowboy.png'

const Thoughts = () => (
  <Layout>
    <SEO title="Thoughts" />
    <div className="d-flex">
      <img src={Cowboy} alt="cowboy" className="h1-image" />
      <h1>Me (in 1000 words)</h1>
    </div>
    <div className="thoughts-text">
      <p>
        I grew up in Alaska where I developed an immense love for nature and a natural inclination for deep introspection. At an early age, I learned the habit of observing my behavior, setting goals, and refining my behavior to meet those goals. Inspired by role models like Steve Jobs, I latched onto the idea of being an entrepreneur. Eager to begin my journey, I headed out east for college to the University of Pennsylvania to study business.
      </p>
      <p>
        While I’d been duly warned that the East Coast would be a serious adjustment from Alaska, I never could have adequately prepared myself. The usual uncertainty a typical college freshman experiences being thousands of miles from home was heightened to a full-blown existential crisis by the gargantuan difference between Penn in actuality and the Penn I’d constructed in my imagination over the previous few years. I was knocked on my ass. The Penn of my dreams involved a culture of best friends dropping out to risk everything and expand their promising dorm room ventures. The real Penn involved a culture of recruiting for investment banking and consulting internships 1.5 years in advance. After a year of feeling fairly out of place, deeply dissociated, and completely pointless, I made a conscious decision to reinvent myself. I learned web development, began taking freelance clients, quit my resume-filling extracurriculars to focus my energy on self-learning, and started plotting an elaborate plan for time off from college.
      </p>
      <p>
        After my sophomore year I took a leave of absence from Penn, unsure if I’d go back. During this time, I lived in my car (for what was possibly the best three months of my entire life) traveling the West Coast and checked out Europe and Asia for the first time. All the while I was thinking, reading, writing, freelance web dev-ing, and pondering my next steps. To summarize my 8 months of primarily solo traveling briefly, I had an absurd time. I traveled to two new continents, experimented with drugs, got three tattoos, made my car my home, lived with a random French couple from Facebook in Barcelona, meditated with monks in Thailand, felt blissfully at peace and existentially depressed, made many special romantic and friendly connections, and learned about my mind in ways I couldn’t have even began to imagine before.
      </p>
      <p>
        My year off taught me two things primarily. First, I learned I want to spend a good portion of my 20s remote working and traveling. There’s so much to experience before anchoring to one point on the planet, and I want to design my lifestyle to allow me to work from anywhere - my RV, my friends’ couches, other countries, home, anywhere. Second, I learned the hard way that without a few more years of finishing college, I wasn’t emotionally mature or technically talented enough to make the digital nomad lifestyle work yet. I refactored my plan and decided to return to Penn to finish up, adding a psychology degree to my existing business and computer science studies. I’m currently set to graduate in May 2021.
      </p>
      <p>
        One of my defining characteristics is my unwillingness to settle when it comes to the big things. No matter how many existential crises it takes, I have faith that I will always choose to reinvent myself and reimagine my choices rather than settle for what I don’t want. I also work hard to maintain a flexible, ever-changing life philosophy.
      </p>
      <p>
        Presently, I like to model life as a massive, multiplayer choose-your-own-adventure game. Your choices, from what flavor toothpaste you buy to the way you raise your children matter, for you and thousands of other nodes in your network. The choices don’t matter in some cosmic, spiritual sense in which you’ll be awarded with an afterlife if you made the right choices. They matter in a very real world sense in which you’re a co-creator of this intersubjective reality we are presently experiencing. We each have our allotted time, we each have dreams, and we each can use that time to manifest those dreams and change the fabric of the game we are playing.
      </p>
      <p>
        At the same time, modeling life as a game allows me to not take it so seriously. While everything matters in the sense that my choices affect the conceptual reality we are all playing in, nothing matters in the sense that the parameters of absolute reality are so beyond my control they’re not worth worrying about. I’m nothing but a random arrangement of atoms that is just self-aware enough to recognize the brief, cosmically insignificant period of time I’ll be around for. I think we might as well do something interesting to justify to ourselves these absurd parameters for no other reason than because we have complete freedom to do so.
      </p>
      <p>
        My metaphysical understanding drives the way I interact in the world. I care endlessly about the big picture, and I don’t get distracted by the small things. Having an impact and designing my own lifestyle are what drive my obsessive search for knowledge and self improvement. I don’t want a ton of money, and I don’t want prestige - I want to partake in absurd adventures with my best friends and leave a mark on the world.
      </p>
      <p>
        I’m passionate about psychology, philosophy, education, mental health, art, technology, and entrepreneurship. My long term goals center around combining these interests in creative ways that helps people change their perception about their time alive. I’m particularly interested in how we can learn, adapt, and maintain our sanity and creativity in an accelerating, technological world. On the whole, I find myself becoming increasingly curious about both the nature of my mind and the world as a whole as my life progresses, and I’m so excited to keep understanding and building my internal and external reality in relation to each other.
      </p>
      <p>
        Well, that’s me and my thoughts in a nutshell. Thanks for listening!
      </p>
    </div>
  </Layout>
)

export default Thoughts
