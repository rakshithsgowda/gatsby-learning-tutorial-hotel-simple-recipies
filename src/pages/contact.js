import React from "react"
import Layout from "../components/Layout"

const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want To Get In Touch?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
              natus magnam minus omnis a, vel quas eaque numquam quo at.
            </p>
            <p>
              facilis asperiores sequi libero recusandae voluptatem inventore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              recusandae id praesentium sapiente voluptatem labore ut
            </p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Your Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">Your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button className="btn block">submit</button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
