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
      <section id="servicesBrandSection">
      <div id="servicesBrandLeft">
        <img id="servicesBrandColorPallette" src={i.services.colorPallette} />
        <img id="servicesBrandBusinessCards" src={i.services.businessCards} />
      </div>
        <div id="servicesBrandRight">
          <label>{t.brandLabel}</label>
          <h2>{t.brandTitle}</h2>
          <div id="servicesBrandDescription">
            <p>{t.brandDescription1}</p>
            <p>{t.brandDescription2}</p>
            <p>{t.brandDescription3}</p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Services
