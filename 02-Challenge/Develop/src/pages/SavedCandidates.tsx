import { useState } from 'react';
import { Candidate } from '../interfaces/Candidate.interface'

const SavedCandidates = () => {
  const savedCandidates = localStorage.getItem('savedCandidates');
  const initialCandidates: Candidate[] = savedCandidates ? JSON.parse(savedCandidates) : [];
  const [candidates, setCandidates] = useState<Candidate[]>(initialCandidates);

  const removeCandidate = (candidateId: string) => {
    const updatedCandidates = candidates.filter(candidate => candidate.login !== candidateId);
    setCandidates(updatedCandidates);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedCandidates));
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate: Candidate, index: number) => (
            <tr key={index}>
              <img src={candidate.avatar_url || "N/A"}/>
              <td>{candidate.login || "N/A"}</td>
              <td>{candidate.location || "N/A"}</td>
              <td>{candidate.email || "N/A"}</td>
              <td>{candidate.company || "N/A"}</td>
              <td>{candidate.bio || "N/A"}</td>
              <td><button className='redbutton' onClick={() => removeCandidate(candidate.login)}>Denied</button></td>
            </tr>
          ))}
        </tbody>
        </table>
    </>
  );
};

export default SavedCandidates;
