import React from 'react'
import { Link } from 'react-router-dom'
import { scaleDown as Menu } from 'react-burger-menu'
import './index.scss'

import Navbar from './Navbar'
import { i } from '../../constants/assets'
import testimonials from '../../constants/testimonials'
import { paths } from '../../constants/routes'

const t = {
  angelusProductions: 'Angelus Productions LLC ®',
  dalmaName: 'Dalma Llinas',
  dalmaTaglines: 'Actress. Singer. Digital Strategist. Content Creator.',
  dalmaIntro: 'I am a self-made multipotentialite based in Los Angeles. I teach people how to pursue multiple passions and amplify their success by rocking their social media game.',
  
  bioTitle: 'As a digital marketer and social media  strategist',
  bioText: 'I have helped brands in the US and Colombia boost their online visibility and achieve their business objectives by creating and implementing customized social media strategies that have enhanced their engagement, conversions, and revenue from social, and more importantly, improved the image they projected to their target audience.',
  
  brandsHelped: 'Some brands I\'ve helped across the globe:',
  brandsCollaborated: 'Some brands I\'ve collaborated with on social:',
  brandsFeatured: 'As featured in:',

  filmsTitle: 'As an actress and producer',
  filmsText: 'I have used my social media influence to promote the projects that  have cast me as an actress and launch successful crowdfunding campaigns that have funded the entire pre and postproduction of my latest feature film.',
  limeAndVinegarCaption: 'Lime & Vinegar, directed by Evan Snyder',
  theSovereignCaption: 'The Sovereign, directed by Farah Y. Mourad Vera',

  socialMedia: 'Social media is the new frontier. My content strategies are crafted to make sure your potential followers enjoy the vibe of your profile with every scroll.',
  
  testimonialsTitle: 'Testimonials',
  
  classTeach1: 'And now,',
  classTeach2: 'I\'m going to',
  classTeach3: 'teach you.',
  
  classTitle: 'How to be successful on social without having to go viral',
  classDescription1: 'The only content system you\'ll ever need for your social media.',
  classDescription2: 'Become successful on social and get exactly what you want: brand awareness, conversions, bookings, reach, and authority without having to go viral, have big numbers, or invest a lot of money.',
  classDescription3: 'Only 1.1% of social videos go viral, And when they do, most of the time, they generate reach, NOT sales.',
  classDescription4: 'When you focus on creating viral content, you burn out easily and get discouraged because you focus on the outcome, not the process, and why you\'re doing this in the first place.',
  classDescription5: 'No more of that. It\'s time to destroy the myth and drop viral content off the pedestal. In this SuperClass, you\'ll learn:',
  classHowTo: [
    'How to be found by those who matter when it matters.',
    'How to create a social media strategy that works for you.',
    'How to post with purpose and provide value to your audience on autopilot.',
    'How to leverage your social media presence to grow your business and personal brand in the real world.',
  ],
  classCta: 'Get SuperClass'
}

const Home = () => {
  return (
    <div id='outer-container'>
      <Menu pageWrapId={ "page-wrap" } outerContainerId={ "outer-container" }>
        <Navbar burgerMenu />
      </Menu>
      <main id='page-wrap'>
        <img id='homeBurgerIcon' src={i.icons.burger} />
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
          <div id='filmsContainer' className='right'>
            <div id='limeAndVinegar' className='film'>
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
                  <a href='https://www.youtube.com/user/TheDalma725' target='_blank'>
                    <img className='clickable' src={i.icons.youtube} />
                  </a>
                  <a href='https://www.instagram.com/dalma.llinas/' target='_blank'>
                    <img className='clickable' src={i.icons.instagram} />
                  </a>
                  <a className='clickable' href='https://www.facebook.com/dalmallinasconde/' target='_blank'>
                    <img src={i.icons.facebook} />
                  </a>
                  <a href='https://www.linkedin.com/in/dalma-llin%C3%A1s-5851b549/' target='_blank'>
                    <img className='clickable' src={i.icons.linkedIn} />
                  </a>
                  <a href='https://www.threads.net/@dalma.llinas' target='_blank'>
                    <img className='clickable' src={i.icons.threads} />
                  </a>
                </div>
                <img id='socialMediaInstagramPhone' src={i.dalma.instagramPhone} />
                {/* <img id='socialMediaMagic' src={i.magic.magic8} /> */}
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
            {/* <img className='testimonialMagic' src={i.magic.magic8} /> */}
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
            {/* <img className='testimonialMagic' src={i.magic.magic9} /> */}
          </div>
        </section>
        <section id='alexTestimonial' className='homeSection testimonial'>
          <div className='left'>
            <h2></h2>
            <p>{testimonials.alex.quote}</p>
            <div className='testimonialLabel pink'>
              <span>{testimonials.alex.name}</span>
              <span>{testimonials.alex.label1}</span>
              <span>{testimonials.alex.label2}</span>
            </div>
          </div>
          <div className='right'>
            <img className='testimonialPhone' src={testimonials.alex.image} />
            {/* <img className='testimonialMagic' src={i.magic.magic5} /> */}
          </div>
        </section>
        <section id='camiTestimonial' className='homeSection testimonial'>
          <div className='left'>
            <h2></h2>
            <p>{testimonials.cami.quote}</p>
            <div className='testimonialLabel yellow'>
              <span>{testimonials.cami.name}</span>
              <span>{testimonials.cami.label1}</span>
              <span>{testimonials.cami.label2}</span>
            </div>
          </div>
          <div className='right'>
            <img className='testimonialPhone' src={testimonials.cami.image} />
            {/* <img className='testimonialMagic' src={i.magic.magic5} /> */}
          </div>
        </section>
        <section id='teachYou' className='homeSection'>
          <img id='whiteChick' src={i.stock.whiteChick} />
          <img id='whiteChickStars' src={i.stars.starTwinklesLarge} />
          <p>
            <span>{t.classTeach1}</span>
            <span>{t.classTeach2}</span>
            <span>{t.classTeach3}</span>
          </p>
        </section>
        <section id='classAbout' className='homeSection'>
          <img src={i.stars.starTwinklesLarge} />
          <div className='videoContainer left'>
            <h2>{t.classTitle}</h2>
            <video autoPlay loop src={i.videos.plantGrowing} />
          </div>
          <div className='right'>
            <span className='part1'>{t.classDescription1}</span>
            <span className='part2'>{t.classDescription2}</span>
            <span className='part3'>{t.classDescription3}</span>
            <span className='part4'>{t.classDescription4}</span>
            <span className='part5'>{t.classDescription5}</span>
            <ul id='classHowTo'>
              {t.classHowTo.map((howTo, index) => (
                <li key={index} className='howTo'>{howTo}</li>
              ))}
            </ul>
            <Link to={paths.superClass} id='classCta'>
              {t.classCta}
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
