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
          playsInline
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
      <section id="actingEducation" className="actingSection">
        <div id="actingEducationLeft">
          <h1>{t.educationTitle}</h1>
          <h2>{t.educationSubtitle}</h2>
        </div>
        <div id="actingEducationRight">
          <h3>{t.educationClassesTitle}</h3>
          {t.educationClasses.map((c, i) => (
            <div key={i} className="actingEducationRightClass">
              <p>{c.type}</p>
              <p>{c.title}</p>
              <p>{c.location}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="actingResume" className="actingSection">
        <div id="actingResumeLeft">
          <h1>{t.resumeTitle}</h1>
          <h2>{t.resumeSubtitle}</h2>
        </div>
        <div id="actingResumeRight">
          <img src={i.acting.resume} />
        </div>
      </section>
      <section id="actingHosting" className="actingSection">
        <div id="actingHostingLeft">
          <h1>{t.hostTitle}</h1>
          <h2>{t.hostSubtitle}</h2>
        </div>
        <div id="actingHostingRight">
          <MuxPlayer
            id="actingHostingRightVideo"
            streamType="on-demand"
            playbackId="gnpcFVPEy101Z9K4u01Nl5gT00aDejZk2X9Pl02lg01v5BAQ"
            metadataVideoTitle="Dalma's Hosting Reel"
            metadataViewerUserId="dalmadaniela.com"
            primaryColor="#FFFFFF"
            secondaryColor="#000000"
          />
        </div>
      </section>
      <section id="actingFilms" className="actingSection">
        <h1>{t.filmsTitle}</h1>
        <div id="actingFilmsBottom">
          {t.films.map((film) => (
            <div className="actingFilmsBottomFilm">
              <h3>{film.title}</h3>
              <img src={film.image} />
              <p>{film.subtitle}</p>
            </div>
          ))}
        </div>
      </section>
      <section id="actingTestimonials" className="actingSection">
        <h1>{t.testimonialsTitle}</h1>
        <div id="actingTestimonialsBottom">
          {t.testimonials.map((testimonial) => (
            <div key={i} className="actingTestimonial">
              <img src={testimonial.image} />
              <div className="actingTestimonialTextContainer">
                <b>{testimonial.director}</b>
                <p>
                  <span>{testimonial.role}</span>
                  <i>{testimonial.film}</i>
                </p>
                <p>{testimonial.testimonial}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section id="actingPress" className="actingSection">
        <h1>{t.pressTitle}</h1>
        <div id="actingPressBottom">
          {t.press.map((press) => (
            <div className="actingPress">
              <div className="actingPressTop">
                <img src={press.image} />
                <p className="actingPressTitle">{press.title}</p>
                <b className="actingPressPublication">{press.publication}</b>
                <p className="actingPressSummary">{press.summary}</p>
              </div>
              <a href={press.url} target="_blank">
                {t.pressReadMore}
              </a>
            </div>
          ))}
        </div>
      </section>
      <section id="actingContact" className="actingSection">
        <div id="actingContactTop">
          <img src={i.acting.headshot1} />
          <img src={i.acting.headshot2} />
          <img src={i.acting.headshot3} />
          <img src={i.acting.headshot4} />
        </div>
        <div id="actingContactBottom">
          <div id="actingContactBottomLeft">
            <h1>{t.contactThankYou}</h1>
          </div>
          <div id="actingContactBottomRight">
            <h5>{t.contactTitle}</h5>
            <p>{t.contactName}</p>
            <p>{t.contactEmail}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Acting;
