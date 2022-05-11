import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSinglePlayer } from './services/fetch-utils';

export default function PlayerDetail() {
  const [playerInfo, setPlayerInfo] = useState(false);
  const params = useParams();
  const [playerDraftInfo, setPlayerDraftInfo] = useState({});
  // const [draftedTeam, setDraftedTeam] = useState({});

  useEffect(() => {
    async function getPlayer() {
      const playerData = await getSinglePlayer(params.id);

      setPlayerInfo({ ...playerData });
    }

    async function getJSONData() {

      if (playerInfo.nbaPlayerDrafted) {

        const jsonBlob = JSON.parse(playerInfo.nbaPlayerDrafted.draft.replace(/'/g, '"'));

        setPlayerDraftInfo(jsonBlob);
  
        // const draftedBy = await getSingleTeam(playerDraftInfo.teamId);
  
        // setDraftedTeam(draftedBy);
      }
    }
    
    getPlayer();
    getJSONData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.id]);


  return (
    <div>
      <img 
        src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${playerInfo.personId}.png`}
        onError={(e) => {
          e.onError = null;
          e.src = './public/missing-image.png';
        }}
      />
      <h1>{playerInfo.firstName + ' ' + playerInfo.lastName}</h1>
      {/* <h2>{playerInfo.nbaTeam.fullName}</h2> */}
      <div className='playerFactSection'>
        <label className='playerFact flex-row'>
          Jersey Number: 
          <h3>{'#' + playerInfo.jersey}</h3>
        </label>
        <label className='playerFact flex-row'>
          Position: 
          <h3>{playerInfo.pos}</h3>
        </label>
        <label className='playerFact flex-row'>
          Years Played: 
          <h3>{playerInfo.yearsPro}</h3>
        </label>
        <label className='playerFact flex-row'>
          College: 
          <h3>{playerInfo.collegeName}</h3>
        </label>
        <h2>Drafted:</h2>
        <label className='playerFact flex-row'>
          Pick Number: 
          <h3>{playerDraftInfo.pickNum}</h3>
        </label>
        <label className='playerFact flex-row'>
          Draft Round: 
          <h3>{playerDraftInfo.roundNum}</h3>
        </label>
        <label className='playerFact flex-row'>
          Year Drafted: 
          <h3>{playerDraftInfo.seasonYear}</h3>
        </label>
        {/* <label className='playerFact flex-row'>
          Debut Year: 
          <h3>{playerInfo.nbaPlayerDrafted.yearsPro}</h3>
        </label>
        <h3>{draftedTeam.fullName}</h3> */}
      </div>
    </div>
  );
}
