import { useEffect, useState } from 'react';
import './App.css';
import { getNBATeams } from './services/fetch-utils';
import TeamCardList from './TeamCardList';

export default function TeamsPage() {
  const [nbaTeams, setNBATeams] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const perPage = 20;
  const from = currentPage * perPage - perPage;
  const to = currentPage * perPage - 1;

  useEffect(() => {
    async function getTeams() {
      const players = await getNBATeams(from, to, perPage);

      setNBATeams(players.body);
      setLastPage(players.lastPage);
    }

    getTeams();
  }, [currentPage]);
    
  return (
    <div>
      <h1>NBA Teams</h1>
      {currentPage > 1 && <span className='spanClick' onClick={() => setCurrentPage(currentPage - 1)}> {`<`} </span>}
      <span className='currentPage'>{currentPage}</span>
      {currentPage < lastPage && <span className='spanClick' onClick={() => setCurrentPage(currentPage + 1)}> {`>`} </span>}
      <TeamCardList 
        teams={nbaTeams}
      />
    </div>
  );
}