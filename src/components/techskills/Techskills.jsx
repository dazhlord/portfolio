import React from 'react'
import './techskill.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const TechSkills = () => {
  return (
    <section id='techskills'>
      <h5>The SKills I Have</h5>
      <h2>Tech Skill</h2>

      <div className="container experience__container">
        <div className=" experience__smartcontract">  
        <h3>Smart Contract</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Solidity</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Rust</h4>
               <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Web3.js</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Ether.js</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>GraphQL</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>React</h4>
                <small className='text-light'>Professional</small></div>
            </article>
          </div>
        </div>

        <div className="experience__network">
          <h3>Network</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Ethereum</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Polygon</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Solana</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Binance</h4>
               <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>BitCoin</h4>
               <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Avalanche</h4>
               <small className='text-light'>Professional</small></div>
            </article>
          </div>
        </div>

        <div className=" experience__protocol">
          <h3>Protocol</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Uniswap</h4>
                <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
                <div><h4>Compound</h4>
                <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Aave</h4>
               <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Rarible</h4>
               <small className='text-light'>Professional</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Synthetix</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>

            <article className='experience__details'>
              <BsFillPatchCheckFill className='experience__details-icon' />
               <div><h4>Ramses</h4>
               <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TechSkills 