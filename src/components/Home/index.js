import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Animator, ScrollContainer, ScrollPage } from "react-scroll-motion"
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css"

import FAQ from './FAQ'
import Navbar from './Navbar'

import { paths } from '../../constants/paths'
import { i } from '../../constants/data/assets'
import { useWindowDimensions } from '../../constants/hooks'
import testimonials from '../../constants/data/testimonials'
import { ZoomInUp, SlideInOutLeft, SlideInOutRight, SlideUp, SlideDown } from '../../constants/animations'

import t from './text.js'
import './styles/index.scss'


const Home = () => {
  const { width } = useWindowDimensions();
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })

    
  }, [])

  return (
    <main id='homePageContainer'>
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
      <ScrollContainer>
        <section id='landing' className='homeSection' onClick={() => setShowMobileMenu(false)}>
          <div className='left'>
            <img className='halfSection' src={i.stock.groupOfPeopleInCircle} alt={t.title} />
            <span id='angelusProductions'>{t.angelusProductions}</span>
          </div>
          <div className='right'>
            <img id='landingMinifiedBackground' src={i.stock.groupOfPeopleInCircle} />
            <div id='dalmadanielaTitle'>
          <AnimationOnScroll duration={2} animateIn='animate__fadeIn'>
              <div id='dalmadanielaLogoContainer'>
                  <img id='dalmadanielaTitleFaceIcon' src={i.icons.face} />
                {/* <h3>{t.title}</h3> */}
                {/* <img id='landingStarsTwinkleLarge' src={i.stars.starTwinklesLarge} /> */}
              </div>
              <h1>{t.titleTagline}</h1>
              <p>{t.titleDescription}</p>
                </AnimationOnScroll>
            </div>
          </div>
        </section>
        <section id='bio' className='homeSection'>
          <ScrollPage>
            <div className='left'>
              <div id='bioLeft' className='centerText'>
                <Animator animation={ZoomInUp}>
                  <h2>{t.bioTitle}</h2>
                </Animator>
                <Animator animation={SlideInOutLeft}>
                  <p>
                    {t.bioText1}
                    <Link to={paths.superClass.page}>
                      {t.bioText2}
                    </Link>
                    {t.bioText3}
                  </p>
                </Animator>
                <img id='bioMinifiedPhoto' className='minifiedPhoto' src={i.dalma.iVisaPhoto} />
              </div>
            </div>
            <div className='right'>
              <img className='halfSection' src={i.dalma.iVisaPhoto} alt={t.title} />
            </div>
          </ScrollPage>
        </section>
        <section id='brands' className='homeSection'>
          <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
            <div id='brandsHelped' className='brandsSection'>
              <h3>{t.brandsHelped}</h3>
              <div className='brandLogosContainer'>
                {Object.keys(i.logos.brandsHelped).map(key => (
                  <img src={i.logos.brandsHelped[key]} className='brandHelped brandLogo' key={key} />
                ))}
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInRightBig'>
            <div id='brandsCollaborated' className='brandsSection'>
              <h3>{t.brandsCollaborated}</h3>
              <div className='brandLogosContainer'>
                {Object.keys(i.logos.brandsCollaborated).map(key => (
                  <img src={i.logos.brandsCollaborated[key]} className='brandCollaborated brandLogo' key={key} />
                ))}
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
            <div id='brandsFeatured' className='brandsSection'>
              <h3>{t.brandsFeatured}</h3>
              <div className='brandLogosContainer'>
                {Object.keys(i.logos.brandsFeatured).map(key => (
                  <img src={i.logos.brandsFeatured[key]} className='brandFeatured brandLogo' key={key} />
                ))}
              </div>
              <h4><Link to={paths.superClass.page}>{t.brandsFigures}</Link></h4>
            </div>
          </AnimationOnScroll>
        </section>
        <section id='films' className='homeSection'>
          <ScrollPage>
            <div className='left'>
              <div id='filmsLeft' className='centerText'>
                <Animator animation={ZoomInUp}>
                  <h2>{t.filmsTitle}</h2>
                </Animator>
                <Animator animation={SlideInOutLeft}>
                  <p>{t.filmsText}</p>
                </Animator>
              </div>
            </div>
            <div id='filmsContainer' className='right'>
              <Animator animation={width <= 640 ? SlideInOutRight : SlideDown}>
                <div id='limeAndVinegar' className='film'>
                  <img src={i.films.limeAndVinegar} />
                  <span>{t.limeAndVinegarCaption}</span>
                </div>
              </Animator>
              <Animator animation={width <= 640 ? SlideInOutLeft : SlideUp}>
                <div id='theSovereign' className='film'>
                  <img src={i.films.theSovereign} />
                  <span>{t.theSovereignCaption}</span>
                </div>
              </Animator>
            </div>
          </ScrollPage>
        </section>
        <section id='socialMedia' className='homeSection'>
          <ScrollPage>  
            <div className='left'> 
              <img src={i.stock.phoneAtCoffeeShop} alt={t.title} />
            </div>
            <div className='right'>
              <div id='socialMediaRight'>
                <Animator animation={SlideDown}>
                  <p>
                    {t.socialMediaText1}
                    <Link to={paths.superClass.page}>
                      {t.socialMediaText2}
                    </Link>
                    {t.socialMediaText3}
                  </p>
                </Animator>
                <Animator animation={SlideUp}>
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
                    <img id='socialMediaInstagramPhone' src={i.stock.girlOnPhoneOverYellow} />
                  </div>
                </Animator>
              </div>
            </div>
          </ScrollPage> 
        </section>
        <section id='garettTestimonial' className='homeSection testimonial'>
          <ScrollPage>
          <div className='left'>
            <Animator animation={SlideInOutRight}>
              <h2>{t.testimonialsTitle}</h2>
            </Animator>
            <AnimationOnScroll duration={2} animateIn='animate__fadeIn'>
              <p>{testimonials.garett.quote}</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
              <div className='testimonialLabel pink'>
                <span>{testimonials.garett.name}</span>
                <span>{testimonials.garett.label1}</span>
                <span>{testimonials.garett.label2}</span>
              </div>
            </AnimationOnScroll>
            </div>
            <div className='right'>
            <AnimationOnScroll animateIn='animate__fadeInRightBig'>
              <img className='testimonialPhone' src={testimonials.garett.phone} />
            </AnimationOnScroll>
            </div>
          </ScrollPage>
        </section>
        <section id='evanTestimonial' className='homeSection testimonial'>
          <div className='left'>
            <h2></h2>
            <AnimationOnScroll duration={2} animateIn='animate__fadeIn'>
              <p>{testimonials.evan.quote}</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
              <div className='testimonialLabel yellow'>
                <span>{testimonials.evan.name}</span>
                <span>{testimonials.evan.label1}</span>
                <span>{testimonials.evan.label2}</span>
              </div>
            </AnimationOnScroll>
          </div>
          <div className='right'>
            <AnimationOnScroll animateIn='animate__fadeInRightBig'>
              <img className='testimonialPhone' src={testimonials.evan.phone} />
            </AnimationOnScroll>
          </div>
        </section>
        <section id='alexTestimonial' className='homeSection testimonial'>
          <div className='left'>
            <h2></h2>
            <AnimationOnScroll duration={2} animateIn='animate__fadeIn'>
              <p>{testimonials.alex.quote}</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
              <div className='testimonialLabel pink'>
                <span>{testimonials.alex.name}</span>
                <span>{testimonials.alex.label1}</span>
                <span>{testimonials.alex.label2}</span>
              </div>
            </AnimationOnScroll>
          </div>
          <div className='right'>
            <AnimationOnScroll animateIn='animate__fadeInRightBig'>
              <img className='testimonialPhone' src={testimonials.alex.phone} />
            </AnimationOnScroll>
          </div>
        </section>
        <section id='camiTestimonial' className='homeSection testimonial'>
          <div className='left'>
            <h2></h2>
            <AnimationOnScroll duration={2} animateIn='animate__fadeIn'>
              <p>{testimonials.cami.quote}</p>
            </AnimationOnScroll>
            <AnimationOnScroll animateIn='animate__fadeInLeftBig'>
              <div className='testimonialLabel yellow'>
                <span>{testimonials.cami.name}</span>
                <span>{testimonials.cami.label1}</span>
                <span>{testimonials.cami.label2}</span>
              </div>
            </AnimationOnScroll>
          </div>
          <div className='right'>
            <AnimationOnScroll animateIn='animate__fadeInRightBig'>
              <img className='testimonialPhone' src={testimonials.cami.phone} />
            </AnimationOnScroll>
          </div>
        </section>
        <section id='teachYou' className='homeSection'>
          <AnimationOnScroll duration={4} animateIn='animate__fadeIn'>
            <img id='whiteChick' src={i.stock.whiteChick} />
          </AnimationOnScroll>
          <img id='whiteChickStars' src={i.stars.starTwinklesLarge} />
          <div id='teachYouTextcontainer'>
            <p id='teachYouTeachYouText'>
              <span>{t.classTeach1}</span>
              <span>{t.classTeach2}</span>
              <span>{t.classTeach3}</span>
            </p>
            <p id='teachYouClassName'>{t.className}</p>
            <Link 
              id='teachYouClassCta'
              to={paths.superClass.page} 
              className='clickable'
            >{t.classCta}</Link>
          </div>
        </section>
        <section id='faqHomeSection' className='homeSection'>
          <FAQ />
        </section>
      </ScrollContainer>
    </main>
  )
}

export default Home