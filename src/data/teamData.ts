import avaneesh from '../assets/team/avaneesh_yajurvedi.jpg'
import durgesh from '../assets/team/Durgesh_President.jpg'

export interface TeamMember {
  name: string
  role: string
  image?: string   // imported image module — leave undefined to show generated avatar
  github?: string
  linkedin?: string
  instagram?: string
}

export interface TeamData {
  leadership: TeamMember[]
  technical: TeamMember[]
  events: TeamMember[]
  outreach: TeamMember[]
  contentPR: TeamMember[]
  documentation: TeamMember[]
}

const teamData: TeamData = {

  leadership: [
    {
      name: 'Durgesh',
      role: 'President',
      image: durgesh,
      github: 'https://github.com/Drugexsh',
      linkedin: 'https://www.linkedin.com/in/durgeshfore/',
    },
    {
      name: 'Avaneesh Yajurvedi',
      role: 'Vice President',
      image: avaneesh,
      github: 'https://github.com/AvaneeshYajurvedi',
      linkedin: 'http://www.linkedin.com/in/avaneesh-yajurvedi-99bb77377',
    },
  ],

  technical: [
    { name: '', role: 'Tech Lead' },
    { name: '', role: 'Technical Member' },
    { name: '', role: 'Technical Member' },
    { name: '', role: 'Technical Member' },
    { name: '', role: 'Tech Lead' },
    { name: '', role: 'Technical Member' },
    { name: '', role: 'Technical Member' },
    { name: '', role: 'Technical Member' },
  ],

  events: [
    { name: '', role: 'Team Head' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
  ],

  outreach: [
    { name: '', role: 'Team Head' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
  ],

  contentPR: [
    { name: '', role: 'Team Head' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
  ],

  documentation: [
    { name: '', role: 'Team Head' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
    { name: '', role: 'Team Member' },
  ],
}

export default teamData
