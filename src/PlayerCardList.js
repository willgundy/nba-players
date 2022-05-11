import React from 'react';
import { useState } from 'react';
import './App.css';
import PlayerCard from './PlayerCard';

export default function PlayerCardList({ players }) {

  return (
    <div className='playerContainer'>
      {players.map((player, i) => 
        <PlayerCard 
          key={i}
          player={player}
        />
      )}
    </div>
  );
}
