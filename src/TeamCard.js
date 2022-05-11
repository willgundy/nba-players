import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamCard({ team }) {
  console.log(team.nickname);

  return (
    <Link className='teamCard' 
      style={{ backgroundColor: team.primary, color: team.secondary }}
      to={`/team/${team.teamId}`}>
      <img 
        className='teamImage'
        src={`/teams/${team.nickname}.png`}
      />
      <h1>{team.fullName}</h1>
      <div className='flex-row'>
        <h3>{team.confName}</h3>
        <h3>{team.divName}</h3>
      </div>
    </Link>
  );
}
