import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import './index.scss'

const HomeIcon = ({ text, yellow, pink }) => {
    let textColor = '#000000'
    if (yellow) textColor = '#FEFF7C'
    else if (pink) textColor = '#DA2A7D'
    return (
        <Link to={paths.home}>
            {text ? (
                <nav id='homeText' className='clickable' style={{color: textColor}}>
                    Home
                </nav>
            ) : (
                <img 
                    id='homeIcon' 
                    className='clickable' 
                    src={i.icons.home}
                />
            )}
        </Link>
    )
}

export default HomeIcon