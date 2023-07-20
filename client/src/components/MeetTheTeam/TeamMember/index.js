import React from 'react'
import './index.scss'

const TeamMember = ({ name, label1, label2, image }) => (
  <section id={name} className='teamMemberContainer'>
    <img src={image} />
    <div className='teamMemberTextContainer'>
      <span className='teamMemberName'>{name}</span>
      <span>{label1} &</span>
      <span>{label2}</span>
    </div>
  </section>
)

export default TeamMember