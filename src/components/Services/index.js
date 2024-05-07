import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import MuxPlayer from "@mux/mux-player-react";

import { i } from "../../constants/data/assets";
import { paths } from "../../constants/paths";
import testimonials from "../../constants/data/testimonials";

import HomeIcon from "../UI/HomeIcon";

import t from "./text";
import "./styles/index.scss";

const Services = () => {
  const plansAndPricesRef = useRef();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main id="servicesPage">
      {/* <HomeIcon text pink /> */}
      <section id="servicesTitleSection">
        <div id="servicesTitleLeft">
          <h1>{t.title}</h1>
          <p>{t.titleSubtitle}</p>
          <button
            className="clickable"
            onClick={() =>
              plansAndPricesRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            {t.titleButton}
          </button>
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
            autoPlay
            muted
          />
        </div>
      </section>
      <section id="servicesUgcSection" className="servicesSection">
        <div id="servicesUgcLeft" className="servicesSectionLeft">
          <video 
            id="servicesUgcVideo" 
            src={i.videos.magicCalendarsAd} 
            autoPlay
            muted
            loop
            controls
          />
        </div>
        <div id="servicesUgcRight" className="servicesSectionRight">
          <label>{t.ugcLabel}</label>
          <h2>{t.ugcTitle}</h2>
          <div id="servicesUgcDescription" className="servicesDescription">
            <p>{t.ugcDescription1}</p>
            <p>{t.ugcDescription2}</p>
          </div>
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
      <section id="servicesPlanSection">
        <h3>{t.accelerationProgram}</h3>
        <ul id="servicesPlanBulletList">
          <li className="servicesPlanBullet">
            <img src={i.icons.checkMark} />
            <span>{t.accelerationProgramBullets.one}</span>
          </li>
          <ul id="servicesPlanBulletOneList">
            {t.accelerationProgramBullets.oneBullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
            <li>
              {t.accelerationProgramBullets.oneLastBullet.one}
              <a
                href="https://drive.google.com/file/d/1uL1KlVVF82Vp1zjrlTfJSYNefAkiOS9r/view?usp=sharing"
                target="_blank"
              >
                <u>{t.accelerationProgramBullets.oneLastBullet.two}</u>
              </a>
              {t.accelerationProgramBullets.oneLastBullet.three}
            </li>
          </ul>
          <li className="servicesPlanBullet">
            <img src={i.icons.checkMark} />
            <span>{t.accelerationProgramBullets.two}</span>
          </li>
          <li className="servicesPlanBullet">
            <img src={i.icons.checkMark} />
            <span>{t.accelerationProgramBullets.three}</span>
          </li>
          <li className="servicesPlanBullet">
            <img src={i.icons.checkMark} />
            <span>{t.accelerationProgramBullets.four}</span>
          </li>
        </ul>
      </section>
      <section id="servicesPlansAndPricesSection" ref={plansAndPricesRef}>
        <h3>{t.plansAndPricesTitle}</h3>
        <div id="servicesPlansAndPricesContainer">
          <div className="servicesPlansAndPrices">
            <div className="servicesPlansAndPricesContent">
              <h4>{t.planOne.title}</h4>
              <label>{t.planOne.price}</label>
              <p>{t.planOne.description}</p>
              <ul className="servicesPlansAndPricesList">
                {t.planOne.bullets.map((bullet, i) => (
                  <li className="servicesPlansAndPricesItem" key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://buy.stripe.com/14k9Ebc5k7s3aXu5kn"
              className="checkoutButton clickable"
              target="_blank"
            >
              {t.planOne.cta}
            </a>
          </div>
          <div className="servicesPlansAndPrices">
            <div className="servicesPlansAndPricesContent">
              <h4>{t.planTwo.title}</h4>
              <label>{t.planTwo.price}</label>
              <p>{t.planTwo.description}</p>
              <ul className="servicesPlansAndPricesList">
                {t.planTwo.bullets.map((bullet, i) => (
                  <li className="servicesPlansAndPricesItem" key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://buy.stripe.com/5kA2bJ1qG3bNfdK8wA"
              target="_blank"
              className="checkoutButton clickable"
            >
              {t.planTwo.cta}
            </a>
          </div>
          <div className="servicesPlansAndPrices">
            <div className="servicesPlansAndPricesContent">
              <h4>{t.planThree.title}</h4>
              <label>{t.planThree.price}</label>
              <p>{t.planThree.description}</p>
              <ul className="servicesPlansAndPricesList">
                {t.planThree.bullets.map((bullet, i) => (
                  <li className="servicesPlansAndPricesItem" key={i}>
                    {bullet}
                  </li>
                ))}
                <li className="servicesPlansAndPricesItem">
                  {t.planThree.lastBullet.one}
                  <a
                    href="https://drive.google.com/file/d/1uL1KlVVF82Vp1zjrlTfJSYNefAkiOS9r/view?usp=sharing"
                    target="_blank"
                  >
                    <u>{t.planThree.lastBullet.two}</u>
                  </a>
                  {t.planThree.lastBullet.three}
                </li>
              </ul>
            </div>
            <a
              href="https://buy.stripe.com/cN23fN8T827Jd5CaEG"
              className="checkoutButton clickable"
              target="_blank"
            >
              {t.planThree.cta}
            </a>
          </div>
          <div className="servicesPlansAndPrices">
            <div className="servicesPlansAndPricesContent">
              <h4>{t.planFour.title}</h4>
              <label>{t.planFour.price}</label>
              <p>{t.planFour.description}</p>
              <ul className="servicesPlansAndPricesList">
                {t.planFour.bullets.map((bullet, i) => (
                  <li className="servicesPlansAndPricesItem" key={i}>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            <a
              href="https://buy.stripe.com/28o2bJ8T84fRc1y8wx"
              target="_blank"
              className="checkoutButton clickable"
            >
              {t.planFour.cta}
            </a>
          </div>
        </div>
      </section>
      <section id="servicesUgcPackagesSection">
        <div id="servicesUgcPackagesLeft" className="servicesUgcPackage">
          <h4>
            <span className="servicesUgcTitleNumber">
              {t.ugcPackagesLeft.title1}
            </span>
            &nbsp;
            {t.ugcPackagesLeft.title2}
          </h4>
          <label>{t.ugcPackagesLeft.price}</label>
          <p>{t.ugcPackagesLeft.description}</p>
          <ul className="servicesUgcPackagesList">
            {t.ugcPackagesLeft.bullets.map((bullet, i) => (
              <li className="servicesUgcPackagesListItem" key={i}>
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href="https://buy.stripe.com/9AQg2zc5keUve9G9AF"
            className="checkoutButton clickable"
            target="_blank"
          >
            {t.ugcPackagesLeft.cta}
          </a>
        </div>
        <video
          id="servicesUgcPackagesVideo"
          src={i.videos.ugcVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div id="servicesUgcPackagesRight" className="servicesUgcPackage">
          <h4>
            <span className="servicesUgcTitleNumber">
              {t.ugcPackagesRight.title1}
            </span>
            &nbsp;
            {t.ugcPackagesRight.title2}
          </h4>
          <label>{t.ugcPackagesRight.price}</label>
          <p>{t.ugcPackagesRight.description}</p>
          <ul className="servicesUgcPackagesList">
            {t.ugcPackagesRight.bullets.map((bullet, i) => (
              <li className="servicesUgcPackagesListItem" key={i}>
                {bullet}
              </li>
            ))}
          </ul>
          <a
            href="https://buy.stripe.com/7sI2bJ8T87s39TqeV0"
            className="checkoutButton clickable"
            target="_blank"
          >
            {t.ugcPackagesRight.cta}
          </a>
        </div>
      </section>
      <section id="servicesGarettTestimonial" className="servicesTestimonial">
        <div className="left">
          <p>{testimonials.garett.quote}</p>
          <div className="testimonialLabel">
            <span>{testimonials.garett.name}</span>
            <span>{testimonials.garett.label1}</span>
            <span>{testimonials.garett.label2}</span>
          </div>
        </div>
        <div className="right">
          <img className="testimonialPhone" src={testimonials.garett.phone} />
        </div>
      </section>
      <section id="servicesAlexTestimonial" className="servicesTestimonial">
        <div className="left">
          <p>{testimonials.alex.quote}</p>
          <div className="testimonialLabel">
            <span>{testimonials.alex.name}</span>
            <span>{testimonials.alex.label1}</span>
            <span>{testimonials.alex.label2}</span>
          </div>
        </div>
        <div className="right">
          <img className="testimonialPhone" src={testimonials.alex.phone} />
        </div>
      </section>
      <section id="servicesContactSection">
        <div id="servicesContactLeft">
          {/* <h4>{t.contactTitle1}</h4> */}
          <h3>{t.contactTitle2}</h3>
          <h3>{t.contactTitle3}</h3>
          <p id="servicesContactDescription">{t.contactDescription}</p>
          <p id="servicesContactTagline">{t.contactTagline}</p>
          <div id="servicesContactButtons">
            <div className="servicesContactButton">
              <span>{t.contactPhone}</span>
              <img src={i.icons.arrow} />
            </div>
            <div className="servicesContactButton">
              <span>{t.contactEmail}</span>
              <img src={i.icons.arrow} />
            </div>
            <div className="servicesContactButton">
              <Link to={paths.contactUs}>
                <u>{t.contactLink}</u>
              </Link>
              <img src={i.icons.arrow} />
            </div>
          </div>
        </div>
        <div id="servicesContactRight">
          <img src={i.services.socialMediaGrid} />
        </div>
      </section>
    </main>
  );
};

export default Services;
