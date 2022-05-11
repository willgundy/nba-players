import React from 'react';
import './App.css';
import TeamCard from './TeamCard';

export default function TeamCardList({ teams }) {

  return (
    <div className='playerContainer'>
      {teams.map((team, i) => 
        <TeamCard 
          key={i}
          team={team}
        />
      )}
    </div>
  );
}
