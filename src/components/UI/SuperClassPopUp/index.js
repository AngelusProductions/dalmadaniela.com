import React, { useState, useEffect } from 'react'

import './index.scss'

const t = {
    header: {
        1: 'Grow up with our ',
        2: 'SuperClass.',
        3: 'Sign up ',
        4: 'today',
        5: ' and save ',
        6: '15%',
        7: " when it's released!",
    },
    subHeader: 'ALMOST FULL!',
    email: 'Email *',
    subscribe: 'Subscribe'
}

const SuperClassPopUp = ({ setClose}) => {
    const [email, setEmail] = useState('')

    const onSubscribeClick = () => {

    }

    return (
        <div id='superClassPopUpContainer'>
            <div id='superClassPopUpHeaderContainer'>
                {Object.keys(t.header).map(key => (
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

        </div>
    )
}

export default SuperClassPopUp