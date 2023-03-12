import {useParams} from 'react-router-dom';

export const ShowGithubUser = () => {
  let { username } = useParams();

  return (
    <div>
      {username && (
          <h1>{username}</h1>
      )}
    </div>
  );
};

