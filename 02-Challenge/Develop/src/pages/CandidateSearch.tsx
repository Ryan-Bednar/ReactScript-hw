import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [candidates, setCandidates] = useState<Candidate[]>([]);

  useEffect(()=>{
    const fetchData = async () => {
      const data = await searchGithub();
      console.log(data);
      const candidateData = await Promise.all(
        data.map(async (user: { login: string }) => {
          const userData = await searchGithubUser(user.login);
          return {
            id: userData.id,
            name: userData.name,
            email: userData.email,
            phone: userData.phone,
            skills: userData.skills,
            avatar: userData.avatar_url,
          };
        })
      );
      setCandidates(candidateData);
    }
    fetchData();
  },[candidates])


    
  return (
    <div>
      <h1>CandidateSearch</h1>
      <div>
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <img src={candidate.avatar ?? ''} alt={candidate.name ?? 'No Name'} />
            <h2>{candidate.name}</h2>
            <p>{candidate.email}</p>
            <p>{candidate.phone}</p>
            <p>{candidate.skills?.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  )
};
export default CandidateSearch;
