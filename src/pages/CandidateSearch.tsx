import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import Candidate from '../interfaces/Candidate.interface.tsx'

const CandidateSearch = () => {
  const [users, setUsers] = useState<Candidate[]>([])
  const [candidate, setCandidate = useState<Candidate>()

    useEffect (() => 
    searchGithub()
    .then(data => {
      setUsers(data)
      console.log(data);

      const results = searchGithubUser(users[0])

      setCandidate()

    }))

    useEffect (() => {})
  return <h1>CandidateSearch</h1>;
};

export default CandidateSearch;
