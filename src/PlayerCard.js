import React from 'react';
import { Link } from 'react-router-dom';

export default function PlayerCard({ player }) {
  return (
    <Link className='playerCard' 
      style={{ backgroundColor: player.nba_team.primary, color: player.nba_team.secondary }}
      to={`/players/${player.personId}`}>
      <img 
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player.personId}.png`}
        onError={(e) => {
          e.onError = null;
          e.src = './public/missing-image.png';
        }}
      />
      <h1>{player.firstName + ' ' + player.lastName}</h1>
      <h2>{player.nba_team.fullName}</h2>
      <div className='flex-row'>
        <h3>{'#' + player.jersey}</h3>
        <h3>{player.pos}</h3>
      </div>
    </Link>
  );
}
