import useTracker from './useTracker';

export const App = () => {
  const { username, password, onTrackData } = useTracker('', '')

  return (
    <div>
      <input name='username' type='text' value={username} onChange={onTrackData}/>
      <input name='password' type='password' value={password} onChange={onTrackData}/>
      <h1>Nome utente: {username}</h1>
      <h1>Password: {password}</h1>
    </div>
  )
}

