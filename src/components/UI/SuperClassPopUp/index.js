import React, { useState } from 'react'

import Countdown from '../Countdown'

import { i } from '../../../constants/data/assets'

import './styles/index.scss'

const t = {
    header: {
        1: 'Grow with our ',
        2: 'SuperClass.',
        3: 'Sign up ',
        4: 'today',
        5: ' and save ',
        6: '15%',
        7: " when it's released!",
        8: 'ALMOST FULL!'
    },
    name: 'Name',
    email: 'Email *',
    subscribe: 'Subscribe',
    thankYou1: 'Thank you for subscribing!',
    thankYou2: "We'll get in touch with you shortly.",
}

const SuperClassPopUp = ({ onCloseClick, onSubscribeClick, showThankYou, showCloseButton = true }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [validationError, setValidationError] = useState(null)
    
    return showThankYou ? (
        <div id='superClassPopUpContainer' className='thankYou'>
            {showCloseButton && (
                <img 
                    id='superClassPopUpCloseButton' 
                    className='clickable'
                    src={i.icons.close} 
                    onClick={onCloseClick} 
                />
            )}
            <span className='thankYou1'>{t.thankYou1}</span>
            <span className='thankYou2'>{t.thankYou2}</span>
        </div>
    ) : (
        <div id='superClassPopUpContainer'>
            <Countdown date={new Date(2023, 10, 1)}  />
            {showCloseButton && (
                <img 
                    id='superClassPopUpCloseButton' 
                    className='clickable'
                    src={i.icons.close} 
                    onClick={onCloseClick} 
                />
            )}
            <div id='superClassPopUpHeaderContainer'>
                <div id='superClassPopUpHeaderSection1'>
                    {Object.keys(t.header).slice(0, 2).map(key => (
                        <span key={key} id={key}>
                            {t.header[key]}
                        </span>
                    ))}
                </div>
                {Object.keys(t.header).slice(2).map(key => (
                    <span key={key} id={key}>
                        {t.header[key]}
                    </span>
                ))}
            </div>
            <div id='superClassPopUpNameContainer'>
                <label>{t.name}</label>
                <input value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div id='superClassPopUpEmailContainer'>
                <label>{t.email}</label>
                <input value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            {validationError && <span id='superClassPopUpValidationError'>{validationError}</span>}
            <button 
                id='superClassPopUpSubscribeButton' 
                className='clickable'
                onClick={() => {
                    if (email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/))
                        onSubscribeClick(name, email)
                    else 
                        setValidationError('Invalid email :/')
                }}
            >
                {t.subscribe}
            </button>
        </div>
    )
}

export default SuperClassPopUp