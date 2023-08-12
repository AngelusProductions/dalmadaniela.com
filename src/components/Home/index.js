import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import Navbar from './Navbar'
import SuperClassPopUp from '../UI/SuperClassPopUp'

import { i } from '../../constants/data/assets'
import { checkForReoccuringIP } from '../../api/superClass'
import testimonials from '../../constants/data/testimonials'
import { paths } from '../../constants/paths'
import t from './text.js'
import './styles/index.scss'

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showSuperClassPopUp, setShowSuperClassPopUp] = useState(false)
  const [IP, setIP] = useState(null)

  useEffect(() => {
    axios.get(t.IPUrl).then(res => {
      setIP(res.data.ip)
      checkForReoccuringIP(res.data.ip).then(isReocurringIP => {
        if(!isReocurringIP) {
          setShowSuperClassPopUp(true)
        }
      })
    })
  }, [])

  const onSuperClassPopUpSubmitClick = async () => {
    const res = await axios.get(t.IPUrl);
  }

  return (
    <main id='homePageContainer'>
      {showSuperClassPopUp && (
        <>
          <SuperClassPopUp 
            onCloseClick={() => setShowSuperClassPopUp(false)}
            onSubscribeClick={onSuperClassPopUpSubmitClick}
          />
          <div id='mobileMenuShadow'/>
        </>
      )}
      <img 
        id='homeBurgerIcon' 
        src={i.icons.burger} 
        className='clickable'
        onClick={() => setShowMobileMenu(!showMobileMenu)} 
      />
      <Navbar />
      {showMobileMenu && (
        <>
          <div id='mobileMenuShadow' onClick={() => setShowMobileMenu(false)}/>
          <Navbar burgerMenu={showMobileMenu} />
        </>
      )}
      <section id='landing' className='homeSection' onClick={() => setShowMobileMenu(false)}>
        <div className='left'>
          <img className='halfSection' src={i.dalma.landingPhoto} alt={t.dalmaName} />
          <span id='angelusProductions'>{t.angelusProductions}</span>
        </div>
        <div className='right'>
          <div id='landingRight' className='centerText'>
            <img id='landingMinifiedPhoto' className='minifiedPhoto' src={i.dalma.landingPhoto} />
            <div id='dalmaNameContainer'>
              <h1>{t.dalmaName}</h1>
              <img id='landingStarsTwinkleSmall' src={i.stars.starTwinkleSmall} />
              <img id='landingStarsTwinkleLarge' src={i.stars.starTwinklesLarge} />
            </div>
            <span>{t.dalmaTaglines}</span>
            <p>{t.dalmaIntro}</p>
          </div>
        </div>
      </section>
      <section id='bio' className='homeSection'>
        <div className='left'>
          {/* <img id='bioLeftMagic' src={i.magic.magic5} />   */}
          <div id='bioLeft' className='centerText'>
            <h2>{t.bioTitle}</h2>
            <p>{t.bioText}</p>
            <img id='bioMinifiedPhoto' className='minifiedPhoto' src={i.dalma.iVisaPhoto} />
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
          <h4>{t.brandsFigures}</h4>
        </div>
      </section>
      <section id='films' className='homeSection'>
        <div className='left'>
          <div id='filmsLeft' className='centerText'>
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
        <img id='magicAboutStars' src={i.stars.starTwinklesLarge} />
        <div className='videoContainer left'>
          <h2>{t.classTitle}</h2>
          <img id='plantGrowing' src={i.videos.plantGrowing} />
        </div>
        <div className='right'>
          <h2 id='mobileClassTitle'>{t.classTitle}</h2>
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
  )
}

export default Home