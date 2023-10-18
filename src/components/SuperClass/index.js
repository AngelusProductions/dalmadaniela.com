import React, { useEffect, useRef } from 'react'
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import MuxPlayer from '@mux/mux-player-react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import "animate.css/animate.min.css"

import t from './text'
import { i } from '../../constants/data/assets'
import testimonials from '../../constants/data/testimonials'

import './styles/index.scss'

const SuperClass = () => {
  const containerRef = useRef()
  
  useEffect(() => {
    containerRef.current.scrollIntoView(true)
  }, [])

  return (
    <main id='superClassPage' ref={containerRef}>
      <AnimationOnScroll animateIn='animate__fadeIn'>
        <h1>{t.title}</h1>
        <MuxPlayer
          streamType="on-demand"
          primaryColor="#FFFFFF"
          secondaryColor="#000000"
          playbackId={'u01WKwIml02HnFJk6iMyt8Dan00sb00Bt2jGF6tY3mxEzJs'}
          metadataVideoTitle={t.superClassAdTrailerTitle}
          thumbnailTime={2.5}
          style={{ aspectRatio: 16/9 }}
          volume={1}
        />
      
      <a href={t.samcartUrl} id='superClassCta1' className='clickable' target="_blank">{t.cta1}</a>

      <ul id='superClassFeaturesList'>
        {t.superClassFeatureBullets.map(({ title, body }, index) => (
          <li key={title} className='superClassFeatureContainer'>
            <img src={i.icons.checkMark} />
            <b>{title}</b>
            <span>{body}</span>
          </li>
        ))}
      </ul>
      
      <div id='superClassPerfectForListContainer'>
        <h2>{t.superClassPerfectForTitle}</h2>
        <ul id='superClassPerfectForList'>
          {t.superClassPerfectForBullets.map(bullet => (
            <li key={bullet} className='superClassPerfectForContainer'>
              <img src={i.icons.checkMark} />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      <div id='superClassClassContentContainer'>
        <h2>{t.classContent.title}</h2>
        <h3>{t.classContent.subtitle1}</h3>
        <div id='superClassClassContentTechnicalitiesContainer'>
          {t.classContent.technicalities.map((technicality, index) => (
            <li className='superClassClassContentTechnicality'>
              <img src={i.icons.checkMark} />
              {technicality}
            </li>
          ))}
        </div>
        <h3>{t.classContent.subtitle2}</h3>
        <div id='superClassClassContentImportantiesContainer'>
          {t.classContent.importanties.map((importanty, index) => (
            <li className='superClassClassContentImportanty'>
              <img src={i.icons.checkMark} />
              {importanty}
            </li>
          ))}
        </div>
      </div>

      <a href={t.samcartUrl} id='superClassCta2' className='clickable' target="_blank">{t.cta2}</a>

      {/* <button id='superClassCta2' className='clickable' onClick={scrollToCheckout}>
        <span>{t.cta2Three}</span>
      </button>
      <div id='superClassPriceContainer'>
        <s>{t.cta2One}</s>
        <br />
        <span>&nbsp;{t.cta2Two}</span>
      </div>
      <img id='superClassSatisfactionGuarentee' src={i.icons.satisfactionGuarentee} />
      <button id='superClassCta3' className='clickable' onClick={scrollToCheckout}>{t.withoutWasting}</button> */}

      {/* <section id='superClassBrands'>
        <div id='brandsHelped' className='brandsSection'>
          <h3>{ht.brandsHelped}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsHelped).map(key => (
              <img src={i.logos.brandsHelped[key]} className='brandHelped brandLogo' key={key} />
            ))}
          </div>
        </div>
        <div id='brandsCollaborated' className='brandsSection'>
          <h3>{ht.brandsCollaborated}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsCollaborated).map(key => (
              <img src={i.logos.brandsCollaborated[key]} className='brandCollaborated brandLogo' key={key} />
            ))}
          </div>
        </div>
        <div id='brandsFeatured' className='brandsSection'>
          <h3>{ht.brandsFeatured}</h3>
          <div className='brandLogosContainer'>
            {Object.keys(i.logos.brandsFeatured).map(key => (
              <img src={i.logos.brandsFeatured[key]} className='brandFeatured brandLogo' key={key} />
            ))}
          </div>
          <h4>{ht.brandsFigures}</h4>
        </div>
      </section> */}
      <AnimationOnScroll animateIn='animate__fadeInUp'>
        <Carousel 
          responsive={{
            superLargeDesktop: {
              breakpoint: { max: 4000, min: 3000 },
              items: 3,
              partialVisibilityGutter: 30
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 1,
              partialVisibilityGutter: 30
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 1,
              partialVisibilityGutter: 30
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1,
              partialVisibilityGutter: 30
            }
          }}
          swipeable
          draggable
          infinite
          autoPlay
          autoPlaySpeed={3000}
          keyBoardControl
          transitionDuration={2000}
          containerClass="carousel-container"
          itemClass="carousel-item-padding-40-px"
          centerMode
        >
          {Object.keys(testimonials).map(key => {
            const { id, name, label1, label2, headshot, quote } = testimonials[key] 
            return (
              <div id={`superClassTestimonial.${id}`} className='superClassTestimonialContainer' key={id}>
                <img src={headshot} />
                <p>{quote}</p>
                <div>
                  <h4>{name}</h4>
                  <h5>{label1}</h5>
                  <h6>{label2}</h6>
                </div>
              </div>
            ) 
          })}
        </Carousel>
      </AnimationOnScroll>
      
      </AnimationOnScroll>
    </main>
  )
}

export default SuperClass;
