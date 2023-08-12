import React from 'react'
import ReactCountdown from 'react-countdown'

import './styles/index.scss'

const t = {
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds'
}

const Countdown = ({ date }) => {
    return (
        <ReactCountdown
            date={date}
            renderer={({ days, hours, minutes, seconds })  => (
                <div id='countdownContainer'>
                    <div className='countdownSection'>
                        <span className='countdownSectionValue'>{days}</span>
                        <span className='countdownSectionLabel'>{t.days}</span>
                    </div>
                    <div className='countdownSection'>
                        <span className='countdownSectionValue'>{hours}</span>
                        <span className='countdownSectionLabel'>{t.hours}</span>
                    </div>
                    <div className='countdownSection'>
                        <span className='countdownSectionValue'>{minutes}</span>
                        <span className='countdownSectionLabel'>{t.minutes}</span>
                    </div>
                    <div className='countdownSection'>
                        <span className='countdownSectionValue'>{seconds}</span>
                        <span className='countdownSectionLabel'>{t.seconds}</span>
                    </div>
                </div>
            )}
        />
    )
}

export default Countdown