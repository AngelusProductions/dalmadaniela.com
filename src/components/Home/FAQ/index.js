import React, { useState } from "react";
import { Link } from "react-router-dom";

import { paths } from "../../../constants/paths";
import { i } from "../../../constants/data/assets";
import "./styles/index.scss";

const t = {
  faqShort: "FAQ",
  faqLong: "Frequently Asked Questions",
  questions: {
    one: "What is dalmadaniela.com?",
    two: "How can I work with Dalma?",
    three: "How do I hire Dalma as an actress for my film or video project?",
    four: "How can I work with Dalma to improve my branding and social media?",
    five: "Why should I choose the team at dalmadaniela.com?",
    six: "Where is dalmadaniela.com's expert digital marketing team located?",
  },
};

const FlashCard = ({ questionId, question, answer }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      key={questionId}
      id={`cardFlipContainer-${questionId}`}
      className={`cardFlipContainer ${isFlipped ? "flipped" : "normal"}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        id={`cardFlipQuestionContainer-${questionId}`}
        className={`cardFlipQuestionContainer ${
          isFlipped ? "inactive" : "active"
        }`}
      >
        <span>{question}</span>
      </div>
      <div
        id={`cardFlipAnswerContainer-${questionId}`}
        className={`cardFlipAnswerContainer ${
          isFlipped ? "active" : "inactive"
        }`}
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {answer()}
      </div>
    </div>
  );
};

const FAQ = () => {
  return (
    <main id="faq">
      <div id="faqTitleContainer">
        <div>
          <h1>{t.faqShort}</h1>
          <h2>{t.faqLong}</h2>
        </div>
        <img src={i.dalma.redSweater3} />
      </div>
      <div id="faqContainer">
        <div className="faqQuestionContainer">
          <FlashCard
            questionId="one"
            question={t.questions.one}
            answer={() => (
              <div id="faqAnswer-one" className="faqAnswer">
                <span className="one">We are a&nbsp;</span>
                <span className="two">
                  one-stop content creation shop&nbsp;
                </span>
                <span className="three">
                  for small businesses, personal brands, artists, and
                  solopreneurs looking to optimize their social media
                  experience.
                </span>
              </div>
            )}
          />
          <FlashCard
            questionId="two"
            question={t.questions.two}
            answer={() => (
              <div id="faqAnswer-two" className="faqAnswer">
                <span className="one">You can purchase a&nbsp;</span>
                <span className="two">digital solution&nbsp;</span>
                <span className="three">
                  or request a personalized one by contacting us&nbsp;
                </span>
                <span className="four">
                  <Link to={paths.services}>here</Link>
                </span>
              </div>
            )}
          />
          <FlashCard
            questionId="three"
            question={t.questions.three}
            answer={() => (
              <div id="faqAnswer-three" className="faqAnswer">
                <span className="one">You can email&nbsp;</span>
                <span className="two">
                  <a href="mailto:dalma@dalmadaniela.com">
                    dalma@dalmadaniela.com
                  </a>
                  &nbsp;
                </span>
                <span className="three">
                  for booking inquiries and rates information.
                </span>
              </div>
            )}
          />
          <FlashCard
            questionId="four"
            question={t.questions.four}
            answer={() => (
              <div id="faqAnswer-four" className="faqAnswer">
                <span className="one">
                  Once you're one of our collaborators, the team at
                  dalmadaniela.com will help you tap into what makes you who you
                  are so we can build or improve your brand based on that
                  essence. We believe in sustainable marketing, which means that
                  all the strategies we'll create for you will be&nbsp;
                </span>
                <span className="two">based on impact and revenue&nbsp;</span>
                <span className="three">
                  not on quick hacks or clickbait strategies, but on
                  change-driven marketing.
                </span>
              </div>
            )}
          />
          <FlashCard
            questionId="five"
            question={t.questions.five}
            answer={() => (
              <div id="faqAnswer-five" className="faqAnswer">
                <span className="one">
                  We realize that social media can be stressful. Our team has
                  10+ years of experience in social media marketing for all
                  kinds of businesses and has faced the troubles that brands and
                  creators encounter on social media.&nbsp;
                </span>
                <span className="two">
                  We want to make social media better for everyone by making
                  content creation easy, simple, and affordable.
                </span>
              </div>
            )}
          />
          <FlashCard
            questionId="six"
            question={t.questions.six}
            answer={() => (
              <div id="faqAnswer-six" className="faqAnswer">
                <span className="one">
                  Our multipotentialite marketing team is based in&nbsp;
                </span>
                <span className="two">Los Angeles, CA&nbsp;</span>
                <span className="three">and&nbsp;</span>
                <span className="four">London, England.</span>
              </div>
            )}
          />
        </div>
      </div>
    </main>
  );
};

export default FAQ;
