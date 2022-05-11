import { client } from './client';


export async function getNBAPlayers(from = 0, to = 20, perPage = 20) {
  const { body, count } = await client 
    .from('nbaPlayers')
    .select(`*, nbaTeam (*)`, { count: 'exact' })
    .range(from, to);

  const lastPage = Math.ceil(count / perPage);
    
  return { body, lastPage };
}

export async function getSinglePlayer(id) {
  const { body } = await client 
    .from('nbaPlayers')
    .select(`*, nbaTeam (*), nbaPlayerDrafted (*)`)
    .match({ personId: id })
    .single();
    
  return body;
}

export async function getSingleTeam(id) {
  const { body } = await client 
    .from('nbaTeam')
    .select('*')
    .match({ teamId: id })
    .single();
    
  return body;
}

export async function getNBATeams(from = 0, to = 20, perPage = 20) {
  const { body, count } = await client 
    .from('nbaTeam')
    .select(`*`, { count: 'exact' })
    .range(from, to);
  
  const lastPage = Math.ceil(count / perPage);
      
  return { body, lastPage };
}