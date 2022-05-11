import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamCard({ team }) {
  return (
    <Link className='teamCard' 
      style={{ backgroundColor: team.primary, color: team.secondary }}
      to={`/team/${team.teamId}`}>
      <img 
        src={`./public/teams/${team.nickname}.png`}
      />
      <h1>{team.fullName}</h1>
      <div className='flex-row'>
        <h3>{team.confName}</h3>
        <h3>{team.divName}</h3>
      </div>
    </Link>
  );
}
