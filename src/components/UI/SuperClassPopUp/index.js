import React, { useState } from 'react'

import Countdown from '../Countdown'

import { i } from '../../../constants/data/assets'

import './index.scss'

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
    email: 'Email *',
    subscribe: 'Subscribe'
}

const SuperClassPopUp = ({ onCloseClick, onSubscribeClick }) => {
    const [email, setEmail] = useState('')

    return (
        <div id='superClassPopUpContainer'>
            <Countdown date={new Date(2023, 10, 1)}  />
            <img 
                id='superClassPopUpCloseButton' 
                className='clickable'
                src={i.icons.close} 
                onClick={onCloseClick} 
            />
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
            <span id='superClassPopUpSubHeader'>{t.subHeader}</span>
            <div id='superClassPopUpEmailContainer'>
                <label>{t.email}</label>
                <input value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <button 
                id='superClassPopUpSubscribeButton' 
                className='clickable'
                onClick={onSubscribeClick}
            
            >
                {t.subscribe}
            </button>
        </div>
    )
}

export default SuperClassPopUp