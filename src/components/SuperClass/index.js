import React, { useRef } from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import HomeIcon from '../UI/HomeIcon'

import t from './text'
import ht from '../Home/text'
import { i } from '../../constants/data/assets'
import testimonials from '../../constants/data/testimonials'

import './styles/index.scss'

const SuperClass = () => {
  const checkoutRef = useRef()

  const scrollToCheckout = () => {
    checkoutRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <main id='superClassPage'>
      <HomeIcon />

      <h1>{t.title}</h1>
      <button id='superClassCta1' onClick={scrollToCheckout}>{t.cta1}</button>
      <ul id='superClassFeaturesList'>
        {t.superClassFeatureBullets.map(({ title, body }) => (
          <li key={title} className='superClassFeatureContainer'>
            <img src={i.icons.checkMark} />
            <b>{title}</b>
            <span>{body}</span>
          </li>
        ))}
      </ul>
      <button id='superClassCta2' onClick={scrollToCheckout}>{t.cta2}</button>
      <img id='superClassSatisfactionGuarentee' src={i.icons.satisfactionGuarentee} />
      <button id='superClassCta3' onClick={scrollToCheckout}>{t.withoutWasting}</button>
      <section id='superClassBrands'>
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
      </section>

      <Slider {...settings}>
        {Object.keys(testimonials).map(key => {
          const { id, name, label1, headshot, quote } = testimonials[key] 
          return (
            <div id={`superClassTestimonial.${id}`} className='superClassTestimonialContainer' key={id}>
              <img src={headshot} />
              <p>{quote}</p>
              <h5>{name}</h5>
              <h6>{label1}</h6>
            </div>
          ) 
        })}
      </Slider>

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

      <div id='superClassSamCartWrapper' ref={checkoutRef}>
        <sc-checkout product="test-product" subdomain="dalmadaniela"></sc-checkout>
      </div>
    </main>
  )
}

export default SuperClass;
