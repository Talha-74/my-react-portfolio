import React, { useCallback } from 'react'
import { Link } from 'react-router-dom'
import { caseStudiesData } from '../../data/caseStudiesData'
import './SelectedWork.css'

function SelectedWork() {
  const handlePointerMove = useCallback((event) => {
    const card = event.currentTarget
    const rect = card.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    const rotateY = ((x - 50) / 50) * 5
    const rotateX = ((50 - y) / 50) * 4
    card.style.setProperty('--light-x', `${x}%`)
    card.style.setProperty('--light-y', `${y}%`)
    card.style.setProperty('--tilt-x', `${rotateX}deg`)
    card.style.setProperty('--tilt-y', `${rotateY}deg`)
  }, [])

  const resetPointer = useCallback((event) => {
    event.currentTarget.style.setProperty('--tilt-x', '0deg')
    event.currentTarget.style.setProperty('--tilt-y', '0deg')
  }, [])

  return (
    <section className="selected-work section-shell" id="projects" aria-labelledby="selected-work-title">
      <div className="section-kicker">Selected work</div>
      <div className="selected-work__intro">
        <h2 id="selected-work-title">Three serious builds, shown as systems.</h2>
        <p>Each case study focuses on context, constraints, architecture, decisions, and what can be improved next.</p>
      </div>
      <div className="selected-work__grid">
        {caseStudiesData.map((project) => (
          <article
            className="case-card"
            key={project.id}
            onPointerMove={handlePointerMove}
            onPointerLeave={resetPointer}
            style={{ '--case-accent': project.accent }}
          >
            <div className="case-card__media" aria-hidden="true">
              <span>{project.number}</span>
              <div className="case-card__diagram">
                {project.architecture.map((step) => <i key={step}>{step}</i>)}
              </div>
            </div>
            <div className="case-card__content">
              <p className="case-card__eyebrow">{project.eyebrow}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>{project.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
              <Link to={`/projects/${project.slug}`} className="case-card__link">View case study →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SelectedWork
