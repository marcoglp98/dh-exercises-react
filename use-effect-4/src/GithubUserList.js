import { useState } from 'react';
import GithubUser from './GithubUser';

export const GithubUserList = () => {
  const [usernames, setUsernames] = useState([]);
  const [newUsername, setNewUsername] = useState('');

  const handleNewUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handleAddUsername = async () => {
    const response = await fetch(`https://api.github.com/users/${newUsername}`);
    if (response.status == 200) {
      const data = await response.json();
      setUsernames([...usernames, data.login]);
    }
    setNewUsername('');
  };

  return (
    <div>
      <div>
        <input type="text" value={newUsername} onChange={handleNewUsernameChange} />
        <button onClick={handleAddUsername}>Aggiungi</button>
      </div>
      {usernames.map((username) => (
        <GithubUser key={username} data={username} />
      ))}
    </div>
  );
};

