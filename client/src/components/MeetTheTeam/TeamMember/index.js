import React from 'react'
import { Link } from 'react-router-dom'

import { i } from '../../../constants/assets'
import { paths } from '../../../constants/routes'
import './index.scss'

const TeamMember = ({ name, label1, label2, image }) => (
  <section id={name} className='teamMemberContainer'>
    <img className='teamMemberPhoto' src={image} />
    <div className='teamMemberTextContainer'>
      <span className='teamMemberName'>{name}</span>
      <span>{label1} &</span>
      <span>{label2}</span>
    </div>
    <Link to={paths.home}>
      <img id='teamHomeIcon' className='clickable' src={i.icons.home} />
    </Link>
  </section>
)

export default TeamMember