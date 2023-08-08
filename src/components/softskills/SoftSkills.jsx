import React from 'react'
import './softskill.css'

const SoftSkills = () => {
  return (
    <section id='softskills'>
      <h5>My Business Rules</h5>
      <h2>Softskills</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Communication</h3>
          </div>
        </article>

        {/* END OF SOLIDITY */}

        <article className="service">
          <div className="service__head">
            <h3>Problem-solving</h3>
          </div>
        </article>

        {/* END OF SMART CONTRACT */}

        <article className="service">
          <div className="service__head">
            <h3>Teamwork</h3>
          </div>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service">
          <div className="service__head">
            <h3>Time Management</h3>
          </div>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Adaptability</h3>
          </div>
        </article>

        <article className="service">
          <div className='service__head'>
            <h3>Attention to detail</h3>
          </div>
        </article>

      </div>
    </section>
  )
}

export default SoftSkills