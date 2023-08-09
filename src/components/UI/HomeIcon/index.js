import React from 'react'
import { Link } from 'react-router-dom'

import { paths } from '../../../constants/paths'
import { i } from '../../../constants/data/assets'

import './index.scss'

const HomeIcon = () => {
    return (
        <Link to={paths.home}>
            <img 
                id='homeIcon' 
                className='clickable' 
                src={i.icons.home}
            />
        </Link>
    )
}

export default HomeIcon