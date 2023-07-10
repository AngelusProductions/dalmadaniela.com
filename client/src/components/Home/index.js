import React from 'react'
import './index.scss'

import Navbar from './Navbar'
import { i } from '../../constants/assets'
import testimonials from '../../constants/testimonials'

const t = {
  angelusProductions: 'Angelus Productions LLC ®',
  dalmaName: 'Dalma Llinas',
  dalmaTaglines: 'Actress. Singer. Digital Strategist. Content Creator.',
  dalmaIntro: 'I am a self-made multipotentialite based in Los Angeles. I teach people how to pursue multiple passions and amplify their success by rocking their social media game.',
  
  bioTitle: 'As a digital marketer and social media  strategist',
  bioText: 'I have helped brands in the US and Colombia boost their online visibility and achieve their business objectives by creating and implementing customized social media strategies that have enhanced their engagement, conversions, and revenue from social, and more importantly, improved the image they projected to their target audience.',
  
  brandsHelped: 'Brands I\'ve helped across the globe:',
  brandsCollaborated: 'Brands I\'ve collaborated with on social:',
  brandsFeatured: 'As featured in:',

  filmsTitle: 'As an actress and producer',
  filmsText: 'I have used my social media influence to promote the projects that  have cast me as an actress and launch successful crowdfunding campaigns that have funded the entire pre and postproduction of my latest feature film.',
  limeAndVinegarCaption: 'Lime & Vinegar, directed by Evan Snyder',
  theSovereignCaption: 'The Sovereign, directed by Farah Y. Mourad Vera',

  socialMedia: 'Social media is the new frontier. My content strategies are crafted to make sure your potential followers enjoy the vibe of your profile with every scroll.',
  
  testimonialsTitle: 'Testimonials',
  
  classViral: 'All without having to go viral.',
  classTeach: 'And now, I\'m going to teach you.',
  classTitle: 'How to be successful on social media without having to go viral'
}

const Home = () => {
  return (
    <main id='homePage'>
      <Navbar />
      <section id='landing' className='homeSection'>
        <div className='left'>
          <img className='halfSection' src={i.dalma.landingPhoto} alt={t.dalmaName} />
          <span id='angelusProductions'>{t.angelusProductions}</span>
        </div>
        <div className='right'>
          <div id='landingRight'>
            <h1>{t.dalmaName}</h1>
            <span>{t.dalmaTaglines}</span>
            <p>{t.dalmaIntro}</p>
            <img id='landingStarsTwinkleSmall' src={i.stars.starTwinkleSmall} />
            <img id='landingStarsTwinkleLarge' src={i.stars.starTwinklesLarge} />
          </div>
        </div>
      </section>
      <section id='bio' className='homeSection'>
        <div className='left'>
          <img id='bioLeftMagic' src={i.magic.magic5} />  
          <div id='bioLeft'>
            <h2>{t.bioTitle}</h2>
            <p>{t.bioText}</p>
          </div>
        </div>
        <div className='right'>
          <img className='halfSection' src={i.dalma.iVisaPhoto} alt={t.dalmaName} />
        </div>
      </section>
      <section id='brands' className='homeSection'>
        <div id='brandsHelped' className='brandsSection'>
          <h3>{t.brandsHelped}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsHelped).map(key => (
              <img src={i.logos.brandsHelped[key]} className='brandHelped brandLogo' key={key} />
            ))}
          </div>
        </div>
        <div id='brandsCollaborated' className='brandsSection'>
          <h3>{t.brandsCollaborated}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsCollaborated).map(key => (
              <img src={i.logos.brandsCollaborated[key]} className='brandCollaborated brandLogo' key={key} />
            ))}
          </div>
        </div>
        <div id='brandsFeatured' className='brandsSection'>
          <h3>{t.brandsFeatured}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsFeatured).map(key => (
              <img src={i.logos.brandsFeatured[key]} className='brandFeatured brandLogo' key={key} />
            ))}
          </div>
        </div>
      </section>
      <section id='films' className='homeSection'>
        <div className='left'>
          <div id='filmsLeft'>
            <h2>{t.filmsTitle}</h2>
            <p>{t.filmsText}</p>
          </div>
        </div>
        <div id='limeAndVinegar' className='right'>
          <div className='film'>
            <img src={i.films.limeAndVinegar} />
            <span>{t.limeAndVinegarCaption}</span>
          </div>
          <div id='theSovereign' className='film'>
            <img src={i.films.theSovereign} />
            <span>{t.theSovereignCaption}</span>
          </div>
        </div>
      </section>
      <section id='socialMedia' className='homeSection'>
        <div className='left'> 
          <img src={i.dalma.linkedInLaptop} alt={t.dalmaName} />
        </div>
        <div className='right'>
          <div id='socialMediaRight'>
            <p>{t.socialMedia}</p>
            <div id='socialMediaPhone'>
              <div>
                <a href='mailto:dalmadaniela@gmail.com'>
                  <img src={i.icons.email} />
                </a>
                <a href='https://www.instagram.com/dalma.llinas/'>
                  <img src={i.icons.instagram} />
                </a>
                <a href='https://www.threads.net/@dalma.llinas'>
                  <img src={i.icons.threads} />
                </a>
                <a href='https://www.facebook.com/dalmallinasconde/'>
                  <img src={i.icons.facebook} />
                </a>
                <a href='https://www.linkedin.com/in/dalma-llin%C3%A1s-5851b549/'>
                  <img src={i.icons.linkedIn} />
                </a>
              </div>
              <img id='socialMediaInstagramPhone' src={i.dalma.instagramPhone} />
              <img id='socialMediaMagic' src={i.magic.magic8} />
            </div>
          </div>
        </div>
      </section>
      <section id='garettTestimonial' className='homeSection testimonial'>
        <div className='left'>
          <h2>{t.testimonialsTitle}</h2>
          <p>{testimonials.garett.quote}</p>
          <div className='testimonialLabel pink'>
            <span>{testimonials.garett.name}</span>
            <span>{testimonials.garett.label1}</span>
            <span>{testimonials.garett.label2}</span>
          </div>
        </div>
        <div className='right'>
          <img className='testimonialPhone' src={testimonials.garett.image} />
          <img className='testimonialMagic' src={i.magic.magic8} />
        </div>
      </section>
      <section id='evanTestimonial' className='homeSection testimonial'>
        <div className='left'>
          <h2></h2>
          <p>{testimonials.evan.quote}</p>
          <div className='testimonialLabel yellow'>
            <span>{testimonials.evan.name}</span>
            <span>{testimonials.evan.label1}</span>
            <span>{testimonials.evan.label2}</span>
          </div>
        </div>
        <div className='right'>
          <img className='testimonialPhone' src={testimonials.evan.image} />
          <img className='testimonialMagic' src={i.magic.magic9} />
        </div>
      </section>
    </main>
  )
}

export default Home
