import React from 'react'
import { Link } from 'react-router-dom'

import { i } from '../../../constants/data/assets'

import './index.scss'

const BackIcon = ({ path, text, pink = false, yellow = false }) => {
    let src = i.icons.backBlack
    if(pink) src = i.icons.backPink
    else if (yellow) src = i.icons.backYellow

    let textColor = '#000000'
    if (yellow) textColor = '#FEFF7C'
    else if (pink) textColor = '#DA2A7D'

    return (
        <Link to={path}>
            {text ? (
                <nav id='backText' className='clickable' style={{color: textColor}}>
                    Back
                </nav>
            ) : (
                <img 
                    id='backIcon' 
                    className='clickable' 
                    src={src}
                />
            )}
        </Link>
    )
}

export default BackIcon