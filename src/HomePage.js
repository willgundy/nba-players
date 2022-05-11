import { useEffect, useState } from 'react';
import './App.css';
import { getNBAPlayers } from './services/fetch-utils';
import PlayerCardList from './PlayerCardList';

export default function HomePage() {
  const [nbaPlayers, setnbaPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(2);
  const perPage = 50;
  const from = currentPage * perPage - perPage;
  const to = currentPage * perPage - 1;

  useEffect(() => {
    async function getPlayers() {
      const players = await getNBAPlayers(from, to, perPage);

      setnbaPlayers(players.data);
      setLastPage(players.lastPage);
    }

    getPlayers();
  }, [currentPage]);
    
  return (
    <div>
      <h1>NBA Players</h1>
      {currentPage > 1 && <span onClick={() => setCurrentPage(currentPage - 1)}> {`<`} </span>}
      <span>{currentPage}</span>
      {currentPage < lastPage && <span onClick={() => setCurrentPage(currentPage + 1)}> {`>`} </span>}
      <PlayerCardList 
        players={nbaPlayers}
      />
    </div>
  );
}
