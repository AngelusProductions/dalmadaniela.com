import React from 'react'
import { Link } from 'react-router-dom'
import MuxPlayer from "@mux/mux-player-react";

import { i } from '../../constants/data/assets'
import { paths } from '../../constants/paths'

import HomeIcon from '../UI/HomeIcon'

import t from './text'
import './styles/index.scss'

const Services = () => {
  return (
    <main id="servicesPage">
      <HomeIcon text pink />
      <section id="servicesTitleSection">
        <div id="servicesTitleLeft">
          <h1>{t.title}</h1>
          <p>{t.titleSubtitle}</p>
          <button className="clickable">{t.titleButton}</button>
        </div>
        <div id="servicesTitleRight">
          <MuxPlayer
            id="servicesTitleVideo"
            streamType="on-demand"
            playbackId="t9cYrn7O8WUVSmlZOifaP1MAPbNJKLjkKmHVrlkspFQ"
            metadataVideoTitle="Angelus Productions Promo"
            metadataViewerUserId="dalmadaniela.com"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
            thumbnailTime={117}
          />
        </div>
      </section>
      <section id="servicesBrandSection" className="servicesSection">
        <div id="servicesBrandLeft" className="servicesSectionLeft">
          <img id="servicesBrandColorPallette" src={i.services.colorPallette} />
          <img id="servicesBrandBusinessCards" src={i.services.businessCards} />
        </div>
        <div id="servicesBrandRight" className="servicesSectionRight">
          <label>{t.brandLabel}</label>
          <h2>{t.brandTitle}</h2>
          <div id="servicesBrandDescription" className="servicesDescription">
            <p>{t.brandDescription1}</p>
            <p>{t.brandDescription2}</p>
            <p>{t.brandDescription3}</p>
          </div>
        </div>
      </section>
      <section id="servicesDigitalSection" className="servicesSection">
        <div id="servicesDigitalLeft" className="servicesSectionLeft">
          <img id="servicesDigitalPodcast" src={i.services.arianaPodcast} />
        </div>
        <div id="servicesDigitalRight" className="servicesSectionRight">
          <label>{t.digitalLabel}</label>
          <h2>{t.digitalTitle}</h2>
          <div id="servicesDigitalDescription" className="servicesDescription">
            <p>{t.digitalDescription1}</p>
            <p>{t.digitalDescription2}</p>
          </div>
        </div>
      </section>
      <section id="servicesAccelerationSection" className="servicesSection">
        <div id="servicesAccelerationLeft" className="servicesSectionLeft">
          <img id="servicesAccelerationPodcast" src={i.services.podcastGirl} />
        </div>
        <div id="servicesAccelerationRight" className="servicesSectionRight">
          <label>{t.accelerationLabel}</label>
          <h2>{t.accelerationTitle}</h2>
          <div
            id="servicesAccelerationDescription"
            className="servicesDescription"
          >
            <p>{t.accelerationDescription1}</p>
            <p>{t.accelerationDescription2}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services
