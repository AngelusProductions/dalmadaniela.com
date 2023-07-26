import React from 'react'
import { Link } from 'react-router-dom'

import TeamMember from './TeamMember'

import teamMembers from '../../constants/data/teamMembers'
import { i } from '../../constants/data/assets'
import { paths } from '../../constants/paths'
import './styles/index.scss'

const t = {
  title1: ['Meet', 'Dalma\'s', 'powerful,'],
  title2: 'multipotentialite',
  title3: 'team',
}

const MeetTheTeam = () => {
  return (
    <main id='meetTheTeamPage'>
      <Link to={paths.home}>
        <img id='teamHomeIcon' className='clickable' src={i.icons.home} />
      </Link>
      <div id='teamTitleContainer' className='left'>
        <span>{t.title1[0]}</span>
        <span>{t.title1[1]}</span>
        <span>{t.title1[2]}</span>
        <span id='multipotentialite'>{t.title2}</span>
        <span>{t.title3}</span>
        <img id='teamDownwardSpiral' src={i.stars.starDownwardSpiral} />
      </div>
      <div id='teamMembersContainer' className='right'>
        {teamMembers.map(teamMember => (
          <TeamMember key={teamMember.id} {...teamMember} />
        ))}
      </div>
    </main>
  )
}

export default MeetTheTeam
