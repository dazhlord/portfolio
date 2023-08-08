import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/loanDApp.png'
import IMG2 from '../../assets/crowdfunding.jpg'
import IMG3 from '../../assets/nft1.jpeg'
import IMG4 from '../../assets/yieldfarming2.jpg'
import IMG5 from '../../assets/subgraph1.png'
import IMG6 from '../../assets/yielfarming1.jpg'

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Loan DApp',
    github: 'https://github.com/dazhlord/DApp_Loan',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Crowdfunding DApp',
    github: 'https://github.com/dazhlord/RootProject_SC',
  },
  {
    id: 3,
    image: IMG4,
    title: 'DeFi Yield Farming',
    github: 'https://github.com/dazhlord/defi_yieldfarming',
  },
  {
    id: 4,
    image: IMG3,
    title: 'NFT Project',
    github: 'https://github.com/dazhlord/NFTDapp',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Rarible Subgraph',
    github: 'https://github.com/dazhlord/RaribleSubgraph',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Yield Farming with dYdx, Compound',
    github: 'https://github.com/dazhlord/yield-farming',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github}) => {
            return(
              <article key={id} className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank'>Github</a>
          </div>
        </article>
            )
          })
        }

      </div>
    </section>
  )
}

export default Portfolio