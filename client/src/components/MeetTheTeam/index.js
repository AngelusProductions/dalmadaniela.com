import React from 'react'

import TeamMember from './TeamMember'
import { i } from '../../constants/assets'
import teamMembers from '../../constants/team'
import './index.scss'

const t = {
  title1: ['Meet', 'Dalma\'s', 'powerful,'],
  title2: 'multipotentialite',
  title3: 'team',
}

const MeetTheTeam = () => {
  return (
    <main id='meetTheTeamPage'>
      <div id='teamTitleContainer' className='left'>
        <span>{t.title1[0]}</span>
        <span>{t.title1[1]}</span>
        <span>{t.title1[2]}</span>
        <span id='multipotentialite'>{t.title2}</span>
        <span>{t.title3}</span>
        <img src={i.stars.starDownwardSpiral} />
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
