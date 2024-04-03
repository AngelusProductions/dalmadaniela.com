import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MuxPlayer from "@mux/mux-player-react";

import { paths } from "../../constants/paths.js";
import { i } from "../../constants/data/assets.js";
import testimonials from "../../constants/data/testimonials.js";

import t from "./text.js";
import "./styles/index.scss";

const Acting = () => {
  return (
    <main id="actingPage">
      <section id="actingTitle" className="actingSection">
        <video
          autoPlay
          muted
          loop
          id="actingVideo"
          src={i.videos.reelArcShoot}
        />
        <div id="actingTitleText">
          <h1>{t.title1}</h1>
          <h1>{t.title2}</h1>
          <h2>{t.title3}</h2>
          <h3>{t.subtitle}</h3>
        </div>
      </section>
      <section id="actingLanding" className="actingSection">
        <div id="actingLandingLeft">
          <h1>{t.landingTitle}</h1>
          <h2>{t.landingSubtitle}</h2>
        </div>
        <div id="actingLandingRight">
          <MuxPlayer
            id="actingLandingRightVideo"
            streamType="on-demand"
            playbackId="aNCR3LSdzqNhairwa2yBItbsme2yPOsYp33JDRgUhXY"
            metadataVideoTitle="Dalma's Reel"
            metadataViewerUserId="dalmadaniela.com"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
          <p>{t.landingVideoSubtitle}</p>
        </div>
      </section>
      <section id="actingBio" className="actingSection">
        <div id="actingBioLeft">
          <img src={i.dalma.brownBackground2} />
        </div>
        <div id="actingBioRight">
          <div className="actingBioRightSection">
            <hr />
            <div className="actingBioRightSectionText">
              <h4>{t.bioTitle1}</h4>
              <p>{t.bioSubtitle1}</p>
            </div>
          </div>
          <div className="actingBioRightSection">
            <hr />
            <div className="actingBioRightSectionText">
              <h4>{t.bioTitle2}</h4>
              <p>{t.bioSubtitle2}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Acting;
