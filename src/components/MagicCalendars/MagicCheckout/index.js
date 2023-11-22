import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useNavigate } from "react-router-dom";

import Toggle from 'react-toggle'
import ReactFlagsSelect from "react-flags-select"
import { Uploader } from "uploader"
import { UploadButton } from "react-uploader"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tippy'
import 'react-tippy/dist/tippy.css'
// import { Elements } from "@stripe/react-stripe-js";
// import { loadStripe } from "@stripe/stripe-js";

import BackIcon from '../../UI/BackIcon/index.js'
import MagicColorPicker from '../MagicColorPicker/index.js'
import MagicEmojiPicker from '../MagicEmojiPicker/index.js'
import CheckoutForm from "./CheckoutForm"

import { paths } from '../../../constants/paths.js'
import { i } from '../../../constants/data/assets.js'
import { isValidUrl, isValidEmail } from '../../../utils/validators.js'
import { setMagicValues, setMagicLength } from '../../../actions/magicCalendars.js'
import { createPaymentIntent } from '../../../api/stripe.js'
// import { configureStripeKey } from '../../../utils/config.js'

import mt from '../text.js'
import t from "./text.js";
import './styles/index.scss'
 
const graphicUploader = Uploader({ apiKey: "public_W142iDU3ThB1F3k2tafDxn6HUtYJ" })
// const stripePromise = loadStripe(configureStripeKey());

const MagicCheckout = ({ 
  brandName,
  website,
  socialMedia1,
  socialMedia2,
  description,
  objective,
  brandColor1,
  brandColor2,
  brandColor3,
  brandColor4,
  brandColor5,
  brandEmoji1,
  brandEmoji2,
  brandEmoji3,
  brandEmoji4,
  brandEmoji5,
  specificTopics,
  useHolidays,
  country,
  createFromScratch,
  graphics,
  styleId,
  email,
  magicLength,
  setMagicLength,
  setMagicValues
}) => {
  const navigate = useNavigate()
  const [errors, setErrors] = useState({})
  const [isError, setIsError] = useState(false)
  const [stripeClientSecret, setStripeClientSecret] = useState(null)

  const Error = ({ type }) => {
    return errors && errors[type] && (
    <h4 className='magicCheckoutError'>{errors[type]}</h4>
  )}

  const getErrors = () => {
    let newErrors = { ...errors }
    const isSocialMediaError = (socialMedia1.length === 0 && socialMedia2.length === 0)
          || (socialMedia1.length > 0 && !isValidUrl(socialMedia1)) 
          || (socialMedia2.length > 0 && !isValidUrl(socialMedia2)) 
    
    newErrors['brandName'] = brandName ? null : t.questions.one.error
    newErrors['website'] = !website || !isValidUrl(website) ? t.questions.two.error : null
    newErrors['socialMedia'] = isSocialMediaError ? t.questions.three.error : null
    newErrors['description'] = !description ? t.questions.four.error : null
    newErrors['objective'] = !objective ? t.questions.five.error : null
    newErrors['brandColors'] = !brandColor1 && !brandColor2 && !brandColor3 && !brandColor4 && !brandColor5 ? t.questions.six.error : null
    newErrors['brandEmojis'] = !brandEmoji1 && !brandEmoji2 && !brandEmoji3 && !brandEmoji4 && !brandEmoji5 ? t.questions.seven.error : null
    newErrors['specificTopics'] = !specificTopics ? t.questions.eight.error : null
    newErrors['graphics'] = !createFromScratch && graphics.length === 0 ? t.questions.nine.error : null
    newErrors['email'] = !email || !isValidEmail(email) ? t.questions.ten.error : null

    return newErrors
  }

  useEffect(() => {
    const errors = getErrors()
    setErrors(errors)
    setIsError(Object.keys(errors).some((key) => errors[key] !== null));
  }, [
      brandName, website, socialMedia1, socialMedia2, description, objective, 
      brandColor1, brandColor2, brandColor3, brandColor4, brandColor5, brandEmoji1, 
      brandEmoji2, brandEmoji3, brandEmoji4, brandEmoji5, specificTopics, useHolidays, 
      country, createFromScratch, graphics, styleId, email
  ])

  useEffect(() => {
    // createPaymentIntent(magicLength).then((res) => {
    //   setStripeClientSecret(res.clientSecret)
    // })
  }, [magicLength])

  return (
    <main id="magicCheckoutPage">
      <BackIcon text pink path={`${paths.magicCalendars.page}/form/10`} />

      <div id="magicCheckoutTitleSectionContainer">
        <h1>{t.title}</h1>
        <div id="magicCheckoutTitleSectionWandContainer">
          <img id="magicCheckoutTitleSectionWand" src={i.stock.wand} />
          <img
            id="magicCheckoutTitleSectionWandMagic"
            src={i.stars.starTwinklesLarge}
          />
        </div>
      </div>

      <div className="magicCheckoutQuestionsContainer">
        <div className="magicCheckoutQuestion one">
          <div className="magicCheckoutQuestionInputContainer">
            <h2 className="magicCheckoutInputLabel">{t.questions.one.label}</h2>
            <input
              className="magicCheckoutInput"
              value={brandName}
              onChange={(e) => setMagicValues({ brandName: e.target.value })}
            />
            <Error type="brandName" />
          </div>
        </div>

        <div className="magicCheckoutQuestion two">
          <div className="magicCheckoutQuestionInputContainer">
            <h2 className="magicCheckoutInputLabel">{t.questions.two.label}</h2>
            <input
              className="magicCheckoutInput"
              value={website}
              onChange={(e) => setMagicValues({ website: e.target.value })}
            />
            <Error type="website" />
          </div>
        </div>

        <div className="magicCheckoutQuestion three">
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.three.label1}</h2>
            <input
              className="magicCheckoutInput"
              value={socialMedia1}
              onChange={(e) => setMagicValues({ socialMedia1: e.target.value })}
            />
          </div>
          <br />
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.three.label2}</h2>
            <input
              className="magicCheckoutInput"
              value={socialMedia2}
              onChange={(e) => setMagicValues({ socialMedia2: e.target.value })}
            />
            <Error type="socialMedia" />
          </div>
        </div>

        <div className="magicCheckoutQuestion four">
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.four.label}</h2>
            <textarea
              className="magicCheckoutTextarea"
              value={description}
              onChange={(e) => setMagicValues({ description: e.target.value })}
            />
            <Error type="description" />
          </div>
        </div>

        <div className="magicCheckoutQuestion five">
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.five.label}</h2>
            <textarea
              className="magicCheckoutTextarea"
              value={objective}
              onChange={(e) => setMagicValues({ objective: e.target.value })}
            />
            <Error type="objective" />
          </div>
        </div>

        <div className="magicCheckoutQuestion six">
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.six.label}</h2>
            <div id="magicCheckoutColorPickersContainer">
              <MagicColorPicker
                color={brandColor1}
                onColorClick={(c) => setMagicValues({ brandColor1: c.hex })}
                onColorClear={() => setMagicValues({ brandColor1: null })}
              />
              <MagicColorPicker
                color={brandColor2}
                onColorClick={(c) => setMagicValues({ brandColor2: c.hex })}
                onColorClear={() => setMagicValues({ brandColor2: null })}
              />
              <MagicColorPicker
                color={brandColor3}
                onColorClick={(c) => setMagicValues({ brandColor3: c.hex })}
                onColorClear={() => setMagicValues({ brandColor3: null })}
              />
              <MagicColorPicker
                color={brandColor4}
                onColorClick={(c) => setMagicValues({ brandColor4: c.hex })}
                onColorClear={() => setMagicValues({ brandColor4: null })}
              />
              <MagicColorPicker
                color={brandColor5}
                onColorClick={(c) => setMagicValues({ brandColor5: c.hex })}
                onColorClear={() => setMagicValues({ brandColor5: null })}
              />
            </div>
            <Error type="brandColors" />
          </div>
        </div>

        <div className="magicCheckoutQuestion seven">
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.seven.label}</h2>
            <div id="magicCheckoutEmojiPickersContainer">
              <MagicEmojiPicker
                emoji={brandEmoji1}
                onEmojiClick={(e) => setMagicValues({ brandEmoji1: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji1: null })}
              />
              <MagicEmojiPicker
                emoji={brandEmoji2}
                onEmojiClick={(e) => setMagicValues({ brandEmoji2: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji2: null })}
              />
              <MagicEmojiPicker
                emoji={brandEmoji3}
                onEmojiClick={(e) => setMagicValues({ brandEmoji3: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji3: null })}
              />
              <MagicEmojiPicker
                emoji={brandEmoji4}
                onEmojiClick={(e) => setMagicValues({ brandEmoji4: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji4: null })}
              />
              <MagicEmojiPicker
                emoji={brandEmoji5}
                onEmojiClick={(e) => setMagicValues({ brandEmoji5: e })}
                onEmojiClear={() => setMagicValues({ brandEmoji5: null })}
              />
            </div>
            <Error type="brandEmojis" />
          </div>
        </div>

        <div className="magicCheckoutQuestion eight">
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.eight.label1}</h2>
            <textarea
              className="magicCheckoutTextarea"
              value={specificTopics}
              onChange={(e) =>
                setMagicValues({ specificTopics: e.target.value })
              }
            />
            <Error type="specificTopics" />
          </div>
          <div className="magicCheckoutQuestionInputContainer">
            <h2>{t.questions.eight.label2}</h2>
            <div id="magicCheckoutQuestionEightToggleContainer">
              <Toggle
                id="toggleUseHolidays"
                onChange={() => setMagicValues({ useHolidays: !useHolidays })}
                defaultChecked={useHolidays}
              />
              {useHolidays && (
                <ReactFlagsSelect
                  selected={country}
                  onSelect={(code) => setMagicValues({ country: code })}
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="magicCheckoutQuestion nine">
        <div className="magicCheckoutQuestionInputContainer">
          <h2>{t.questions.nine.label1}</h2>
          <div id="magicCheckoutQuestionNineToggleContainer">
            <Toggle
              id="toggleCreateFromScratch"
              onChange={() =>
                setMagicValues({ createFromScratch: !createFromScratch })
              }
              defaultChecked={createFromScratch}
            />
            {!createFromScratch && graphics.length < 6 && (
              <UploadButton
                uploader={graphicUploader}
                options={{
                  multi: true,
                  maxFileCount: 6 - graphics.length,
                  maxFileSizeBytes: 524288000,
                  mimeTypes: ["image/*", "video/*"],
                }}
                onComplete={(newGraphics) => {
                  const existingUploadIds = graphics.map(
                    (g) => g.originalFile.metadata.uploadId
                  );
                  newGraphics = newGraphics.filter(
                    (g) =>
                      !existingUploadIds.includes(
                        g.originalFile.metadata.uploadId
                      )
                  );
                  setMagicValues({ graphics: [...graphics, ...newGraphics] });
                }}
                width="100%"
                height="100%"
              >
                {({ onClick }) => (
                  <button onClick={onClick} className="clickable">
                    {t.questions.nine.upload}
                  </button>
                )}
              </UploadButton>
            )}
          </div>
        </div>
        <div className="magicCheckoutQuestionInputContainer">
          {!createFromScratch && <h2>{t.questions.nine.label2}</h2>}
          {!createFromScratch && (
            <div id="magicCheckoutGraphicsContainer">
              {graphics.map((g) => {
                return (
                  <div
                    key={g.originalFile.metadata.uploadId}
                    className="magicCheckoutGraphicContainer"
                  >
                    {g.originalFile.mime.includes("image") && (
                      <img src={g.fileUrl} />
                    )}
                    {g.originalFile.mime.includes("video") && (
                      <video src={g.fileUrl} />
                    )}
                    <h4>
                      {g.originalFile.originalFileName.slice(0, 15)}
                      {g.originalFile.originalFileName.length > 15 && "..."}
                    </h4>
                    <FontAwesomeIcon
                      icon={faClose}
                      color={"#DA2A7D"}
                      className="magicCheckoutGraphicCloseIcon clickable"
                      onClick={() => {
                        setMagicValues({
                          graphics: graphics.filter(
                            (graphic) =>
                              graphic.originalFile.metadata.uploadId !==
                              g.originalFile.metadata.uploadId
                          ),
                        });
                      }}
                    />
                  </div>
                );
              })}
              <Error type="graphics" />
            </div>
          )}
        </div>
      </div>

      <div className="magicCheckoutQuestion ten">
        <div className="magicCheckoutQuestionInputContainer">
          <h2>{t.questions.ten.label1}</h2>
          <div id="magicCheckoutQuestionTenRadioContainer">
            {t.questions.ten.options.map((o) => (
              <Tooltip
                key={o.id}
                className="styleTooltip"
                title={o.tooltip}
                position="bottom"
                delay={300}
                hideDelay={1000}
                animation="perspective"
                arrowSize="small"
                stickyDuration={100}
                theme="dark"
                arrow
                inertia
                sticky
                touchHold
                size="regular"
              >
                <div
                  className="magicCheckoutQuestionTenRadio clickable"
                  onClick={() => setMagicValues({ styleId: o.id })}
                >
                  <input
                    type="radio"
                    value={o.id}
                    checked={styleId === o.id}
                    onChange={() => {}}
                  />
                  <label htmlFor={o.id}>{o.name}</label>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>
        <div className="magicCheckoutQuestionInputContainer">
          <h2>{t.questions.ten.label2}</h2>
          <input
            className="magicCheckoutInput"
            value={email}
            onChange={(e) => setMagicValues({ email: e.target.value })}
          />
          <Error type="email" />
        </div>
      </div>

      <div id="chooseSectionSelectionsContainer">
        <div className="chooseSectionSelection">
          <div className="chooseSectionSelectionTitleContainer">
            <h3>{mt.chooseSection.options.one.title}</h3>
            <h2>{mt.chooseSection.options.one.price}</h2>
            <hr />
            <div className="chooseSectionSelectionDescription">
              <span>{mt.chooseSection.options.one.description.choice}</span>
              <span>{mt.chooseSection.options.one.description.inbox}</span>
              <span>{mt.chooseSection.options.one.description.time}</span>
            </div>
          </div>
          <input
            type="radio"
            checked={magicLength === "month"}
            onClick={() => setMagicLength("month")}
          />
        </div>
        <div className="chooseSectionSelection">
          <div className="chooseSectionSelectionTitleContainer">
            <h3>{mt.chooseSection.options.two.title}</h3>
            <h2>{mt.chooseSection.options.two.price}</h2>
            <hr />
            <div className="chooseSectionSelectionDescription">
              <span>{mt.chooseSection.options.two.description.choice}</span>
              <span>{mt.chooseSection.options.two.description.inbox}</span>
              <span>{mt.chooseSection.options.two.description.time}</span>
            </div>
          </div>
          <input
            type="radio"
            checked={magicLength === "year"}
            onClick={() => setMagicLength("year")}
          />
        </div>
      </div>

      <button
        id="magicCheckoutSubmitButton"
        className={`magicButton ${isError ? "disabled" : "clickable"}`}
        onClick={() => navigate(paths.magicCalendars.success)}
      >
        {isError ? t.error : t.cta}
      </button>

      {/* {stripeClientSecret && (
        <Elements
          stripe={stripePromise}
          options={{
            clientSecret: stripeClientSecret,
            appearance: {
              theme: "stripe",
              variables: {
                colorText: "#DA2A7D",
                borderRadius: "15px",
                colorIcon: "#56c035",
                spacingGridRow: "25px",
                fontFamily: "Trebuchet MS, sans-serif",
                focusOutline: "#DA2A7D",
                focusBoxShadow: "#DA2A7D",
              },
            },
          }}
        >
          <CheckoutForm isError={isError} />
        </Elements>
      )} */}
    </main>
  );
}

const mapState = state => {
  return {
    brandName: state.magicCalendars.brandName,
    website: state.magicCalendars.website,
    socialMedia1: state.magicCalendars.socialMedia1,
    socialMedia2: state.magicCalendars.socialMedia2,
    description: state.magicCalendars.description,
    objective: state.magicCalendars.objective,
    brandColor1: state.magicCalendars.brandColor1,
    brandColor2: state.magicCalendars.brandColor2,
    brandColor3: state.magicCalendars.brandColor3,
    brandColor4: state.magicCalendars.brandColor4,
    brandColor5: state.magicCalendars.brandColor5,
    brandEmoji1: state.magicCalendars.brandEmoji1,
    brandEmoji2: state.magicCalendars.brandEmoji2,
    brandEmoji3: state.magicCalendars.brandEmoji3,
    brandEmoji4: state.magicCalendars.brandEmoji4,
    brandEmoji5: state.magicCalendars.brandEmoji5,
    specificTopics: state.magicCalendars.specificTopics,
    useHolidays: state.magicCalendars.useHolidays,
    country: state.magicCalendars.country,
    createFromScratch: state.magicCalendars.createFromScratch,
    graphics: state.magicCalendars.graphics,
    styleId: state.magicCalendars.styleId,
    email: state.magicCalendars.email,
    magicLength: state.magicCalendars.magicLength,
  }
}

const mapDispatch = dispatch => ({
  setMagicValues: async valuePairs => {
    dispatch(setMagicValues(valuePairs))
  },
  setMagicLength: async length => {
    dispatch(setMagicLength(length))
  }
})

export default connect(mapState, mapDispatch)(MagicCheckout)
