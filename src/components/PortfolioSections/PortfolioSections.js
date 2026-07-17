import React, { useState } from 'react'
import { experienceData } from '../../data/experienceData'
import { contactsData } from '../../data/contactsData'
import { portfolioSectionsData } from '../../data/caseStudiesData'
import './PortfolioSections.css'

function ContactTerminal() {
  const [status, setStatus] = useState('idle')
  const handleSubmit = (event) => {
    event.preventDefault()
    if (!event.currentTarget.checkValidity()) {
      setStatus('error')
      return
    }
    setStatus('success')
    event.currentTarget.reset()
  }

  return (
    <section className="contact-terminal section-shell" id="contact" aria-labelledby="contact-title">
      <div className="section-kicker">INITIATE_HANDSHAKE</div>
      <h2 id="contact-title">./establish_connection.sh</h2>
      <div className="terminal-panel">
        <div className="terminal-panel__log" aria-live="polite">
          <p>Searching for available uplink... FOUND.</p>
          <p>Opening secure socket layer... READY.</p>
          <p>Please provide session metadata below:</p>
        </div>
        <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} noValidate={false}>
          <input type="hidden" name="form-name" value="contact" />
          <label>Name<input required name="name" type="text" autoComplete="name" /></label>
          <label>Email<input required name="email" type="email" autoComplete="email" /></label>
          <label>Message<textarea required name="message" rows="5" /></label>
          <button type="submit">SEND TRANSMISSION</button>
          {status === 'success' && <p className="form-status form-status--success">Transmission queued. I will reply through the provided email channel.</p>}
          {status === 'error' && <p className="form-status form-status--error">Please complete the required fields before sending.</p>}
        </form>
        <address>{contactsData.email}<br />{contactsData.address}</address>
      </div>
    </section>
  )
}

function PortfolioSections() {
  const { systemThinking, toolkit, process, experiments } = portfolioSectionsData
  return (
    <>
      <section className="portfolio-section portfolio-section--system section-shell" id="system-thinking">
        <div className="section-kicker">{systemThinking.eyebrow}</div>
        <h2>{systemThinking.title}</h2>
        <p className="portfolio-section__lead">{systemThinking.body}</p>
        <ol className="system-map">{systemThinking.steps.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      <section className="portfolio-section section-shell" id="experience">
        <div className="section-kicker">Experience log</div>
        <h2>Recent work, kept factual.</h2>
        <div className="experience-log">{experienceData.map((item) => <article key={item.id}><span>{item.startYear} — {item.endYear}</span><h3>{item.jobtitle}</h3><p>{item.company}</p></article>)}</div>
      </section>
      <section className="portfolio-section section-shell" id="toolkit">
        <div className="section-kicker">Toolkit</div>
        <h2>Tools selected for durable product work.</h2>
        <ul className="toolkit-list">{toolkit.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <section className="portfolio-section section-shell" id="process">
        <div className="section-kicker">Process</div>
        <h2>Small enough to ship. Clear enough to maintain.</h2>
        <div className="process-grid">{process.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>
      </section>
      <section className="portfolio-section section-shell" id="experiments">
        <div className="section-kicker">Experiments</div>
        <h2>Explorations without confusing them for production case studies.</h2>
        <ul className="experiment-list">{experiments.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>
      <ContactTerminal />
    </>
  )
}

export default PortfolioSections
