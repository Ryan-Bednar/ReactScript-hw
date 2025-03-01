import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import { Candidate } from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    login: "",
    avatar_url: "",
    name: "",
    location: "",
    company: "",
    bio: "",
    email:"",
  });

  const [userLoginData, setUserLoginData] = useState<Candidate[]>([]);
  const [index, setIndex] = useState(1);

  console.log(userLoginData)

  useEffect(() =>{
    const searchForUser = async () => {
      const user = await searchGithub();
      
      setUserLoginData(user);
    }

    if(userLoginData.length === 0){
      searchForUser();
    }
  });

  useEffect(()=> {
    const searchUserDetails = async () => {
      const userData = await searchGithubUser(userLoginData[index].login);

      setCurrentCandidate(userData);
    }
    searchUserDetails();
  },
  [userLoginData,index]
)
  console.log(currentCandidate)

  return (
    
    <div>
      <h1>CandidateSearch</h1>
      <br/>
      <table>
      {currentCandidate.login?  
      <tbody>
        <img src={currentCandidate.avatar_url} alt={currentCandidate.name || currentCandidate.login} />
        <tr>
          <h2>
            {currentCandidate.login}
          </h2>
            <p>
            <strong>Location:</strong> {currentCandidate.location || "N/A"}
            </p>
          <p>
            <strong>Company:</strong>{currentCandidate.company || "N/A"}
          </p>
          <p>
            <strong>Bio:</strong>{currentCandidate.bio || "N/A"}
          </p>
          <p>
            <strong>Email:</strong>{currentCandidate.email|| "N/A"}
          </p>
        </tr>
        <button className='redbutton' onClick={
          () => setIndex(index+1)
        }>-</button>
        <button className='greenbutton' onClick={ () => {
          setIndex(index+1);
          const existingCandidates = JSON.parse(localStorage.getItem("savedCandidates") || "[]");
          const updatedCandidates = [...existingCandidates, currentCandidate];
          localStorage.setItem("savedCandidates", JSON.stringify(updatedCandidates));
        }}>+</button>
        </tbody>
      :<p>
        No Information available.
      </p>
        }
        </table>
      </div>
      
  )
};
export default CandidateSearch;

