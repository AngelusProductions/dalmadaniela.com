import React from 'react'
import { Link } from 'react-router-dom'

import { i } from '../../../constants/data/assets'

import './index.scss'

const BackIcon = ({ path, pink = false, yellow = false }) => {
    let src = i.icons.backBlack

    if(pink)
        src = i.icons.backPink
    else if (yellow)
        src = i.icons.backYellow

    return (
        <Link to={path}>
            <img 
                id='backIcon' 
                className='clickable' 
                src={src}
            />
        </Link>
    )
}

export default BackIcon