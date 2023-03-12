import useGithubUser from './useGithubUser';

export const App = () => {
  const { data } = useGithubUser('Marcoglp98')

  return (
    <div>
      {data && (
        <>
          <h1>{data.login}</h1>
          <h2>{data.html_url}</h2>
          <img src={data.avatar_url} alt='Profile picture' />
        </>
      )}
    </div>
  )
}

