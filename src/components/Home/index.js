import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "animate.css/animate.min.css";

import FAQ from "./FAQ";
import Navbar from "./Navbar";

import { paths } from "../../constants/paths";
import { i } from "../../constants/data/assets";
import testimonials from "../../constants/data/testimonials";

import t from "./text.js";
import "./styles/index.scss";

const Home = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <main id="homePageContainer">
      <img
        id="homeBurgerIcon"
        src={i.icons.burger}
        className="clickable"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      />
      <Navbar />
      {showMobileMenu && (
        <>
          <div id="mobileMenuShadow" onClick={() => setShowMobileMenu(false)} />
          <Navbar burgerMenu={showMobileMenu} />
        </>
      )}
      <section
        id="landing"
        className="homeSection"
        onClick={() => setShowMobileMenu(false)}
      >
        <div className="left">
          <div id="dalmadanielaTitle">
            <h1>{t.titleTagline}</h1>
            <p>{t.titleDescription}</p>
          </div>
        </div>
        <div className="right">
          <img className="halfSection" src={i.dalma.redSweater1} alt={t.title} />
          <p id="dalmaTitle">{t.titletitle}</p>
        </div>
      </section>
      <section id="brands" className="homeSection">
        <div id="brandsHelped" className="brandsSection">
          <h3>{t.brandsHelped}</h3>
          <div className="brandLogosContainer">
            {Object.keys(i.logos.brandsHelped).map((key) => (
              <img
                src={i.logos.brandsHelped[key]}
                className="brandHelped brandLogo"
                key={key}
              />
            ))}
          </div>
        </div>
        <div id="brandsCollaborated" className="brandsSection">
          <h3>{t.brandsCollaborated}</h3>
          <div className="brandLogosContainer">
            {Object.keys(i.logos.brandsCollaborated).map((key) => (
              <img
                src={i.logos.brandsCollaborated[key]}
                className="brandCollaborated brandLogo"
                key={key}
              />
            ))}
          </div>
        </div>
        <div id="brandsFeatured" className="brandsSection">
          <h3>{t.brandsFeatured}</h3>
          <div className="brandLogosContainer">
            {Object.keys(i.logos.brandsFeatured).map((key) => (
              <a
                key={key}
                className="brandFeatured brandLogo clickable"
                href={i.logos.brandsFeatured[key].linkUrl}
                target="_blank"
              >
                <img
                  src={i.logos.brandsFeatured[key].imgUrl}
                  className="brandLogoImage"
                  key={key}
                />
              </a>
            ))}
          </div>
        </div>
      </section>
      <section id="bio" className="homeSection">
        <div id="bioLeft">
          <h2>{t.bioTitle}</h2>
          <p>{t.bioText1}</p>
          <p>{t.bioText2}</p>
          <a
            target="_blank"
            className="clickable"
            href="https://www.imdb.com/name/nm12559836/"
          >
            {t.bioButton}
          </a>
        </div>
        <div id="bioRight">
          <img id="bioBrownBackground" src={i.dalma.brownBackground} />
          <img id="bioRedSweater" src={i.dalma.redSweater2} />
        </div>
      </section>
      <section id="music" className="homeSection">
        <div id="musicLeft">
          <h2>{t.musicTitle}</h2>
          <p>{t.musicText}</p>
          <a
            to={paths.reel}
            target="_blank"
            className="clickable"
            href="https://open.spotify.com/track/1Stir6c3YO1FyinED2l40O"
          >
            {t.musicButton}
          </a>
        </div>
        <img id="bioCollage" src={i.dalma.collage} />
      </section>
      <section id="socialMedia" className="homeSection">
        <p>{t.socialMediaText}</p>
        <div id="socialMediaPhone">
          <div>
            <a href="https://www.youtube.com/user/TheDalma725" target="_blank">
              <img className="clickable" src={i.icons.youtube} />
            </a>
            <a href="https://www.instagram.com/dalma.llinas/" target="_blank">
              <img className="clickable" src={i.icons.instagram} />
            </a>
            <a
              className="clickable"
              href="https://www.facebook.com/dalmallinasconde/"
              target="_blank"
            >
              <img src={i.icons.facebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/dalma-llin%C3%A1s-5851b549/"
              target="_blank"
            >
              <img className="clickable" src={i.icons.linkedIn} />
            </a>
            <a href="https://www.threads.net/@dalma.llinas" target="_blank">
              <img className="clickable" src={i.icons.threads} />
            </a>
          </div>
          <img
            id="socialMediaInstagramPhone"
            src={i.stock.girlOnPhoneOverYellow}
          />
        </div>
      </section>
      <section id="garettTestimonial" className="homeSection testimonial">
        <div className="left">
          <h2>{t.testimonialsTitle}</h2>
          <p>{testimonials.garett.quote}</p>
          <div className="testimonialLabel pink">
            <span>{testimonials.garett.name}</span>
            <span>{testimonials.garett.label1}</span>
            <span>{testimonials.garett.label2}</span>
          </div>
        </div>
        <div className="right">
          <img className="testimonialPhone" src={testimonials.garett.phone} />
        </div>
      </section>
      <section id="evanTestimonial" className="homeSection testimonial">
        <div className="left">
          <h2></h2>
          <p>{testimonials.evan.quote}</p>
          <div className="testimonialLabel yellow">
            <span>{testimonials.evan.name}</span>
            <span>{testimonials.evan.label1}</span>
            <span>{testimonials.evan.label2}</span>
          </div>
        </div>
        <div className="right">
          <img className="testimonialPhone" src={testimonials.evan.phone} />
        </div>
      </section>
      <section id="alexTestimonial" className="homeSection testimonial">
        <div className="left">
          <h2></h2>
          <p>{testimonials.alex.quote}</p>
          <div className="testimonialLabel pink">
            <span>{testimonials.alex.name}</span>
            <span>{testimonials.alex.label1}</span>
            <span>{testimonials.alex.label2}</span>
          </div>
        </div>
        <div className="right">
          <img className="testimonialPhone" src={testimonials.alex.phone} />
        </div>
      </section>
      <section id="camiTestimonial" className="homeSection testimonial">
        <div className="left">
          <h2></h2>
          <p>{testimonials.cami.quote}</p>
          <div className="testimonialLabel yellow">
            <span>{testimonials.cami.name}</span>
            <span>{testimonials.cami.label1}</span>
            <span>{testimonials.cami.label2}</span>
          </div>
        </div>
        <div className="right">
          <img className="testimonialPhone" src={testimonials.cami.phone} />
        </div>
      </section>
      <section id="teachYou" className="homeSection">
        <img id="whiteChick" src={i.stock.whiteChick} />
        <img id="whiteChickStars" src={i.stars.starTwinklesLarge} />
        <div id="teachYouTextcontainer">
          <p id="teachYouTeachYouText">
            <span>{t.classTeach1}</span>
            <span>{t.classTeach2}</span>
            <span>{t.classTeach3}</span>
          </p>
          <p id="teachYouClassName">{t.className}</p>
          <Link
            id="teachYouClassCta"
            to={paths.superClass.page}
            className="clickable"
          >
            {t.classCta}
          </Link>
        </div>
      </section>
      <section id="faqHomeSection" className="homeSection">
        <FAQ />
      </section>
    </main>
  );
};

export default Home;
