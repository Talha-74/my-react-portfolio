import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { caseStudiesData } from '../../data/caseStudiesData'
import './CaseStudyPage.css'

function CaseStudyPage() {
  const { slug } = useParams()
  const project = caseStudiesData.find((item) => item.slug === slug)
  if (!project) return <main className="case-study-page"><h1>Case study not found.</h1><Link to="/">Return home</Link></main>
  return (
    <main className="case-study-page" style={{ '--case-accent': project.accent }}>
      <Helmet><title>{project.title} case study - Talha Khan</title></Helmet>
      <Link className="case-study-page__back" to="/#projects">← Back to selected work</Link>
      <header className="case-study-hero">
        <p>{project.eyebrow}</p><h1>{project.title}</h1><span>{project.summary}</span>
      </header>
      <section className="case-study-architecture" aria-labelledby="architecture-title">
        <h2 id="architecture-title">Architecture flow</h2>
        <ol>{project.architecture.map((step) => <li key={step}>{step}</li>)}</ol>
      </section>
      <section className="case-study-grid">
        {Object.entries({ Context: project.sections.context, Problem: project.sections.problem, Constraints: project.sections.constraints, 'My role': project.role, Result: project.result, 'What I would improve': project.sections.improve }).map(([title, body]) => <article key={title}><h2>{title}</h2><p>{body}</p></article>)}
        <article className="case-study-grid__wide"><h2>Key decisions</h2><ul>{project.sections.decisions.map((decision) => <li key={decision}>{decision}</li>)}</ul></article>
      </section>
    </main>
  )
}

export default CaseStudyPage
