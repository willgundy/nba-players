import { client } from './client';


export async function getNBAPlayers(from = 0, to = 20, perPage = 20) {
  const response = await client 
    .from('nba-players')
    .select(`*, nba_team (*)`, { count: 'exact' })
    .range(from, to);

  const lastPage = Math.ceil(response.count / perPage);
    
  return { ...response, lastPage };
}

export async function getSinglePlayer(id) {
  const response = await client 
    .from('nba-players')
    .select(`*, nba_team (*)`)
    .match({ personId: id });
    
  return { response };
}