import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from '../UI/HomeIcon'
import SuperClassPopUp from '../UI/SuperClassPopUp'

import t from './text'
import ht from '../Home/text'
import { i } from '../../constants/data/assets'
import { paths } from '../../constants/paths'
import { saveSuperClassSubscribeInfo } from '../../api/superClass'

import './styles/index.scss'

const SuperClass = () => {
  const [showThankYou, setShowThankYou] = useState(false)
  const checkoutRef = useRef()

  useEffect(() => {
    
  }, [])

  const scrollToCheckout = () => {
    checkoutRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }

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
      
      <h2>{t.withoutWasting}</h2>
      
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

      <div id='superClassSamCartWrapper' ref={checkoutRef}>
        <sc-checkout product="test-product" subdomain="dalmadaniela"></sc-checkout>
      </div>
    </main>
  )
}

export default SuperClass;
