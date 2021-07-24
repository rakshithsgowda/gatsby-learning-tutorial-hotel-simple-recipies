import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const About = () => {
  return (
    <Layout>
      <main className="page">
        <section className="about-page">
          <article>
            <h2>I'm baby coloring poke taxidermy</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum
              officiis, fugit omnis mollitia quae autem unde.
            </p>
            <p>
              Tenetur, asperiores nam adipisci minima possimus tempora accusamus
              ea facilis accusantium minus hic explicabo
            </p>
            <Link to="/contact" className="btn">
              contact
            </Link>
          </article>
          <StaticImage
            src="../assets/images/about.jpeg"
            alt="person pouring Salt in Bowl"
            className="about-img"
            placeholder="blurred"
          />
        </section>
      </main>
    </Layout>
  )
}

export default About
